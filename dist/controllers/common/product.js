import productSchema from "../../models/product.js";
import dotenv from "dotenv";
import { Creates } from "../../repositeries/common/create.js";
dotenv.config();
export class ProductClass {
    constructor() {
        this.createService = new Creates();
    }
    async addProduct(req, res) {
        try {
            const { name, description, returnPolicy, tags, category, quantity, image } = req.body;
            const productData = {
                name: name,
                description: description,
                category: category,
                quantity: quantity,
                returnPolicy: returnPolicy,
                tags: tags,
                image: image,
            };
            const newProduct = await this.createService.create('produc', productData, productSchema);
            res.status(200).json({ message: 'Product succesfully created', newProduct });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Failed to create product" });
        }
    }
}
//# sourceMappingURL=product.js.map