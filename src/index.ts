import express from "express";
import { connectMongodb } from "./config/connectMongodb";
import { categoryRouter } from './router/categoryRouter'
import { productRouter } from "./router/productsRouter";

process.loadEnvFile();

const PORT = process.env.PORT || 1905;

const app = express();
app.use(express.json());

app.use('/api/category', categoryRouter);
app.use('/api/category/products', productRouter);

app.listen(PORT, () => {
    console.log(`Servidor en escucha en el puerto http://localhost:${PORT} ✅`);
    connectMongodb;
});