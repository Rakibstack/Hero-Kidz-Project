
import ProductDetails from "@/components/cards/ProductDetails";
import products from "../../data/toys.json";
import { notFound } from "next/navigation";

const ProductPage = async ({ params }) => {
  
  const { id } = await params;

  // find product
  const product = products.find((p) => p.id === id);

  if (!product) {
    return notFound();
  }

  return <ProductDetails product={product} />;
};

export default ProductPage;