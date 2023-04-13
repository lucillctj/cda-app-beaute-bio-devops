import express from "express";
import bodyParser from "body-parser";
import path from "path";
import connectDB from "./config/connectDB.js";
import dotenv from "dotenv";
import homepageRouter from "./routes/homepageRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";
import productRouter from "./routes/productRoutes.js";


//configure dotenv
dotenv.config();

// connect to database
connectDB();

const __dirname = path.resolve();

// create express app
const app = express();
app.use(bodyParser.json());

// set views engine
app.set("view engine", "ejs");

//set views directory
app.set("views", "views");

app.use(express.static(path.join(__dirname,
    "public")));

//use routers
app.use(homepageRouter);
app.use(categoryRouter);
app.use(productRouter);

//create server and listenning
app.listen(8082, () => {
    console.log("Server is listenning at port 8082!")
})