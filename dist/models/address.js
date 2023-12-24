"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressObjSchema = void 0;
var mongoose_1 = require("mongoose");
exports.addressObjSchema = new mongoose_1.Schema({
    street: String,
    city: String,
    state: String,
    zip: String,
    houseName: String,
    landMark: String,
    createdAt: { default: Date.now() }
});
var addressSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    savedArray: [exports.addressObjSchema],
}, {
    timestamps: true
});
exports.default = mongoose_1.default.model("Address", addressSchema);
