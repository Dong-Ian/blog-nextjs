import Divider from "@/components/atoms/Divider";
import MainPageCategory from "@/features/Category/components/MainPageCategory";
import getCategoryList from "@/features/Category/services/getCategoryList.service";
import PinnedPostList from "@/features/PostList/components/PinnedPostList";
import RecentPostList from "@/features/PostList/components/RecentPostList";

export default async function Home() {
  const categoryList = await getCategoryList();
  return (
    <div>
      <div className="flex justify-center">
        <div className="hidden lg:fixed lg:left-0 lg:top-40 lg:block">
          {/* <AccountComponent /> */}
        </div>

        <div className="flex w-full max-w-[760px] flex-col gap-6 px-4">
          <PinnedPostList page={1} size={5} />
          <Divider width={100} />
          <RecentPostList page={1} size={5} />
        </div>
      </div>
      <div className="hidden lg:fixed lg:right-0 lg:top-40 lg:block">
        <MainPageCategory categoryList={categoryList} />
      </div>
    </div>
  );
}
