import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import bodyParser from "body-parser"
import route from "./routes/userRoutes.js";

const app = express();

// middlewares
app.use(bodyParser.json())
dotenv.config()

const PORT = process.env.PORT || 3000;

const mongoURL = process.env.MONGO_URL

mongoose.connect(mongoURL)
.then((res) => console.log(`MongoDB conected at ${res.connection.host}`))
.catch((error) => console.error(error))

app.use("/api/user", route);

app.listen(PORT, () => {
    console.log(`Running at port ${PORT}`);
})