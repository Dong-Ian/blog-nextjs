import Skeleton from "../atoms/Skeleton";

const SkeletonPost = () => {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton width={100} height={23} rounded="rounded-xl" />
      <Skeleton width="75%" height={35} rounded="rounded-xl" />
      <div className="mt-4 flex gap-2">
        <Skeleton width={75} height={20} rounded="rounded-lg" />
        <Skeleton width={75} height={20} rounded="rounded-lg" />
        <Skeleton width={75} height={20} rounded="rounded-lg" />
        <Skeleton width={75} height={20} rounded="rounded-lg" />
        <Skeleton width={75} height={20} rounded="rounded-lg" />
      </div>
      <Skeleton width={200} height={16} rounded="rounded-lg" className="mt-3" />
      <Skeleton
        width="100%"
        height={400}
        rounded="rounded-lg"
        className="mt-[80px]"
      />
    </div>
  );
};
export default SkeletonPost;
