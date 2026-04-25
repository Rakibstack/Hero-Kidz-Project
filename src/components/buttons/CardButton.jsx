import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaCartPlus } from "react-icons/fa";

const CardButton = ({ product }) => {
  const isLoggedIn = false;
  const router = useRouter();
  const path = usePathname();

  const add2Cart = () => {
    if (isLoggedIn) {
      alert(`Added ${product.title} to cart!❤️👌`);
    } else {
      router.push(`/login?callbackUrl=${path}`);
    }
  };

  return (
    <div className="">
      <button
        onClick={add2Cart}
        className="btn btn-primary flex-1 flex items-center justify-center gap-2"
      >
        <FaCartPlus />
        Add to Cart
      </button>
    </div>
  );
};

export default CardButton;
