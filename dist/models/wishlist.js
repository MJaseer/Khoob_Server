import mongoose, { Schema } from "mongoose";
const wishlistSchema = new Schema({
    products: [{
            productId: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
            },
        }],
    user: { type: Schema.Types.ObjectId }
});
export default mongoose.model("Wishlist", wishlistSchema);
//# sourceMappingURL=wishlist.js.map