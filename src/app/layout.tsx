export const dynamic = "force-dynamic";

import QueryClientProvider from "@/app/queryClientProvider";
import AppInitializer from "@/shared/utils/AppInitializer";
import HeaderWrapper from "@/shared/utils/HeaderWrapper";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Metadata } from "next";
import "../styles/global.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Archive",
    description:
      "최신 프론트엔드 트렌드를 바탕으로 효율적인 개발 방법과 실무 경험을 나눕니다.",

    icons: {
      icon: "/favicon/minsook.ico",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <QueryClientProvider>
          <HeaderWrapper />
          <div className="flex w-full items-center justify-center">
            <AppInitializer />
            {children}
            <div id="portal" />
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
