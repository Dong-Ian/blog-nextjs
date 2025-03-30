import SkeletonPostList from "@/components/molecules/SkeletonPostList";

const Loading = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="mt-[30px] flex w-full max-w-[760px] flex-col gap-6 px-4">
        <SkeletonPostList />
        <SkeletonPostList />
        <SkeletonPostList />
        <SkeletonPostList />
      </div>
    </div>
  );
};

export default Loading;
