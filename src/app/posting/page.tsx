import PostingForm from "@/features/Posting/components/PostingForm";
import getCategoryList from "@/shared/services/getCategoryList.service";

export default async function Posting() {
  const categoryList = await getCategoryList();

  return <PostingForm categoryList={categoryList} />;
}
