import AccountComponent from "@/features/Account/components/AccountComponent";
import PinnedPostList from "@/features/PostList/components/PinnedPostList";
import RecentPostList from "@/features/PostList/components/RecentPostList";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="hidden lg:fixed lg:left-0 lg:top-40 lg:block">
        <AccountComponent />
      </div>

      <div className="mt-[100px] flex w-full max-w-[760px] flex-col gap-6 px-4">
        <PinnedPostList page={1} size={5} />
        <RecentPostList page={1} size={5} />
      </div>
    </div>
  );
}
