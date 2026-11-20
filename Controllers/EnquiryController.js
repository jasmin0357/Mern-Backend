const Enquiry = require("../Models/EnquiryModel");

const createEnquiry = async (req, res) => {
  try {
    const userId = req.headers["x-user-id"] || req.body.userId || null;

    const newEnquiry = await Enquiry.create({
      ...req.body,
      userId,
    });

    res.status(201).json({
      message: "Enquiry submitted successfully",
      enquiry: newEnquiry,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to submit enquiry",
      error: error.message,
    });
  }
};

module.exports = { createEnquiry };