/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectDB } from "@/lib/db";
import Order from "@/models/orderModel";

export async function GET(req: Request, { params }: any) {
  await connectDB();

  const order = await Order.findById(params.id);

  if (!order) {
    return new Response(JSON.stringify({ success: false, msg: "Order not found" }), { status: 404 });
  }

  return new Response(JSON.stringify({ success: true, order }), { status: 200 });
}

export async function PUT(req: Request, { params }: any) {
  await connectDB();
  const body = await req.json();

  const updated = await Order.findByIdAndUpdate(params.id, body, { new: true });

  return new Response(JSON.stringify({ success: true, updated }), { status: 200 });
}

export async function DELETE(req: Request, { params }: any) {
  await connectDB();

  await Order.findByIdAndDelete(params.id);

  return new Response(JSON.stringify({ success: true, msg: "Deleted" }), { status: 200 });
}
