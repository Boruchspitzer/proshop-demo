import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.staus(404);
      throw new Error("Resource not found!");
    }
  })
);

export default router;
