import express from "express";
import router from "./router";
import db from "./config/db";

//? Conectar a la base de datos

async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log("Database connected...");
  } catch (error) {
    console.log(error);
    console.log("Database not connected...");
  }
}

connectDB();
const server = express();
server.use("/api/products", router);

export default server;
