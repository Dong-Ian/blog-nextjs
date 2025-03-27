import QueryClientProvider from "@/app/queryClientProvider";

import "bootstrap-icons/font/bootstrap-icons.css";
import "../../styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider>
      <div className="flex w-full items-center justify-center">
        <div className="w-full">{children}</div>
      </div>
    </QueryClientProvider>
  );
}
