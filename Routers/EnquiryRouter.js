const express = require("express");
const router = express.Router();
const { createEnquiry } = require("../Controllers/EnquiryController");

router.post("/", createEnquiry);

module.exports = router;