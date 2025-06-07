import { Request, Response } from "express";
import { Product } from "../models/productsModels";
import { ProductInterface } from "../interfaces/productsInterfaces";



// Data recovery method (GET) :
const getAllProducts = async (req: Request, res: Response) => {
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

// data recovery method (GET - ID) :
const getProductsId = async (req: Request, res: Response) => {


    try {
        const id = req.params.id;
        const productId = await Product.findById(id);
      
        if (!productId) {
            res.status(404).json({
                succes: false,
                data: productId,
                message: "El producto no pudo ser encontrado"
            });
        } else {
            res.status(200).json({
                success: true,
                data: productId,
                messages: `${productId.productName} ha sido encontrado`
            });
        };
    } catch (error) {
        const err = error as Error;

        res.status(500).json({
            succes: true,
            message: "Ocurrio un error al buscar el producto",
            error: err.message
        })
    }

}

// Method to add a new product (POST) : 
const postNewProduct = async (req: Request, res: Response) => {

    const body = req.body;
    const { productName, price, description, stock, category } = body;

    if (!productName || !price || !category) {
        res.status(400).json({
            sucess: false,
            message: "invalid data"
        });
    }

    try {

        const newProductData: ProductInterface = { productName, price, category, description, stock }

        if (description !== undefined || stock !== undefined) {
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

// Method to update a product (UPDATE) : 
const updateProductId = async (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;

    try {
        const patchProduct = await Product.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!patchProduct) {
            res.status(404).json({
                sucess: false,
                message: "El producto no puedo ser actuazizado, debido a que no fue encontrado"
            });
        } else {
            res.status(200).json({
                success: true,
                data: patchProduct,
                message: "El producto fue actualizado correctamente"
            });
        };

    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            sucucess: false,
            message: "Ocurrio un error al intentar actualizar el juego",
            error: err.message
        })
    }
}

// Method to delete a product (DELETE) : 
const deleteProductId = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            res.status(404).json({
                success: false,
                message: "El producto no pudo ser encontrado"
            });
        } else {
            res.json({
                success: true,
                data: deletedProduct,
                messages: `${deletedProduct} ha sido eliminado con exito`
            });
        };

    } catch (error) {
        const err = error as Error;

        res.status(500).json({
            success: false,
            messages: "Lo sentimos ha ocurrido un error, el producto no pudo ser eliminado",
            error: err.message
        });
    };

};

export { getAllProducts, postNewProduct, getProductsId, updateProductId, deleteProductId }