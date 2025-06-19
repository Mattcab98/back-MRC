import { connect } from "mongoose";

let URI_DB: string;

// const URI_DB = process.env.URI_DB || "";
const DEV_MODE = process.env.DEV_MODE;

if (DEV_MODE === "production") {
    URI_DB = process.env.URI_DB || ""
} else if (DEV_MODE === "development") {
    URI_DB = "mongodb://localhost:27017/project-backend-mrc"
}

const connectMongodb = async() => {
    try {
        if (!URI_DB) {
            console.log("Database URI is not defined");
            return;
        }
        if (URI_DB) {
            await connect(URI_DB);
        }

        console.log(`Base de datos MongoDB conectada con exito✅`);
    } catch (error) {
        const err = error as Error;
        console.log(`ERROR AL CONECTARSE LA BASE DE DATOS MONGODB❌`)
    };
};

export { connectMongodb };
