"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var categorySchema = new mongoose_1.Schema({
    products: [{
            productId: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Product',
            },
        }],
    title: { type: String, required: true },
    createdAt: { default: Date.now() },
    image: { type: String },
});
exports.default = mongoose_1.default.model("Category", categorySchema);
