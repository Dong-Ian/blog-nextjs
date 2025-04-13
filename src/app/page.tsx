import Divider from "@/components/atoms/Divider";
import AccountComponent from "@/features/Account/components/AccountComponent";
import getAccount from "@/features/Account/services/getAccount.service";
import PinnedPostList from "@/features/PostList/components/PinnedPostList";
import RecentPostList from "@/features/PostList/components/RecentPostList";

export default async function Home() {
  const userInfo = await getAccount();

  return (
    <div>
      <title>{userInfo.title}</title>
      <div className="flex justify-center">
        <div className="hidden lg:fixed lg:left-0 lg:top-40 lg:block">
          <AccountComponent />
        </div>

        <div className="flex w-full max-w-[760px] flex-col gap-6 px-4">
          <PinnedPostList page={1} size={5} />
          <Divider width={100} />
          <RecentPostList page={1} size={5} />
        </div>
      </div>
    </div>
  );
}
