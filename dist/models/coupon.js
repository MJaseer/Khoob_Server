import mongoose, { Schema } from "mongoose";
const couponSchema = new Schema({
    code: { type: String, unique: true, required: true },
    title: { type: String, required: true },
    discount: { type: Number, required: true },
    minAmount: { type: Number, required: true },
    maxDiscountAmount: { type: Number, required: true },
    users: [{
            userId: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        }],
    expireAt: { type: Date, required: true },
    createdAt: { default: Date.now() },
    image: { type: String },
});
export default mongoose.model("Coupon", couponSchema);
//# sourceMappingURL=coupon.js.map