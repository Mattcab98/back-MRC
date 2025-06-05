
import { Schema, model } from "mongoose";
import { ProductInterface } from "../interfaces/productsInterfaces";

const ProductSchema: Schema<ProductInterface> = new Schema<ProductInterface>({

    productName: { type: String, required: true, unique: true },

    price: { type: Number, required: true },

    description: { type: String, required: true },

    stock: { type: Number, required: true },

    category: {
        type: String,
        required: true,
        enum: [
            "golosinas",
            "reposteria",
            "descartables",
            "cotillon y fiestas",
            "decoracion tortas"
        ]
    }

});

const Product = model<ProductInterface>('Product', ProductSchema);

export { Product };