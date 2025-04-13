"use client";
import QueryClientProvider from "@/app/queryClientProvider";
import Header from "@/components/molecules/Header";
import { cn } from "@/lib/utils";
import AppInitializer from "@/shared/components/AppInitializer";
import "bootstrap-icons/font/bootstrap-icons.css";
import { usePathname } from "next/navigation";

import "../styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showHeader =
    pathname === "/" ||
    pathname === "/post" ||
    pathname.startsWith("/post/") ||
    pathname === "/postlist" ||
    pathname.startsWith("/postlist/") ||
    pathname === "/admin";

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <QueryClientProvider>
          {showHeader && <Header />}
          <div
            className={cn(
              "flex w-full items-center justify-center",
              showHeader && "mt-[100px]"
            )}
          >
            <AppInitializer />
            {children}
            <div id="portal" />
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
