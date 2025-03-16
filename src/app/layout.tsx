import QueryClientProvider from "@/app/queryClientProvider";
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
          <div className="flex items-center justify-center">
            <div className="layout">{children}</div>
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
