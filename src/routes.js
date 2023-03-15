"use strict";

const express = require("express");
const router = express.Router();

const ProductController = require("./controllers/ProductController");


router.get("/products", ProductController.get);
router.get("/products/:id", ProductController.findById);
router.post("/products", ProductController.post);
router.put("/products/:id", ProductController.findByIdAndUpdate);
router.delete("/products/:id", ProductController.destroy);

module.exports = router;