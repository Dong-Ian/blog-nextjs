"use client";
import SkeketonPostList from "@/components/molecules/SkeletonPostList";

const Loading = () => {
  return (
    <div className="flex w-full justify-center">
      {/* <div className="hidden lg:fixed lg:left-0 lg:top-40 lg:block">
        <SkeketonAccount />
      </div> */}
      <div className="flex w-full max-w-[760px] flex-col gap-6 px-4">
        <SkeketonPostList />
        <SkeketonPostList />
        <SkeketonPostList />
        <SkeketonPostList />
      </div>
    </div>
  );
};

export default Loading;
