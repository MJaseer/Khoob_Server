import mongoose, { Schema } from "mongoose";
const categorySchema = new Schema({
    products: [{
            productId: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
            },
        }],
    title: { type: String, required: true },
    createdAt: { default: Date.now() },
    image: { type: String },
});
export default mongoose.model("Category", categorySchema);
//# sourceMappingURL=category.js.map