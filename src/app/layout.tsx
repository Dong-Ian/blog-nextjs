"use client";
import QueryClientProvider from "@/app/queryClientProvider";
import Header from "@/components/molecules/Header";
import { cn } from "@/lib/utils";
import "bootstrap-icons/font/bootstrap-icons.css";
import { usePathname } from "next/navigation";
import { RecoilRoot } from "recoil";
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
    pathname.startsWith("/postlist/");

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <RecoilRoot>
          <QueryClientProvider>
            {showHeader && <Header />}
            <div
              className={cn(
                "flex w-full items-center justify-center",
                showHeader && "mt-[100px]"
              )}
            >
              {children}
            </div>
          </QueryClientProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
