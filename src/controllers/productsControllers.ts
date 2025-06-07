import { Request, Response } from "express";
import { Product } from "../models/productsModels";
import { ProductInterface } from "../interfaces/productsInterfaces";

const getAllProducts = async ( req: Request, res: Response ) => {
    try {
        const products = await Product.find();
        res.json({
            success: true,
            message: 'Productos recuperados exitosamente 🙌',
            data: Product,
        })
        
    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            success: false,
            error: err
        })
    };
};

export { getAllProducts, }