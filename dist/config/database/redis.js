"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redis_1 = require("redis");
var client = redis_1.default.createClient();
client.on('connect', function () {
    console.log('redis connected');
});
exports.default = client;
