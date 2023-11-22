import mongoose, { Schema } from "mongoose";
import { addressObjSchema } from "./address.js";
const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    product: [{
            productDetail: {
                type: Schema.Types.ObjectId,
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
        type: addressObjSchema
    },
    paymentStatus: { type: Boolean, default: false },
    paymentMethod: { type: String },
    isCanceled: { type: Boolean, default: false },
    cancelReason: { type: String },
    createdAt: { default: Date.now() }
});
export default mongoose.model("Order", orderSchema);
//# sourceMappingURL=order.js.map