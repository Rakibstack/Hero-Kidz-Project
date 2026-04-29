import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const param = useSearchParams();

  const HandleSignIn = async () => {
    // Handle Google Sign-In logic here
    const result = await signIn("google", {
      redirect: false,
      callbackUrl: param.get("callbackUrl") || "/",
    });
    console.log(result);
    if (result.ok) {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You have been logged in successfully.",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Google Sign-In failed. Please try again.",
      });
    }
  };
  return (
    <div>
      <button
        onClick={HandleSignIn}
        className="btn btn-outline w-full mb-3 gap-2 rounded-xl"
      >
        <FaGoogle />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
