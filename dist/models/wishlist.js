"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var wishlistSchema = new mongoose_1.Schema({
    products: [{
            productId: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Product',
            },
        }],
    user: { type: mongoose_1.Schema.Types.ObjectId }
});
exports.default = mongoose_1.default.model("Wishlist", wishlistSchema);
