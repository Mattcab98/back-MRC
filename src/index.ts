import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectMongodb } from "./config/connectMongodb";
import { categoryRouter } from './router/categoryRouter';
import { productRouter } from "./router/productsRouter";

// process.loadEnvFile();
dotenv.config()

process.env.DEV_MODE === "production" ? dotenv.config() : process.loadEnvFile();

const PORT = process.env.PORT || 1905;
const DEV_MODE = process.env.DEV_MODE;

const app = express();

//Middlewares 
app.use(express.json());
app.use(cors());

//Rout
app.use('/api/category', categoryRouter);
app.use('/api/category/products', productRouter);

app.listen(PORT, () => {
    if (DEV_MODE === "development"){
        console.log(`Servidor en escucha en el puerto http://localhost:${PORT} ✅`);
    } else if (DEV_MODE === "production") {
        console.log(`✅ Servidor en funcionamiento`)
    }

    try {
        connectMongodb();
        console.log("Conexion a MongoDB establecida ✅")
    } catch (error) {
        console.log("Error al conectar con MongoDB ❌", error)
    }
});