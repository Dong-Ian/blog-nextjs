import { SearchPageProps } from "@/shared/types/main.type";
import ClientAdminPage from "./ClientAdminPage";

export default async function Archive({ searchParams }: SearchPageProps) {
  const currentPage = Number((await searchParams).page ?? "1");

  return <ClientAdminPage currentPage={currentPage} />;
}
