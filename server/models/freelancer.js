const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FreelancerSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  email: {
    type: String,
    required: [true, "email field is required"],
  },
  phone: {
    type: String,
    required: [true, "phone field is required"],
  },
  skillsets: {
    type: String,
  },
  hobby: {
    type: String,
  },
});

const Freelancer = mongoose.model("freelancer", FreelancerSchema);

module.exports = Freelancer;
