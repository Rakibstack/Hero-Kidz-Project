import React from "react";

// import products from "../../app/data/toys.json";
import ProductCard from "../cards/ProductCard";
import { getProducts } from "@/actions/server/product";

const Products = async () => {

  const products =  await getProducts();

  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-10">Our Products</h2>
     <div className="grid  md:grid-cols-3 gap-5">
        {products.map((product) => (
            <ProductCard key={product._id} product={product} />
        ))}
     </div>

    </div>
  );
};

export default Products;
