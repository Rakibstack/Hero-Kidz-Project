const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 animate-pulse">

      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* Product Image Skeleton */}
        <div className="bg-base-100 rounded-2xl shadow p-5">
          <div className="skeleton w-full h-[420px] rounded-xl"></div>

          <div className="flex gap-3 mt-4">
            <div className="skeleton h-20 w-20 rounded-lg"></div>
            <div className="skeleton h-20 w-20 rounded-lg"></div>
            <div className="skeleton h-20 w-20 rounded-lg"></div>
          </div>
        </div>


        {/* Product Info Skeleton */}
        <div className="space-y-5">

          <div className="skeleton h-10 w-4/5"></div>

          <div className="skeleton h-6 w-2/3"></div>

          <div className="flex gap-4">
            <div className="skeleton h-5 w-24"></div>
            <div className="skeleton h-5 w-24"></div>
          </div>

          <div className="flex items-center gap-4">
            <div className="skeleton h-10 w-36"></div>
            <div className="skeleton h-7 w-20"></div>
          </div>

          <div className="space-y-3 pt-4">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-5/6"></div>
          </div>

          <div className="pt-4">
            <div className="skeleton h-12 w-52 rounded-xl"></div>
          </div>
        </div>
      </div>


      {/* Features */}
      <div className="mt-14 space-y-5">
        <div className="skeleton h-8 w-56"></div>

        <div className="space-y-3">
          <div className="skeleton h-5 w-full"></div>
          <div className="skeleton h-5 w-5/6"></div>
          <div className="skeleton h-5 w-4/6"></div>
        </div>
      </div>


      {/* Q&A Skeleton */}
      <div className="mt-14 space-y-4">
        <div className="skeleton h-8 w-40"></div>

        <div className="skeleton h-16 w-full rounded-xl"></div>
        <div className="skeleton h-16 w-full rounded-xl"></div>
        <div className="skeleton h-16 w-full rounded-xl"></div>
      </div>

    </div>
  );
};

export default ProductDetailsSkeleton;