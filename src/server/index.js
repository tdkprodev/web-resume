"use strict";
exports.__esModule = true;
console.log("server index.ts starting");
var express = require("express");
var path = require("path");
var app = express();
var port = process.env.PORT || 3001;
//Static file declaration
console.log("dir is ---", path.resolve(__dirname, "../client/build"));
app.use(express.static(path.resolve(__dirname, "../client/build")));
//production mode
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve(__dirname, "../client/build")));
    //
    app.get("*", function (req, res) {
        res.sendfile(path.resolve(__dirname, "../client/build/index.html"));
    });
}
//build mode
app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../client/public/index.html"));
});
//start server
app.listen(port, function (req, res) {
    console.log("server listening on port: " + port);
});
