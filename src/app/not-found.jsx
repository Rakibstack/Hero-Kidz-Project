"use client";

import Link from "next/link";
import { FaHome, FaArrowLeft } from "react-icons/fa";

const Error404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      
      <div className="text-center max-w-lg">
        
        {/* Big 404 */}
        <h1 className="text-7xl font-extrabold text-primary">404</h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mt-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-3">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
          
          <Link href="/">
            <button className="btn btn-primary btn-outline flex items-center gap-2">
              <FaHome />
              Back to Home
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline flex items-center gap-2"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>

        {/* Optional Illustration */}
        <div className="mt-10 opacity-70">
          <p className="text-sm text-gray-400">
            Error Code: 404 | Page Not Found
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error404;