import { Request, Response } from "express";
import { Product } from "../models/productsModels";
import { ProductInterface } from "../interfaces/productsInterfaces";

const getAllProducts = async ( req: Request, res: Response ) => {
    try {
        const products = await Product.find();
        res.json({
            success: true,
            message: 'Productos recuperados exitosamente 🙌',
            data: products,
        })
        
    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            success: false,
            error: err
        })
    };
};

const postNewProduct = async ( req: Request, res: Response) => {
 
    const body = req.body;
    const { productName, price, description, stock, category } = body;

    if ( !productName || !price || !category ) {
        res.status(400).json({
            sucess: false,
            message: "invalid data"
        });
    }

    try {
        
        const newProductData: ProductInterface = { productName, price, category }

        if ( description !== undefined || stock !== undefined ) {
            newProductData.description = description;
            newProductData.stock = stock;
        }

        const newProduct = new Product(newProductData);
        await newProduct.save();

        res.status(201).json({
            success: true,
            data: newProduct,
            message: `The product was added to the database.` 
        });

    } catch (error) {
        const err = error as Error

        res.status(500).json({
            succes: false,
            message: err.message
        })
    }

}

export { getAllProducts, postNewProduct }