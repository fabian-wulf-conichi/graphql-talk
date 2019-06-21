import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  status: {
    type: String,
    required: true
  },
  clientName: {
    type: String,
    required: true
  }
});
const Model = mongoose.model("booking", BookingSchema);

export default Model;
