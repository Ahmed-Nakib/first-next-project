"use client"; 
import { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  _id: string;
  title: string;
  subtitle: string;
  price: number;
  description: string;
  image: string;
}
 function TopProduct() {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        if (Array.isArray(data)) {
          setProducts(data);
        } else if (data.products && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          setProducts([]);
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading products...</p>;
  if (products.length === 0) return <p className="text-center mt-10">No products found.</p>;


  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Grid optimized for all screen sizes: 1 column -> 2 columns -> 3 columns -> 4 columns */}
      <div className="grid gap-6 
                      grid-cols-1                
                      sm:grid-cols-2             
                      md:grid-cols-3             
                      lg:grid-cols-4             
                      bg-white">
        {products.map((product: Product) => ( 
          
          <div
            key={product._id}
            className="bg-[#F5F5F5] p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-square h-auto max-h-64 mb-4"> 
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-contain rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-1 mb-4">
              <p className="text-base font-semibold text-[#111111] line-clamp-2 min-h-[2.5rem]">
                {product.title}
              </p>
              <p className="text-base font-semibold text-[#111111] line-clamp-2 min-h-[2.5rem]">
                {product.subtitle}
              </p>
              <p className="text-xl font-bold text-[#CC071E]">
                ${product.price.toFixed(2)} {/* Ensure price is displayed as currency */}
              </p>
              <p className="text-sm text-[#666666] line-clamp-3 min-h-[3.75rem]">
                {product.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="grid gap-2 mt-auto">
              <button 
                className="w-full bg-[#CC071E] text-white px-4 py-2 rounded-md hover:bg-[#990514] transition"
              >
                Add Cart
              </button>

              <button 
                className="w-full border border-[#CC071E] text-[#CC071E] px-4 py-2 rounded-md hover:bg-[#CC071E] hover:text-white transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopProduct;