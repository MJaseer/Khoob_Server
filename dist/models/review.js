import mongoose, { Schema } from "mongoose";
const reviewSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { default: Date.now() },
    rating: { type: Number }
});
export default mongoose.model("Review", reviewSchema);
//# sourceMappingURL=review.js.map