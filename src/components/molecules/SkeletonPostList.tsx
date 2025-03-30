import Skeleton from "../atoms/Skeleton";

const SkeketonPostList = () => {
  return (
    <div className="ml-6 mt-10 flex w-full max-w-[800px] flex-col gap-2">
      <Skeleton width="100px" height="16px" rounded="rounded-lg" />
      <Skeleton
        width="290px"
        height="22px"
        rounded="rounded-lg"
        className="mb-5"
      />
      <Skeleton width="100%" height="15px" rounded="rounded-lg" />
      <Skeleton width="100%" height="15px" rounded="rounded-lg" />
      <Skeleton width="100%" height="15px" rounded="rounded-lg" />
      <Skeleton width="100%" height="15px" rounded="rounded-lg" />

      <Skeleton
        width="200px"
        height="12px"
        rounded="rounded-lg"
        className="mt-3"
      />
    </div>
  );
};

export default SkeketonPostList;
