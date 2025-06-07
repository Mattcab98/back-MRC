import { Router } from "express";
import { getAllProducts, postNewProduct, getProductsId, updateProductId, deleteProductId } from "../controllers/productsControllers";

const productRouter = Router();

productRouter.get('/', getAllProducts);
productRouter.post('/', postNewProduct);
productRouter.get('/:id', getProductsId);
productRouter.patch('/:id', updateProductId);
productRouter.delete('/:id', deleteProductId);


export { productRouter };