/* eslint-disable @typescript-eslint/no-explicit-any */
// app/products/page.tsx
"use client";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(()=> {
    (async()=>{
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data.products || []);
    })();
  },[]);

  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-4">
      <h1 className="text-2xl font-bold">Products</h1>
      {products.map(p => (
        <div key={p._id} className="border p-4 flex gap-4">
          <img src={p.image} className="w-28 h-28 object-cover" />
          <div>
            <h2 className="font-bold">{p.title}</h2>
            <p className="text-sm">{p.subtitle}</p>
            <p className="mt-2 font-semibold">{p.price} TK</p>
          </div>
        </div>
      ))}
    </div>
  );
}
