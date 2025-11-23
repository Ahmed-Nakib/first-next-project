/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/products/[id]/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Product from "@/models/Product";
import cloudinary from "@/lib/cloudinary";

const ADMIN_TOKEN = process.env.ADMIN_TOKEN;
function checkAdmin(req: Request) {
  const token = req.headers.get("x-admin-token") || "";
  return ADMIN_TOKEN && token === ADMIN_TOKEN;
}

export async function GET(req: Request, { params }: { params: { id: string }}) {
  try {
    await connectDB();
    const product = await Product.findById(params.id);
    if (!product) return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });
    return NextResponse.json({ success: true, product });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string }}) {
  try {
    if (!checkAdmin(req)) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    await connectDB();

    // Support both formData (with image) and json (without image)
    const contentType = req.headers.get("content-type") || "";
    let updateData: any = {};

    if (contentType.includes("form-data") || contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      const file = form.get("image") as File | null;
      updateData.title = String(form.get("title") || "");
      updateData.subtitle = String(form.get("subtitle") || "");
      updateData.price = Number(form.get("price") || 0);
      updateData.details = String(form.get("details") || "");

      if (file) {
        const buffer = Buffer.from(await file.arrayBuffer());
        const uploadRes: any = await new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream({ folder: "products" }, (err, result) => {
            if (err) reject(err);
            else resolve(result);
          }).end(buffer);
        });
        updateData.image = uploadRes.secure_url;
        updateData.cloudinary_public_id = uploadRes.public_id;
      }
    } else {
      const body = await req.json();
      updateData = body;
    }

    const updated = await Product.findByIdAndUpdate(params.id, updateData, { new: true });
    if (!updated) return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });

    return NextResponse.json({ success: true, product: updated });
  } catch (err: any) {
    console.error("PUT /api/products/[id] error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string }}) {
  try {
    if (!checkAdmin(req)) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    await connectDB();

    const product = await Product.findById(params.id);
    if (!product) return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });

    if (product.cloudinary_public_id) {
      await cloudinary.uploader.destroy(product.cloudinary_public_id);
    }
    await Product.findByIdAndDelete(params.id);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("DELETE /api/products/[id] error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
