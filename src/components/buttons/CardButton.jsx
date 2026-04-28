import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { use } from "react";
import { FaCartPlus } from "react-icons/fa";
import Swal from "sweetalert2";

const CardButton = ({ product }) => {

  const session = useSession();
  const isLoggedIn = session?.status === 'authenticated';
  const router = useRouter();
  const path = usePathname();

  const add2Cart = () => {
    if (isLoggedIn) {
      Swal.fire({
        icon: 'success',
        title: 'Added to Cart',
        text: `${product.title} has been added to your cart!`,
      });
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
