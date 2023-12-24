"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var couponSchema = new mongoose_1.Schema({
    code: { type: String, unique: true, required: true },
    title: { type: String, required: true },
    discount: { type: Number, required: true },
    minAmount: { type: Number, required: true },
    maxDiscountAmount: { type: Number, required: true },
    users: [{
            userId: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'User'
            }
        }],
    expireAt: { type: Date, required: true },
    createdAt: { default: Date.now() },
    image: { type: String },
});
exports.default = mongoose_1.default.model("Coupon", couponSchema);
