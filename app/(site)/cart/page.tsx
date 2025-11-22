"use client";

import { useSelector } from "react-redux";
import CartItem from "@/components/CartItem";
import { CartItem as CartItemType } from "@/features/cart/cartSlice"; // Import CartItem type

const CartPage = () => {
  const { items } = useSelector(
    // Ensure state type matches your Redux store structure
    (state: any) => state.cart 
  );

  // --- Calculate Totals ---
  const subtotal = items.reduce(
    (acc: number, item: CartItemType) => acc + item.price * item.qty, // Use item.qty
    0
  );
  
  const shipping = subtotal > 0 ? 5.00 : 0; // Example shipping cost
  const taxRate = 0.08; // Example 8% tax
  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax;
  // -------------------------

  return (
    <div className="container mx-auto px-4 py-16 mt-16 md:mt-20">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 border-b pb-4">
        🛒 Your Shopping Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Cart Items */}
        <div className="w-full lg:w-3/4 bg-white p-6 rounded-xl shadow-lg order-2 lg:order-1">
          {items.length > 0 ? (
            items.map((item : any , index : any) => <CartItem key={index} item={item} />) 
          ) : (
            <p className="text-gray-500 text-center py-10">
              Your cart is empty.
            </p>
          )}
        </div>

        {/* Summary - NOW FUNCTIONAL */}
        <div className="w-full lg:w-1/4 order-1 lg:order-2">
          <div className="bg-indigo-50 p-6 rounded-xl shadow-lg border border-indigo-200 sticky top-24">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b pb-3">
              Order Summary
            </h2>

            <div className="space-y-3 text-lg">
                <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                    <span className="text-gray-600">Tax ({taxRate * 100}%):</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-3 text-xl font-bold text-indigo-800">
                    <span>Order Total:</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>

            <button 
                className="w-full mt-8 bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md disabled:bg-gray-400"
                disabled={items.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;