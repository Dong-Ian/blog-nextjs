"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Loading = () => {
  const pathname = usePathname();
  const hasHeader =
    pathname === "/" ||
    pathname === "/post" ||
    pathname.startsWith("/post/") ||
    pathname === "/postlist" ||
    pathname.startsWith("/postlist/");

  return (
    <div
      className={cn(
        "flex h-screen items-center justify-center",
        hasHeader && "mt-[-100px]"
      )}
    >
      <div
        className="size-[70px] animate-spin rounded-full 
                   border-8 border-gray-200 border-t-black"
        style={{
          animationDuration: "1s",
          animationTimingFunction: "ease-in-out",
        }}
      />
    </div>
  );
};

export default Loading;
