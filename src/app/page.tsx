import Divider from "@/components/atoms/Divider";
import AccountComponent from "@/features/Account/components/AccountComponent";
import MobileAccountComponent from "@/features/Account/components/MobileAccountComponent";
import MainPageCategory from "@/features/Category/components/MainPageCategory";
import getCategoryList from "@/features/Category/services/getCategoryList.service";
import MainPagePopularPostList from "@/features/PostList/components/MainPagePopularPostList";
import PinnedPostList from "@/features/PostList/components/PinnedPostList";
import RecentPostList from "@/features/PostList/components/RecentPostList";
import { getPopularPostList } from "@/features/PostList/services/getPostList.service";
import SearchBar from "@/features/Search/components/SearchBar";
import MainPageTag from "@/features/Tag/components/MainPageTag";
import getTagList from "@/features/Tag/services/getTagList";

export default async function Home() {
  const categoryList = await getCategoryList();
  const tagList = await getTagList();
  const popularList = await getPopularPostList();

  return (
    <div>
      <div className="flex items-start justify-center">
        <div className="md:flex">
          <div className="hidden md:fixed md:left-5 md:top-[120px] md:block">
            <AccountComponent />
          </div>
          <div className="block md:hidden">
            <MobileAccountComponent />
          </div>
          <div className="hidden md:mr-[200px] md:block md:w-[300px] lg:hidden"></div>

          <div className="lg:ml-[280px] lg:flex">
            <div className="m-auto flex w-[90%] flex-col gap-6 px-4 md:m-auto md:max-w-[90%] lg:max-w-[760px]">
              <PinnedPostList page={1} size={5} />
              <Divider width={100} />
              <RecentPostList page={1} size={5} />
            </div>
          </div>
        </div>
        <div className="hidden pt-[30px] lg:mr-[-130px] lg:block lg:pl-[50px]">
          <div className="flex flex-col gap-9">
            <SearchBar />
            <MainPagePopularPostList postList={popularList} />
            <MainPageCategory categoryList={categoryList} />
            <MainPageTag tagList={tagList} />
          </div>
        </div>
      </div>
    </div>
  );
}
