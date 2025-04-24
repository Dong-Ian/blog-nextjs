"use client";

import Header from "@/components/molecules/Header";
import { usePathname } from "next/navigation";

export default function HeaderWrapper() {
  const pathname = usePathname();
  const showHeader =
    pathname === "/" ||
    pathname === "/post" ||
    pathname.startsWith("/post/") ||
    pathname === "/postlist" ||
    pathname.startsWith("/postlist/") ||
    pathname.startsWith("/archived_post/") ||
    pathname === "/search";

  return showHeader ? (
    <div className="mb-[100px]">
      <Header />
    </div>
  ) : null;
}
