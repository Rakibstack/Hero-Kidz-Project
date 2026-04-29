"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash,  } from "react-icons/fa";
import Link from "next/link";
import { signIn } from "next-auth/react"
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import SocialLogin from "../buttons/SocialLogin";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const route = useRouter();

  const HandleLogIn = async (e) => {
    e.preventDefault();

    // Handle form submission logic here
   const user = {
    email: e.target.email.value,
    password: e.target.password.value
   }
    const result = await signIn("credentials",{ ...user, redirect:false });
    
    if(!result.ok){
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password. Please try again.",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You have been logged in successfully.",
      });
      route.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-4 px-4">
      <div className="card bg-base-100  w-full max-w-md shadow-2xl border border-base-300">
        <form onSubmit={HandleLogIn} className="card-body p-8">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-sm text-gray-500 mt-2">
              Login to continue shopping
            </p>
          </div>

          {/* Email */}
          <div className="form-control mb-4">
            <label className="label font-medium">Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password */}
          <div className="form-control mb-2">
            <label className="label font-medium">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                className="input input-bordered w-full pr-12"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="text-right mb-5">
            <a className="link link-hover text-primary text-sm">
              Forgot password?
            </a>
          </div>

          <button className="btn btn-primary w-full rounded-xl">Login</button>

          <div className="divider my-6">OR</div>

         <SocialLogin></SocialLogin>

          <p className="text-center mt-6 text-sm">
            Don’t have an account?{" "}
            <Link href="/register" className="font-semibold text-primary">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
