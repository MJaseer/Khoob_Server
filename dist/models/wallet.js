"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var walletSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId },
    createdAt: { default: Date.now() },
    paymentDetail: [{
            paidAmount: { type: Number },
            payableAmount: { type: Number },
            paidDate: { type: Date, default: Date.now() },
            createdAt: { default: Date.now() },
            orderId: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Order'
            }
        }],
});
exports.default = mongoose_1.default.model("Wallet", walletSchema);
