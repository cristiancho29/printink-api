"use strict";

const router = require("express").Router();
const controller = require("./../controllers/products");

router.route("/")
    .get(controller.findAllProduct)
    .post(controller.validateToken,controller.addProduct);

router.route("/:id")
    .get(controller.findById)
    .put(controller.validateToken,controller.updateProduct)
    .delete(controller.validateToken,controller.deleteProduct);

module.exports = router;