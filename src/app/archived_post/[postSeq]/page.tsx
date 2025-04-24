import { PageProps } from "@/shared/types/main.type";
import ClientArchivePostPage from "./ClientArchivePostPage";

export default async function Post({ params }: PageProps) {
  const { postSeq } = await params;

  return <ClientArchivePostPage postSeq={postSeq} />;
}
