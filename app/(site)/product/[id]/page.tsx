
interface ProductDetailsProps {
  params: { id: string };
}

const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const { id } = params;


  return <div className="mt-24">{id} hello </div>;
};

export default ProductDetails