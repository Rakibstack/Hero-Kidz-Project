"use client";

import Image from "next/image";
import { FaStar, FaCartPlus, FaBolt } from "react-icons/fa";

const ProductDetails = ({ product }) => {
  const {
    title,
    bangla,
    image,
    price,
    discount,
    ratings,
    sold,
    description,
    info,
    qna,
  } = product;

  const discountedPrice = price - (price * discount) / 100;
  const savedAmount = price - discountedPrice;

  return (
    <div className="max-w-7xl mx-auto p-4">

      <div className="grid md:grid-cols-2 gap-10">

        {/* 🔥 Image Section */}
        <div className="relative group">
          <div className="bg-base-100 p-4 rounded-2xl shadow-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={600}
              height={500}
              className="w-full h-[400px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {discount > 0 && (
            <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm shadow">
              -{discount}% OFF
            </span>
          )}
        </div>

        {/* 🔥 Info Section */}
        <div className="space-y-5">

          {/* Title */}
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-500">{bangla}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              <span className="font-medium">{ratings}</span>
            </div>
            <span className="text-gray-500">({sold} sold)</span>
          </div>

          {/* 🔥 Price Section */}
          <div className="bg-base-200 p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-primary">
                ৳{discountedPrice}
              </span>

              {discount > 0 && (
                <>
                  <span className="line-through text-gray-400">
                    ৳{price}
                  </span>
                  <span className="badge badge-error">
                    -{discount}%
                  </span>
                </>
              )}
            </div>

            {discount > 0 && (
              <p className="text-green-600 text-sm mt-1">
                You save ৳{savedAmount}
              </p>
            )}
          </div>

          {/* 🔥 Stock + Trust */}
          <div className="space-y-2 text-sm">
            <p className="text-green-600 font-medium">✔ In Stock</p>
            <p className="text-gray-500">🚚 Fast Delivery (2-4 days)</p>
            <p className="text-gray-500">🔁 7 Days Easy Return</p>
          </div>

          {/* 🔥 Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <button className="btn btn-primary flex-1 flex items-center justify-center gap-2">
              <FaCartPlus />
              Add to Cart
            </button>

            <button className="btn btn-secondary flex-1 flex items-center justify-center gap-2">
              <FaBolt />
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 Tabs Section */}
      <div className="mt-12">

        <div className="tabs tabs-boxed mb-6">
          <a className="tab tab-active">Description</a>
          <a className="tab">Features</a>
          <a className="tab">Q&A</a>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-600 whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* Features */}
        <div className="mb-8">
          <ul className="list-disc pl-6 space-y-2">
            {info?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Q&A */}
        <div>
          {qna?.map((item, i) => (
            <div key={i} className="collapse collapse-arrow bg-base-100 mb-2">
              <input type="checkbox" />
              <div className="collapse-title font-medium">
                {item.question}
              </div>
              <div className="collapse-content text-sm text-gray-600">
                {item.answer}
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default ProductDetails;