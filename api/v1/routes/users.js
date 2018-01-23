"use strict";

const router = require("express").Router();
const controller = require("./../controllers/users");


    
router.route("/login")
    .post(controller.login);
    
router.route("/logout")

module.exports = router; 