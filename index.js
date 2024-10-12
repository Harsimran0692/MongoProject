import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import bodyParser from "body-parser"
import route from "./routes/userRoutes.js";
import swaggerUiExpress from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const app = express();

// swagger spec
const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "User API",
        version: "1.0.0",
        description: "API document for managing users"
    },
    server: [
        {
            url: "http://localhost:3001"
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ["./routes/*.js", ".controller/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

// middlewares
app.use(bodyParser.json())
app.use("/api-docs", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpec))
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