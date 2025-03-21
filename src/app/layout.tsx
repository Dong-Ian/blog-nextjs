import QueryClientProvider from "@/app/queryClientProvider";
import Header from "@/components/molecules/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <QueryClientProvider>
          <Header />
          <div className="mt-[100px] flex w-full items-center justify-center">
            <div className="layout">{children}</div>
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
