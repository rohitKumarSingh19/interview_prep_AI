const mongoose = require("mongoose");
const sessionShema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    role: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    topicsToFocus: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Session", sessionShema);
