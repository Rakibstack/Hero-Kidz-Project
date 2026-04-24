
import ProductDetails from "@/components/cards/ProductDetails";
import { notFound } from "next/navigation";
import { getSingleProduct } from "@/actions/server/product";

export async function generateMetadata({ params }) {

    const { id } = await params;


 const product = await getSingleProduct(id);

 if (!product) {
   return {
     title: "Product Not Found"
   };
 }

 return {
   title: product.title,

   description: product.description.slice(0,160),

   openGraph: {
     title: product.title,
     description: product.description.slice(0,160),

     images: [
       {
         url: product.image,
         width: 1200,
         height: 630,
       }
     ],
   },

   twitter: {
     card: "summary_large_image",
     images: [product.image],
   },
 };
}

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