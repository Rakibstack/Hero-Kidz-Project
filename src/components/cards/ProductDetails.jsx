"use client";

import Image from "next/image";
import { FaStar, FaCartPlus } from "react-icons/fa";

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

  return (
    <div className="max-w-6xl mx-auto p-4">
    

      <div className="grid md:grid-cols-2 gap-8">

        {/*  Left: Image */}
        <div className="bg-base-100 p-4 rounded-xl shadow">
          <Image
            src={image}
            alt={title}
            width={500}
            height={400}
            className="w-full h-[350px] object-cover rounded-lg"
          />
        </div>

        {/*  Right: Info */}
        <div className="space-y-4">

          {/* Title */}
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-500">{bangla}</p>

          {/* Rating + Sold */}
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              <span>{ratings}</span>
            </div>
            <span>{sold} sold</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-primary">
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

          {/* Button */}
          <button className="btn btn-primary w-full md:w-auto flex items-center gap-2">
            <FaCartPlus />
            Add to Cart
          </button>

        </div>
      </div>

      {/*  Description */}
      <div className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">Product Description</h2>
        <p className="text-gray-600 whitespace-pre-line">
          {description}
        </p>
      </div>

      {/*  Info List */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-3">Key Features</h2>
        <ul className="list-disc pl-6 space-y-1">
          {info?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/*  Q&A */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Q & A</h2>

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
  );
};

export default ProductDetails;