/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";

export default function OrderDetails({ params }: any) {
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/order/${params.id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data.order));
  }, []);

  if (!order) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>

      <p><b>Name:</b> {order.name}</p>
      <p><b>Phone:</b> {order.phone}</p>
      <p><b>Address:</b> {order.address}</p>
      <p><b>Payment:</b> {order.paymentMethod}</p>
      <p><b>Total:</b> ${order.total}</p>

      <h2 className="text-xl font-bold mt-4">Products</h2>
      <ul className="list-disc ml-6">
        {order.products?.map((p: any, i: number) => (
          <li key={i}>
            {p.title} — ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
