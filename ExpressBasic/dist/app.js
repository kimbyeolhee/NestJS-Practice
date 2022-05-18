"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_route_1 = require("./cats/cats.route");
var app = express();
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("😀 logging Middleware");
    next();
});
app.use(express.json());
app.use(cats_route_1.default);
app.use(function (req, res, next) {
    console.log("✋ Error Middleware");
    res.send({ error: "404 Not Found Error" });
});
app.listen(8000, function () {
    console.log("Server started");
});
//# sourceMappingURL=app.js.map