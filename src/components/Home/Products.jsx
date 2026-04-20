import React from "react";

import products from "../../app/data/toys.json";
import ProductCard from "../cards/ProductCard";

const Products = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-10">Our Products</h2>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
            <ProductCard key={product.title} product={product} />
        ))}
     </div>

    </div>
  );
};

export default Products;
