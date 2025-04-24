"use client";

import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import BackButton from "@/components/molecules/BackButton";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();
  const menu = [
    {
      id: 1,
      icon: "bi-person-circle",
      name: "회원 정보 변경",
      path: "/admin/info",
    },
    { id: 2, icon: "bi-archive", name: "보관함 조회", path: "/admin/archive" },
  ];

  return (
    <div className="hidden md:fixed md:left-0 md:top-0 md:block md:h-full md:w-[230px] md:border-r md:py-10">
      <div className="ml-6">
        <BackButton.Custom onBack={() => router.push("/")} />
      </div>
      <div className="flex flex-col gap-2">
        {menu.map((row) => (
          <Button.Default
            key={row.id}
            onClick={() => router.push(row.path)}
            className="flex h-[45px] w-full justify-start border-none outline-none hover:bg-gray-100"
          >
            <i className={`bi ${row.icon} mx-2 text-md`} />
            <Typography.P2>{row.name}</Typography.P2>
          </Button.Default>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
