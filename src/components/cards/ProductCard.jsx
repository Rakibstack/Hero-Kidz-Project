import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const {
    title,
    image,
    price,
    discount,
    ratings,
    sold,
    _id
  } = product;

  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300">
      
      {/* Image */}
      <figure className="relative">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="w-full h-52 object-cover"
        />

        {/* Discount Badge */}
        {discount > 0 && (
          <span className="badge badge-error absolute top-2 left-2">
            -{discount}%
          </span>
        )}
      </figure>

      {/* Content */}
      <div className="card-body p-4">
        
        Title
        <h2 className="card-title text-sm line-clamp-2">
          {title}
        </h2>

        {/* Rating + Sold */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span>{ratings}</span>
          </div>
          <span>{sold} sold</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            ৳{discountedPrice}
          </span>

          {discount > 0 && (
            <span className="text-sm line-through text-gray-400">
              ৳{price}
            </span>
          )}
        </div>

        {/* Button */}
        <button className="btn btn-primary btn-sm mt-2 flex items-center gap-2">
          <FaCartPlus />
          Add to Cart
        </button>
        <Link href={`/products/${_id}`} className="btn btn-primary btn-outline btn-sm mt-2 flex items-center gap-2">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;