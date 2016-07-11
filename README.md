# `readwrite`, for all of your reading and writing

This simple, lightweight, elegant library allows you to read files simply and efficiently.

## Example

    const rw = require("readwrite");

    rw.write("forty.two", "42 is a very special number.\nUse it wisely.");

    console.log(rw.read("forty.two"));
    // 42 is a very special number.
    // Use it wisely.