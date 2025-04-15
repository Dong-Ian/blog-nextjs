import QueryClientProvider from "@/app/queryClientProvider";
import AppInitializer from "@/shared/utils/AppInitializer";
import HeaderWrapper from "@/shared/utils/HeaderWrapper";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Metadata } from "next";
import "../styles/global.css";

export async function generateMetadata(): Promise<Metadata> {
  const env = process.env.ENV;

  return {
    title: env === "IAN" ? "Archive" : "Tech Blog",
    description:
      env === "IAN"
        ? "최신 프론트엔드 트렌드를 바탕으로 효율적인 개발 방법과 실무 경험을 나눕니다."
        : "동현이의 개발 블로그",
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const env = process.env.NEXT_PUBLIC_BLOG_ID;
  const faviconPath =
    env === "IAN" ? "/favicon/minsook.ico" : "/favicon/dong.ico";

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={faviconPath} />
      </head>
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
