import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    name: String,
    phone: String,
    address: String,
    paymentMethod: String,
    total: Number,
    products: Array
  },
  { timestamps: true }
);

export default mongoose.models.Order ||
  mongoose.model("Order", OrderSchema);
