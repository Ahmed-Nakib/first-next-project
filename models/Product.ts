import mongoose, { Schema, Document, models } from "mongoose";

export interface IProduct extends Document {
  title: string;
  subtitle: string;
  price: number;
  description: string;
  image: string;
}

const ProductSchema = new Schema<IProduct>(
  {
    title: String,
    subtitle: String,
    price: Number,
    description: String,
    image: String,
  },
  { timestamps: true }
);

export default models.Product ||
  mongoose.model<IProduct>("Product", ProductSchema);
