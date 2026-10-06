/* Dependency-free ZIP writer (stored entries; audio is already compressed). */
var ZipExport = (function () {
  'use strict';
  var encoder = new TextEncoder();
  var table = new Uint32Array(256);
  for (var n = 0; n < 256; n++) {
    var c = n;
    for (var k = 0; k < 8; k++) c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  function crc32(bytes) {
    var crc = 0xffffffff;
    for (var i = 0; i < bytes.length; i++) crc = table[(crc ^ bytes[i]) & 255] ^ (crc >>> 8);
    return (crc ^ 0xffffffff) >>> 0;
  }
  async function create(files) {
    if (files.length > 65535) throw new Error('Too many files for a ZIP export.');
    var parts = [], directory = [], offset = 0, directorySize = 0;
    for (var file of files) {
      var name = encoder.encode(file.name);
      var bytes = file.data instanceof Blob
        ? new Uint8Array(await file.data.arrayBuffer()) : encoder.encode(String(file.data));
      if (name.length > 65535 || offset + bytes.length + name.length + 30 > 0xffffffff) {
        throw new Error('ZIP export exceeds the 4 GB limit.');
      }
      var crc = crc32(bytes);
      var local = new Uint8Array(30), l = new DataView(local.buffer);
      l.setUint32(0, 0x04034b50, true);
      l.setUint16(4, 20, true);
      l.setUint16(6, 0x0800, true); // UTF-8 filenames
      l.setUint16(12, 33, true); // 1980-01-01
      l.setUint32(14, crc, true);
      l.setUint32(18, bytes.length, true);
      l.setUint32(22, bytes.length, true);
      l.setUint16(26, name.length, true);
      var central = new Uint8Array(46), d = new DataView(central.buffer);
      d.setUint32(0, 0x02014b50, true);
      d.setUint16(4, 20, true);
      d.setUint16(6, 20, true);
      d.setUint16(8, 0x0800, true);
      d.setUint16(14, 33, true);
      d.setUint32(16, crc, true);
      d.setUint32(20, bytes.length, true);
      d.setUint32(24, bytes.length, true);
      d.setUint16(28, name.length, true);
      d.setUint32(42, offset, true);
      parts.push(local, name, bytes);
      directory.push(central, name);
      offset += local.length + name.length + bytes.length;
      directorySize += central.length + name.length;
    }
    if (offset + directorySize + 22 > 0xffffffff) throw new Error('ZIP export exceeds the 4 GB limit.');
    var end = new Uint8Array(22), e = new DataView(end.buffer);
    e.setUint32(0, 0x06054b50, true);
    e.setUint16(8, files.length, true);
    e.setUint16(10, files.length, true);
    e.setUint32(12, directorySize, true);
    e.setUint32(16, offset, true);
    return new Blob(parts.concat(directory, [end]), { type: 'application/zip' });
  }
  return { create: create };
})();
