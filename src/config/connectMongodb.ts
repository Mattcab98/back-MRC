import { connect } from "mongoose";

process.loadEnvFile();

const URI_DB = process.env.URI_DB || "";

const connectMongodb = async() => {
    try {
        await connect(URI_DB);
        console.log(`Base de datos MongoDB conectada con exito✅`);
    } catch (error) {
        const err = error as Error;
        console.log(`ERROR AL CONECTARSE LA BASE DE DATOS MONGODB❌`)
    };
};

export { connectMongodb };