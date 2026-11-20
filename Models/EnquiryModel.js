const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    ageGroup: { type: String, required: true },
    danceStyle: { type: String, required: true },
    preferredBatch: { type: String, required: true },
    notes: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enquiry", enquirySchema);