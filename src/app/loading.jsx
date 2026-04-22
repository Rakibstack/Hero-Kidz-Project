"use client";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 relative overflow-hidden">

      {/* 🔥 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 animate-pulse blur-2xl opacity-50"></div>

      <div className="relative z-10 text-center space-y-8">

        {/* 🔄 Fancy Spinner */}
        <div className="flex justify-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* ✨ Text Animation */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">
            Loading Experience
          </h2>
          <p className="text-gray-500 text-sm mt-2 animate-pulse">
            আমরা আপনার জন্য কিছু সুন্দর প্রস্তুত করছি...
          </p>
        </div>

        {/* 🧊 Skeleton Card Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-80 mx-auto mt-6">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="bg-base-200 p-4 rounded-xl shadow animate-pulse"
            >
              <div className="skeleton h-32 w-full mb-3"></div>
              <div className="skeleton h-4 w-3/4 mb-2"></div>
              <div className="skeleton h-4 w-1/2"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Loading;