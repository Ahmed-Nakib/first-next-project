"use client";

import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeItem, CartItem as CartItemType } from "@/features/cart/cartSlice"; // Assuming the path
import { Minus, Plus, Trash2 } from "lucide-react"; // Assuming you have lucide-react or similar icons

interface CartItemProps {
  item: CartItemType; // Using the exported type from the slice
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  // Using item.qty instead of item.quantity
  const itemTotal = item.price * item.qty; 

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-4 md:gap-6 py-4 border-b border-gray-200 items-center">

      {/* Product Image + Info */}
      <div className="flex items-start space-x-4 col-span-full md:col-auto">
        <div className="h-16 w-16 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
          <Image 
            src={item.image} 
            alt={item.title} 
            width={64} 
            height={64} 
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-2">
            {item.title}
          </h3>
          <p className="text-sm text-gray-500">
            ${item.price} per unit
          </p>
        </div>
      </div>

      {/* Quantity Controls - NOW FUNCTIONAL */}
      <div className="flex justify-start md:justify-center order-3 md:order-2">
        <div className="flex items-center border rounded-lg overflow-hidden">
          <button 
            onClick={() => dispatch(decreaseQuantity(item.id))}
            className="p-2 hover:bg-gray-100 transition duration-150 disabled:opacity-50"
            disabled={item.qty <= 1} // Optionally disable if qty is 1, relying on removeItem
          >
            <Minus className="h-4 w-4 text-gray-600" />
          </button>
          <span className="px-3 py-1 text-sm font-medium border-l border-r w-8 text-center">
            {item.qty} {/* Changed from item.quantity to item.qty */}
          </span>
          <button 
            onClick={() => dispatch(increaseQuantity(item.id))}
            className="p-2 hover:bg-gray-100 transition duration-150"
          >
            <Plus className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Total + Remove - NOW FUNCTIONAL */}
      <div className="flex justify-between md:justify-end items-center space-x-4 order-2 md:order-3">
        <p className="text-base sm:text-lg font-bold text-gray-900 w-20 text-right">
          ${itemTotal.toFixed(2)}
        </p>
        <button
          onClick={() => dispatch(removeItem(item.id))}
          className="text-red-500 hover:text-red-700 transition duration-150"
          title="Remove Item"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;