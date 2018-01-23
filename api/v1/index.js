"use strict";

const router = require("express").Router();

const productsRoutes = require("./routes/products");
const userRoutes = require("./routes/users");
router.use("/products",productsRoutes);
router.use("/users",userRoutes);

module.exports = router;