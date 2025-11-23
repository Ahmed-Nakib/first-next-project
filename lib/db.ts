// lib/db.ts
import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL!;
if (!MONGODB_URL) throw new Error("Please set MONGODB_URL in .env");

export async function connectDB() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(MONGODB_URL);
  console.log("MongoDB Connected");
}


