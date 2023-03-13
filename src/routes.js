"use strict";

const express = require("express");
const router = express.Router();


const ProductController = require("./controllers/ProductController");

router.get("/products", ProductController.get);
router.post("/products", ProductController.post);

module.exports = router;