import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();

const db = new Sequelize(process.env.DB_DATA_URL,{
  models: [__dirname + "/../models/**/*{.ts,.js}"],
});

export default db;
