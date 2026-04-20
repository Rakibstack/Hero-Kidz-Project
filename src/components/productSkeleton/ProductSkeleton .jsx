const ProductSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="skeleton h-52 w-full"></div>

      <div className="card-body p-4 space-y-3">
        <div className="skeleton h-4 w-3/4"></div>
        <div className="skeleton h-4 w-1/2"></div>

        <div className="flex justify-between">
          <div className="skeleton h-4 w-16"></div>
          <div className="skeleton h-4 w-16"></div>
        </div>

        <div className="skeleton h-6 w-24"></div>

        <div className="skeleton h-8 w-full"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
