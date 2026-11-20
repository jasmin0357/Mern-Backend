const express = require("express");
const router = express.Router();
const { Signup } = require("../Controllers/UserControllers");

router.post("/signup", Signup);

module.exports = router;