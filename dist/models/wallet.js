import mongoose, { Schema } from "mongoose";
const walletSchema = new Schema({
    user: { type: Schema.Types.ObjectId },
    createdAt: { default: Date.now() },
    paymentDetail: [{
            paidAmount: { type: Number },
            payableAmount: { type: Number },
            paidDate: { type: Date, default: Date.now() },
            createdAt: { default: Date.now() },
            orderId: {
                type: Schema.Types.ObjectId,
                ref: 'Order'
            }
        }],
});
export default mongoose.model("Wallet", walletSchema);
//# sourceMappingURL=wallet.js.map