import { Model } from "mongoose";
import { IAddress } from "../../models/address.js";
import { IProduct } from "../../models/product.js";
import { ICart } from "../../models/cart.js";
import { IReview } from "../../models/review.js";
import { ICategory } from "../../models/category.js";
import { IOrder } from "../../models/order.js";
import { ICoupon } from "../../models/coupon.js";
import { IWallet } from "../../models/wallet.js";
import { IWishlist } from "../../models/wishlist.js";
import { IUser } from "../../models/user.js";

export const deleteOne = async (item: string, value: string, Schema: Model<IAddress | IUser | IProduct | ICart | IReview | ICategory | IOrder | ICoupon | IWallet | IWishlist>) => {
    try {
        const data = await Schema.deleteOne({ [item]: value }, { new: true });
        if (!data) throw new Error('No data found');
        return { message: `${item} succesfully deleted` }
    } catch (error) {
        console.log(error);
        if (error instanceof Error) throw new Error(`Failed to delete ${item}`);
        else throw error;
    }
}

export const deleteMany = async (item: string, value: string, Schema: Model<IAddress | IUser | IProduct | ICart | IReview | ICategory | IOrder | ICoupon | IWallet | IWishlist>) => {
    try {
        const data = await Schema.deleteMany({ [item]: value }, { new: true })
        if (!data) throw new Error('No data found');
        return { message: `${item} succesfully deleted` }
    } catch (error) {
        console.log(error);
        if (error instanceof Error) throw new Error(`Failed to delete ${item}`);
        else throw error;
    }
}
