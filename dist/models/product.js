"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    returnPolicy: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: [String],
        required: true
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    reviews: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Reviews',
    },
}, {
    timestamps: true
});
exports.default = mongoose_1.default.model("Product", productSchema);
