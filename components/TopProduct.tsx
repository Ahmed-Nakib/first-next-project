import Image from "next/image";

function TopProduct() {
  return (
    <div>
      <a href="#" className="block">
        <Image
          alt="Top Product"
          src="/t-shirt.png"
          width={500} // You need width & height OR use "fill"
          height={288} 
          className="rounded-tr-3xl rounded-bl-3xl object-cover sm:h-64 lg:h-72 w-full"
        />

        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong className="font-medium">Company Name</strong>

          <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

          <p className="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p>
        </div>
      </a>
    </div>
  );
}

export default TopProduct;
