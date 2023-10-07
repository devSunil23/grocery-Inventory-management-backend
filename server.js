import express from "express";
import env from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectToDataBase from "./databaseConnection.js";
import router from "./routes.js";
dotenv.config();
const PORT = process.env.BACKEND_PORT;
const app = express();
/***connect to database */
connectToDataBase();
app.use(cors());
app.use(bodyParser.json());
app.use(router);
app.listen(PORT, () => {
  console.log(`the server is starting on port ${PORT}`);
});
