var fs = require("fs");
// compressing
var zlib = require("zlib")

var readable = fs.createReadStream(__dirname + "/greet.txt", {
  encoding: "utf-8",
  highWaterMark: 4 * 1024,
});


var writable = fs.createWriteStream(__dirname + "/created.txt");

// transform stream
var gzip = zlib.createGzip();

var compressed = fs.createWriteStream(__dirname + "/created.txt.gz");

readable.pipe(gzip).pipe(compressed)

readable.pipe(writable)

compressed.on('finish', () => {
    var decrypt = fs.createReadStream(__dirname + "/created.txt.gz")
    var gunzip = zlib.createGunzip();
    var decompressed = fs.createWriteStream(__dirname + "/decompressed.txt");
    decrypt.pipe(gunzip).pipe(decompressed)
    console.log("Compression successful")

    decompressed.on('error', (err) => {
        console.error("Error!! ", err)
    })

    decompressed.on('finish', () => {
        console.log("Decompression finished")
    })
})