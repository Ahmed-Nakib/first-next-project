"use client";

import { Button } from "@/components/ui/button";
import { addToCart } from "@/features/cart/cartSlice";
import Image from "next/image";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

interface ProductType {
    id: number | string;
    title: string;
    price: number;
    image: string;
}

const latestProduct: ProductType[] = [
  { id: 1, title: "Title-1", price: 2000, image: "/t-shirt.png" },
  { id: 2, title: "Title-2", price: 2300, image: "/t-shirt.png" },
  { id: 3, title: "Title-3", price: 1000, image: "/t-shirt.png" },
  { id: 4, title: "Title-4", price: 3000, image: "/t-shirt.png" },
  { id: 5, title: "Title-5", price: 1600, image: "/t-shirt.png" },
];

function LatestProduct() {
  const dispatch = useDispatch();

  const handleAdd = (product: any) => {
    dispatch(addToCart(product));
    toast.success("Added to cart!");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {latestProduct.map((i) => (
        <div className="bg-black/50 p-4 sm:p-6 lg:p-8" key={i.id}>
          <div className="relative w-full h-64">
            <Image src={i.image} alt={i.title} fill className="object-contain" />
          </div>

          <div>
            <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
              {i.title}
            </p>
            <p className="text-xl font-bold text-white sm:text-2xl">
              ${i.price}
            </p>
          </div>

          <div className="grid gap-y-2.5 mt-2.5">
            <Button onClick={() => handleAdd(i)}>Add Cart</Button>
            <Button>Buy Now</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LatestProduct;
