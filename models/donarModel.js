import mongoose from "mongoose";
import validator from "validator";

let donarModel = new mongoose.Schema(
  {
    country: {
      type: String,
      required: [true, "Please provide the country"],
      minlength: 3,
      maxlength: 20,
    },
    group: {
      type: String,
      required: [true, "Please provide the group"]
    },
    state: {
      type: String,
      required: [true, "Please provide the state"],
      minlength: 3,
      maxlength: 20,
    },
    city: {
      type: String,
      required: [true, "Please provide the city"],
      minlength: 3,
      maxlength: 20,
    },
    name: {
      type: String,
      required: [true, "Please provide the name"],
      minlength: 3,
      maxlength: 20,
    },
    number: {
      type: String,
      required: [true, "Please provide the number"],
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email",
      },
      unique: true,
    },
    date: {
      type: Date,
      required: [true, "Please provide the date"],
    },
    isVerified:{
        type:Boolean,
        enum:[true,false],
        default:false
    }
  },
  { timestamps: true }
);

export default mongoose.model("donarModel", donarModel);
