"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var reviewSchema = new mongoose_1.Schema({
    productId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { default: Date.now() },
    rating: { type: Number }
});
exports.default = mongoose_1.default.model("Review", reviewSchema);
