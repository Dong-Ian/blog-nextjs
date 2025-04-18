import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/global.css";

// export async function generateMetadata(): Promise<Metadata> {
//   const env = process.env.ENV;

//   return {
//     title: "Archive",
//     description:
//       env === "IAN"
//         ? "최신 프론트엔드 트렌드를 바탕으로 효율적인 개발 방법과 실무 경험을 나눕니다."
//         : "동현이의 개발 블로그",
//     icons: {
//       icon: "/favicon/minsook.ico",
//     },
//   };
// }

export default function RootLayout() {
//   {
//   children,
// }: {
//   children: React.ReactNode;
// }
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {/* <QueryClientProvider>
          <HeaderWrapper />
          <div className="flex w-full items-center justify-center">
            <AppInitializer />
            {children}
            <div id="portal" />
          </div>
        </QueryClientProvider> */}
      </body>
    </html>
  );
}
