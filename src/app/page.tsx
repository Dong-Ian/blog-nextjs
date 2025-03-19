import AccountComponent from "@/features/Account/components/AccountComponent";

export default function Home() {
  return (
    <div className="w-full">
      <div className="fixed left-0 top-[180px] hidden laptop:block">
        <AccountComponent />
      </div>
    </div>
  );
}
