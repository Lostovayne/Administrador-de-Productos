import colors from "colors";
import express from "express";
import db from "./config/db";
import router from "./router";

//? Conectar a la base de datos

async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log(colors.magenta.bold("Database connected..."));
  } catch (error) {
    console.log(colors.red.bold(error));
    console.log(colors.red("Database not connected..."));
  }
}

connectDB();
const server = express();
server.use(express.json());
server.use("/api/products", router);

export default server;
