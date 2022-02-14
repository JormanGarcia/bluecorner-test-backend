import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import DatabaseConnection from "./database.init";

import ProductRoutes from "./routes/products.route";
import TagsRoutes from "./routes/tags.route";

// Config
const app = express();
dotenv.config();
DatabaseConnection();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/products", ProductRoutes);
app.use("/tags", TagsRoutes);

app.listen(process.env.PORT, () =>
  console.log("Listening on port:", process.env.PORT)
);
