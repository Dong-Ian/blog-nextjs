import Skeleton from "../atoms/Skeleton";

const SkeletonPostList = () => {
  return (
    <div className="ml-6 mt-[50px] flex w-full max-w-[800px] flex-col gap-2 ">
      <Skeleton width={100} height={16} rounded="rounded-lg" />
      <Skeleton width={290} height={22} rounded="rounded-lg" className="mb-5" />
      <Skeleton width="100%" height={100} rounded="rounded-lg" />
      <Skeleton width={300} height={12} rounded="rounded-lg" className="mt-3" />
    </div>
  );
};

export default SkeletonPostList;
