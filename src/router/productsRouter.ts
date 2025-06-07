import { Router } from "express";
import { getAllProducts, postNewProduct } from "../controllers/productsControllers";

const productRouter = Router();

productRouter.get('/', getAllProducts);
productRouter.post('/', postNewProduct);

export { productRouter };