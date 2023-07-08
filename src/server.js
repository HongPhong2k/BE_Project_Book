import express from "express";
import configViewEngine from "./config/viewEngine";
import initApiRouter from "./route/api";
import bodyParser from "body-parser";
import cors from "./config/cors";
import connectDB from "./config/connectDB";
import cookieParser from "cookie-parser";
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());
configViewEngine(app);
cors(app);

connectDB();

initApiRouter(app);

app.listen(PORT, () => {
  console.log("run app", +PORT);
});
