import React from "react";

import products from "../../app/data/toys.json";

const Products = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-10">Our Products</h2>
      {products.map((product) => (
        <div key={product.title} className="border p-4 mb-4">
          <h3 className="text-2xl font-bold">{product.title}</h3>
        </div>
      ))}

    </div>
  );
};

export default Products;
