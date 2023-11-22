import mongoose, { Schema } from "mongoose";
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    returnPolicy: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: [String],
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    reviews: {
        type: Schema.Types.ObjectId,
        ref: 'Reviews',
    },
}, {
    timestamps: true
});
export default mongoose.model("Product", productSchema);
//# sourceMappingURL=product.js.map