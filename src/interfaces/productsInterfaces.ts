import { categoryListData } from "../utils/categoryListData";

type CategoryProduct = typeof categoryListData[number];

interface ProductInterface {
    productName: string;
    price: number;
    description: string;
    stock: number;
    category: CategoryProduct;
};

export { ProductInterface, CategoryProduct };