"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_models_1 = require("./app.models");
var app = express();
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("😀 logging Middleware");
    next();
});
app.use(express.json());
app.get("/cats", function (req, res) {
    try {
        var cats = app_models_1.Cat;
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
app.get("/cats/:id", function (req, res) {
    try {
        var cat = app_models_1.Cat.find(function (cat) {
            return cat.id === req.params.id;
        });
        res.status(200).send({
            success: true,
            data: cat,
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
app.post("/cats", function (req, res) {
    try {
        var data = req.body;
        app_models_1.Cat.push(data);
        res.status(200).send({
            success: true,
            data: data,
        });
    }
    catch (error) {
        res.send({
            success: false,
            error: error.message,
        });
    }
});
app.use(function (req, res, next) {
    console.log("✋ Error Middleware");
    res.send({ error: "404 Not Found Error" });
});
app.listen(8000, function () {
    console.log("Server started");
});
//# sourceMappingURL=app.js.map