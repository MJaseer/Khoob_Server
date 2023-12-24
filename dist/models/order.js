"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var address_js_1 = require("./address.js");
var orderSchema = new mongoose_1.Schema({
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
            orderStatus: {
                type: String,
                default: 'Pending'
            }
        }],
    total: {
        type: Number,
        required: true,
    },
    address: {
        type: address_js_1.addressObjSchema
    },
    paymentStatus: { type: Boolean, default: false },
    paymentMethod: { type: String },
    isCanceled: { type: Boolean, default: false },
    cancelReason: { type: String },
    createdAt: { default: Date.now() }
});
exports.default = mongoose_1.default.model("Order", orderSchema);
