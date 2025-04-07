import getCategoryList from "@/features/Category/services/getCategoryList.service";
import PostingForm from "@/features/Posting/components/PostingForm";

export default async function Posting() {
  const categoryList = await getCategoryList();

  return <PostingForm categoryList={categoryList} />;
}
