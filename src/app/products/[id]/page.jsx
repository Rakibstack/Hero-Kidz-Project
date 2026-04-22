
import ProductDetails from "@/components/cards/ProductDetails";
import products from "../../data/toys.json";
import { notFound } from "next/navigation";
import { getSingleProduct } from "@/actions/server/product";

const ProductPage = async ({ params }) => {
  
  const { id } = await params;

  // find product
  const product = await getSingleProduct(id);

  if (!product) {
    return notFound();
  }

  return <ProductDetails product={product} />;
};

export default ProductPage;