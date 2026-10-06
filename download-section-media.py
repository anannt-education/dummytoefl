#!/usr/bin/env python3
"""Download media referenced by the Listening and Speaking test data.

This is intentionally standalone: it reads data files but never changes them.
Downloaded MP3s retain the paths used by the site. Speaking interview videos
from Vercel Blob are saved beneath assets/video/speaking/test-N/.

Examples:
  python3 download-section-media.py
  python3 download-section-media.py --dry-run
  python3 download-section-media.py --workers 12 --retries 4
"""

from __future__ import annotations

import argparse
import concurrent.futures
import re
import sys
import threading
import time
import urllib.error
import urllib.parse
import urllib.request
from dataclasses import dataclass
from pathlib import Path


SITE_BASE = "https://www.toeflmocktests.com"
R2_DEFAULT_BASE = "https://cd05embx4yrtf5aa.public.blob.vercel-storage.com"
MEDIA_RE = re.compile(r"(?P<quote>['\"])(?P<path>[^'\"]+\.(?:mp3|mp4|webp|png|jpg|jpeg|svg|json))(?:\?[^'\"]*)?(?P=quote)", re.I)
R2_BASE_RE = re.compile(r"R2_SPEAKING_BASE\s*=\s*['\"]([^'\"]+)['\"]")
TEST_RE = re.compile(r"test-(\d+)")
PRINT_LOCK = threading.Lock()


@dataclass(frozen=True)
class Download:
    url: str
    destination: Path


def log(message: str) -> None:
    with PRINT_LOCK:
        print(message, flush=True)


def test_number(path: Path) -> str:
    match = TEST_RE.search(path.name)
    if not match:
        raise ValueError(f"Cannot determine test number from {path}")
    return match.group(1)


def collect_downloads(root: Path) -> list[Download]:
    downloads: dict[Path, str] = {}

    for section in ("listening", "speaking", "writing"):
        for data_file in sorted((root / "data" / section).glob("test-*.js")):
            contents = data_file.read_text(encoding="utf-8")
            r2_base_match = R2_BASE_RE.search(contents)
            r2_base = r2_base_match.group(1) if r2_base_match else R2_DEFAULT_BASE

            for match in MEDIA_RE.finditer(contents):
                media_path = match.group("path")
                suffix = Path(urllib.parse.urlparse(media_path).path).suffix.lower()
                if suffix == ".mp3":
                    url = urllib.parse.urljoin(SITE_BASE + "/", media_path)
                    destination = root / media_path.lstrip("/")
                elif suffix == ".mp4":
                    # The data stores these as R2_SPEAKING_BASE + '/filename.mp4'.
                    url = urllib.parse.urljoin(r2_base.rstrip("/") + "/", media_path)
                    destination = root / "assets" / "video" / "speaking" / f"test-{test_number(data_file)}" / Path(media_path).name
                elif suffix in (".webp", ".png", ".jpg", ".jpeg", ".svg", ".json"):
                    # Writing avatars are stored as bare filenames; all other
                    # local images and speaking scene JSON carry their full path.
                    if section == "writing" and "/" not in media_path:
                        media_path = "/img/writing/" + media_path
                    url = urllib.parse.urljoin(SITE_BASE + "/", media_path)
                    destination = root / urllib.parse.urlparse(media_path).path.lstrip("/")
                else:
                    continue

                existing = downloads.get(destination)
                if existing and existing != url:
                    raise ValueError(f"Conflicting sources for {destination}: {existing} / {url}")
                downloads[destination] = url

    return [Download(url=url, destination=destination) for destination, url in sorted(downloads.items())]


def download_one(job: Download, retries: int, overwrite: bool, dry_run: bool) -> str:
    if job.destination.exists() and not overwrite and job.destination.stat().st_size > 0:
        return "skipped"
    if dry_run:
        log(f"WOULD DOWNLOAD {job.url} -> {job.destination}")
        return "dry-run"

    job.destination.parent.mkdir(parents=True, exist_ok=True)
    temporary = job.destination.with_name(job.destination.name + ".part")
    request = urllib.request.Request(job.url, headers={"User-Agent": "TOEFL-media-downloader/1.0"})

    for attempt in range(1, retries + 1):
        try:
            with urllib.request.urlopen(request, timeout=60) as response, temporary.open("wb") as output:
                content_type = response.headers.get_content_type()
                if not content_type.startswith(("audio/", "video/", "image/", "application/json", "application/octet-stream")):
                    raise ValueError(f"unexpected content type: {content_type}")
                while chunk := response.read(1024 * 1024):
                    output.write(chunk)
            if temporary.stat().st_size == 0:
                raise ValueError("empty response")
            temporary.replace(job.destination)
            return "downloaded"
        except urllib.error.HTTPError as error:
            temporary.unlink(missing_ok=True)
            if error.code in (404, 410):
                log(f"MISSING ({error.code}): {job.url}")
                return "missing"
            detail = f"HTTP {error.code}"
        except (urllib.error.URLError, TimeoutError, ValueError, OSError) as error:
            temporary.unlink(missing_ok=True)
            detail = str(error)

        if attempt == retries:
            log(f"FAILED after {retries} attempts: {job.url} ({detail})")
            return "failed"
        time.sleep(min(2 ** (attempt - 1), 8))

    return "failed"  # Unreachable, retained for type clarity.


def main() -> int:
    parser = argparse.ArgumentParser(description="Download Listening and Speaking source media.")
    parser.add_argument("--workers", type=int, default=8, help="simultaneous downloads (default: 8)")
    parser.add_argument("--retries", type=int, default=3, help="attempts per transient failure (default: 3)")
    parser.add_argument("--overwrite", action="store_true", help="download again even when a nonempty local file exists")
    parser.add_argument("--dry-run", action="store_true", help="list downloads without creating files")
    parser.add_argument("--images-only", action="store_true", help="download images and scene JSON without downloading audio/video")
    args = parser.parse_args()
    if args.workers < 1 or args.retries < 1:
        parser.error("--workers and --retries must both be at least 1")

    root = Path(__file__).resolve().parent
    jobs = collect_downloads(root)
    if args.images_only:
        jobs = [job for job in jobs if job.destination.suffix.lower() not in (".mp3", ".mp4")]
    mp3_count = sum(job.destination.suffix.lower() == ".mp3" for job in jobs)
    mp4_count = sum(job.destination.suffix.lower() == ".mp4" for job in jobs)
    image_count = len(jobs) - mp3_count - mp4_count
    log(f"Found {len(jobs)} unique files ({mp3_count} MP3, {mp4_count} MP4, {image_count} images/scene JSON).")

    totals: dict[str, int] = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=args.workers) as pool:
        futures = [pool.submit(download_one, job, args.retries, args.overwrite, args.dry_run) for job in jobs]
        for future in concurrent.futures.as_completed(futures):
            status = future.result()
            totals[status] = totals.get(status, 0) + 1

    log("Complete: " + ", ".join(f"{status}={count}" for status, count in sorted(totals.items())))
    return 1 if totals.get("failed", 0) else 0


if __name__ == "__main__":
    sys.exit(main())
