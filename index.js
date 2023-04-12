import express from "express";
import path from "path";

const __dirname = path.resolve();

// create express app
const app = express();

// set views engine
app.set("view engine", "ejs");

//set views directory
app.set("views", "views");

app.use(express.static(path.join(__dirname,
    "public")));

app.get("/", (req, res) => {
    res.send("Hello world!")
});

//create server and listenning
app.listen(8082, () => {
    console.log("Server is listenning at port 8082!")
})