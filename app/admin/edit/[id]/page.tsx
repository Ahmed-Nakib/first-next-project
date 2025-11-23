/* eslint-disable @typescript-eslint/no-explicit-any */
// app/admin/edit/[id]/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditProductPage() {
  const params = useParams();
  const id = params.id;
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const getToken = () => localStorage.getItem("admin_token") || "";

  useEffect(() => {
    if (!id) return;
    (async () => {
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();
      if (data.success) setProduct(data.product);
      else alert(data.error);
    })();
  }, [id]);

  if (!product) return <p className="mt-10 text-center">Loading...</p>;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    // If image included, send formData; else send json
    const fileInput = e.target.image;
    let res;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const form = new FormData(e.target);
      res = await fetch(`/api/products/${id}`, { method: "PUT", body: form, headers: { "x-admin-token": getToken() } });
    } else {
      const body = {
        title: e.target.title.value,
        subtitle: e.target.subtitle.value,
        price: Number(e.target.price.value),
        details: e.target.details.value,
      };
      res = await fetch(`/api/products/${id}`, { method: "PUT", headers: { "content-type": "application/json", "x-admin-token": getToken() }, body: JSON.stringify(body) });
    }
    const data = await res.json();
    setLoading(false);
    if (data.success) {
      alert("Updated");
      router.push("/admin/dashboard");
    } else alert(data.error || "Update failed");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10 space-y-4">
      <img src={product.image} className="w-40 h-40 object-cover rounded" />
      <input name="image" type="file" accept="image/*" className="border p-2 w-full"/>
      <input name="title" defaultValue={product.title} placeholder="Title" required className="border p-2 w-full"/>
      <input name="subtitle" defaultValue={product.subtitle} placeholder="Subtitle" className="border p-2 w-full"/>
      <input name="price" defaultValue={product.price} type="number" placeholder="Price" required className="border p-2 w-full"/>
      <textarea name="details" defaultValue={product.details} placeholder="Details" className="border p-2 w-full"/>
      <button disabled={loading} className="bg-blue-600 text-white w-full p-2">{loading ? "Updating..." : "Update Product"}</button>
    </form>
  );
}
