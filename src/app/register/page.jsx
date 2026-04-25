

"use client";

import { useState } from "react";
import Link from "next/link";
import {
 FaEye,
 FaEyeSlash,
 FaGoogle,
 FaFacebook
} from "react-icons/fa";

const Register = () => {

 const [showPassword,setShowPassword] = useState(false);

 return (
  <div className="min-h-screen flex items-center justify-center bg-base-200 py-4 px-4">

   <div className="card bg-base-100 w-full max-w-md shadow-2xl border border-base-300">
    <div className="card-body p-8">

     {/* Heading */}
     <div className="text-center mb-6">
      <h1 className="text-3xl font-bold">
       Create Account
      </h1>

      <p className="text-sm text-gray-500 mt-2">
       Join and start shopping Hero Kidz products!
      </p>
     </div>


     {/* Name */}
     <div className="form-control mb-4">
      <label className="label font-medium">
       Full Name
      </label>

      <input
       type="text"
       placeholder="Enter your name"
       className="input input-bordered w-full"
      />
     </div>


     {/* Email */}
     <div className="form-control mb-4">
      <label className="label font-medium">
       Email
      </label>

      <input
       type="email"
       placeholder="Enter your email"
       className="input input-bordered w-full"
      />
     </div>


     {/* Password */}
     <div className="form-control mb-4">
      <label className="label font-medium">
       Password
      </label>

      <div className="relative">
       <input
        type={showPassword ? "text":"password"}
        placeholder="Create password"
        className="input input-bordered w-full pr-12"
       />

       <button
        type="button"
        onClick={()=>setShowPassword(!showPassword)}
        className="absolute right-4 top-4"
       >
        {
         showPassword
          ? <FaEyeSlash/>
          : <FaEye/>
        }
       </button>
      </div>
     </div>


     {/* Confirm Password */}
     <div className="form-control mb-4">
      <label className="label font-medium">
       Confirm Password
      </label>

      <input
       type="password"
       placeholder="Confirm password"
       className="input input-bordered w-full"
      />
     </div>


     {/* Terms */}
     <label className="label cursor-pointer justify-start gap-3 mb-5">
      <input
       type="checkbox"
       className="checkbox checkbox-primary checkbox-sm"
      />

      <span className="text-sm">
       I agree to Terms & Conditions
      </span>
     </label>


     {/* Register Button */}
     <button className="btn btn-primary rounded-xl w-full">
      Create Account
     </button>


     <div className="divider my-4">
      OR
     </div>


     {/* Social Signup */}
     <button className="btn btn-outline rounded-xl gap-2 w-full mb-3">
      <FaGoogle/>
      Continue with Google
     </button>


     {/* Login Link */}
     <p className="text-center mt-6 text-sm">
      Already have an account?{" "}
      <Link
       href="/login"
       className="text-primary font-semibold"
      >
       Login
      </Link>
     </p>

    </div>
   </div>

  </div>
 );
};

export default Register;