import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMidleware.js";
import productRoutes from "../backend/routes/prouductRoutes.js";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/products", productRoutes);
app.use(errorHandler);
app.use(notFound);

app.listen(port, () => console.log(`server is running in port ${port}`));
