import getCategoryList from "@/features/Category/services/getCategoryList.service";
import getPost from "@/features/Post/services/getPost.service";
import { PostInterface } from "@/features/Post/type/Post.type";
import EditPostingForm from "@/features/Posting/components/EditPostingForm";

export default async function EditPost({
  params,
}: {
  params: { postSeq: string };
}) {
  const postSeq = (await params).postSeq;
  const post: PostInterface = await getPost({ postSeq: postSeq });

  const categoryList = await getCategoryList();

  return <EditPostingForm post={post} categoryList={categoryList} />;
}
