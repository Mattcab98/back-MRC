
import { Schema, model, version } from "mongoose";
import { ProductInterface } from "../interfaces/productsInterfaces";
import { categoryListData } from "../utils/categoryListData";

const ProductSchema: Schema<ProductInterface> = new Schema<ProductInterface>({

    productName: { type: String, required: true, unique: true, set: (s: string) => s.toLocaleLowerCase() },

    price: { type: Number, required: true, set: (n: number) => Math.round(n) },

    description: { type: String, required: true, set: (s: string) => s.toLocaleLowerCase() },

    stock: { type: Number, required: true, default: 0, set: (n: number) => Math.round(n) },

    category: {
        type: String,
        required: true,
        validate: {
            validator: (typeCategory: string) => categoryListData.includes(typeCategory.toLocaleLowerCase()),
            message: (props) => `${props.value} no es una categoria valida`
        },
    }
}, {versionKey: false});

const Product = model<ProductInterface>('Product', ProductSchema);

export { Product };