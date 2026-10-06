# TOEFL Practice Tests

A static, browser-based TOEFL practice app with section drills and full-length tests. It includes practice material for Reading, Listening, Writing, and Speaking, with timed sessions, objective scoring where supported, and tools to review or export your work.

## Run locally

Serve the project directory over HTTP, then open the local address in a browser. For example:

```sh
python3 -m http.server 8000
```

Visit [http://localhost:8000](http://localhost:8000). Serving over HTTP is recommended over opening `index.html` directly because browsers may restrict local file access and media features.

## Use the app

- `index.html` lists full tests and practice tests by section.
- Start a test and follow the device, audio, or microphone checks shown for that test.
- `scores.html` shows saved attempts and lets you download results as JSON, CSV, or ZIP.
- Results, writing, and recordings are stored in the current browser only. Clearing browser site data or using another browser/device will not carry them over. Export results to keep a backup.
- Writing and Speaking responses are saved for review; they are not automatically scored.

## Project structure

- `data/test-registry.js` — test catalog and dataset mappings.
- `data/{reading,listening,writing,speaking}/` — test content datasets.
- `js/` — test flow, storage, media, scoring, and export logic.
- `css/`, `assets/`, `fonts/`, and `img/` — interface styles and media assets.
- `tests/` — automated tests.

## Tests

The test suite uses Bun:

```sh
bun test
```

This project is a practice tool and is not affiliated with or endorsed by ETS.
