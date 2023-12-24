"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var morgan_1 = require("morgan");
var cors_1 = require("cors");
var mongo_js_1 = require("./config/database/mongo.js");
var user_router_js_1 = require("./router/user/user-router.js");
var redis_js_1 = require("./config/database/redis.js");
var app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
    origin: ['http://localhost:4200', '*']
}));
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
(0, mongo_js_1.default)();
redis_js_1.default.connect();
app.use("/api", user_router_js_1.default);
var port = process.env.PORT;
app.listen(port, function () {
    console.log("The server start at running on port ".concat(port));
});
