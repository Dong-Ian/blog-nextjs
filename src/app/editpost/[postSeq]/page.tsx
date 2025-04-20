export const dynamic = "force-dynamic";

import getCategoryList from "@/features/Category/services/getCategoryList.service";
import getPost from "@/features/Post/services/getPost.service";
import { PostInterface } from "@/features/Post/type/Post.type";
import EditPostingForm from "@/features/Posting/components/EditPostingForm";
import { PageProps } from "@/shared/types/main.type";

export default async function EditPost({ params }: PageProps) {
  const { postSeq } = await params;

  const post: PostInterface = await getPost({ postSeq });
  const categoryList = await getCategoryList();

  return <EditPostingForm post={post} categoryList={categoryList} />;
}
