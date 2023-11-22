import mongoose, { Schema } from "mongoose";
const cartSchema = new Schema({
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
        }],
    createdAt: { default: Date.now() }
});
export default mongoose.model("cart", cartSchema);
//# sourceMappingURL=cart.js.map