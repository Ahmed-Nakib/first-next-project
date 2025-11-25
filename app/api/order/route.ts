
import { connectDB } from "@/lib/db";
import Order from "@/models/Order";

export async function POST(req: Request) {
  try {
    await connectDB();

    const data = await req.json();

    const newOrder = await Order.create(data);

    return Response.json({
      success: true,
      message: "Order saved!",
      order: newOrder
    });
  } catch (error) {
    return Response.json(
      { success: false, message: "Error saving order", error },
      { status: 500 }
    );
  }
}


export async function GET() {
  await connectDB();

  const orders = await Order.find().sort({ createdAt: -1 });

  return new Response(JSON.stringify({ success: true, orders }), { status: 200 });
}
