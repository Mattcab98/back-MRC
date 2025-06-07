import { Router } from "express";
import { getAllProducts } from "../controllers/productsControllers";

const productRouter = Router();

productRouter.get('/', getAllProducts)

export { productRouter };