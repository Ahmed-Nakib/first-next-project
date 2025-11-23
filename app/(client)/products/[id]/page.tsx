// app/product/[id]/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const params = useParams();
  const id = params.id;
  const [product, setProduct] = useState<any>(null);

  useEffect(()=> {
    if(!id) return;
    (async()=>{
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();
      if (data.success) setProduct(data.product);
    })();
  },[id]);

  if(!product) return <p className="mt-10 text-center">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <img src={product.image} className="w-full h-72 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-sm text-gray-600">{product.subtitle}</p>
      <p className="mt-3 font-semibold">{product.price} TK</p>
      <p className="mt-4">{product.details}</p>
    </div>
  );
}
