import express from "express";
import cors from "cors";
import { connectMongodb } from "./config/connectMongodb";
import { categoryRouter } from './router/categoryRouter'
import { productRouter } from "./router/productsRouter";

process.loadEnvFile();

const PORT = process.env.PORT || 1905;
const DEV_MODE = process.env.DEV_MODE || "development"  

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/category', categoryRouter);
app.use('/api/category/products', productRouter);

app.listen(PORT, () => {
    if (DEV_MODE === "development"){
        console.log(`Servidor en escucha en el puerto http://localhost:${PORT} ✅`);
    } else if (DEV_MODE === "production") {
        console.log(`✅ Servidor en funcionamiento`)
    }
    connectMongodb();
});