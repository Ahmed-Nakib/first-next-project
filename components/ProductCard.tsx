/* eslint-disable @typescript-eslint/no-explicit-any */
// components/ProductCard.tsx
"use client";

import Image from "next/image";

export default function ProductCard({ product, onEdit, onDelete }: any) {
  return (
    <div className="border rounded p-4 flex gap-4 items-start">
      <Image src={product.image} alt={product.title} className="w-28 h-28 object-cover rounded" />
      <div className="flex-1">
        <h3 className="font-bold">{product.title}</h3>
        <p className="text-sm text-gray-600">{product.subtitle}</p>
        <p className="mt-2 font-semibold">{product.price} TK</p>
      </div>
      <div className="flex flex-col gap-2">
        <button onClick={() => onEdit(product._id)} className="bg-blue-600 text-white px-3 py-1 rounded">Edit</button>
        <button onClick={() => onDelete(product._id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
      </div>
    </div>
  );
}
