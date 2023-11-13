import { Document, Model } from "mongoose";
import { User } from "../../models/user.js";
import { Address } from "../../models/address.js";
import { Cart } from "../../models/cart.js";
import { Review } from "../../models/review.js";
import { Wallet } from "../../models/wallet.js";
import { Product } from "../../models/product.js";
import { Category } from "../../models/category.js";
import { Order } from "../../models/order.js";
import { Wishlist } from "../../models/wishlist.js";
import { Coupon } from "../../models/coupon.js";


export class Creates{

    create = async <T>(item: string, value: (User | Address | Cart | Coupon | Review | Wallet | Product | Category | Order | Wishlist), itemSchema: Model<T & Document>) => {
        try {
            const data = new itemSchema(value)
            if (!data) throw new Error('No data found');
            const saveData = await data.save()
            return saveData
        } catch (error) {
            console.log(error);
            if (error instanceof Error) throw new Error(`Failed to create ${item}`);
            else throw error;
        }
    }

}

