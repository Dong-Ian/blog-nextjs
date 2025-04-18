import getCategoryList from "@/features/Category/services/getCategoryList.service";
import getPost from "@/features/Post/services/getPost.service";
import { PostInterface } from "@/features/Post/type/Post.type";
import EditPostingForm from "@/features/Posting/components/EditPostingForm";

type PageParams = Promise<{ id: string }>;

export default async function EditPost({ params }: { params: PageParams }) {
  const postSeq = (await params).id;
  const post: PostInterface = await getPost({ postSeq });
  const categoryList = await getCategoryList();

  return <EditPostingForm post={post} categoryList={categoryList} />;
}

export const dynamic = "force-dynamic";
