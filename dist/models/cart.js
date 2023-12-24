"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var cartSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    product: [{
            productDetail: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: { type: Number },
            total: { type: Number },
        }],
    createdAt: { default: Date.now() }
});
exports.default = mongoose_1.default.model("cart", cartSchema);
