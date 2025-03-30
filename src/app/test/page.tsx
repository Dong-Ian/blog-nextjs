import SkeletonPost from "@/components/molecules/SkeletonPost";

const Test = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="mt-[160px] flex w-full max-w-[730px] flex-col  px-4">
        <SkeletonPost />
      </div>
    </div>
  );
};

export default Test;
