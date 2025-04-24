import Typography from "@/components/atoms/Typography";
import { PostInterface } from "@/features/PostList/types/PostList.type";
import { useRouter } from "next/navigation";

interface RelatedPostsByCategoryProps {
  category: string | undefined;
  relatedPostList: PostInterface[];
}

const RelatedPostsByCategory = ({
  category,
  relatedPostList,
}: RelatedPostsByCategoryProps) => {
  const router = useRouter();
  return (
    <div className="rounded-md border bg-gray-100 p-4">
      <Typography.P1 className="mb-4 text-md font-semibold">
        {category} 카테고리와 관련된 최신 글
      </Typography.P1>
      {relatedPostList.map((post, index) => (
        <div
          onClick={() => {
            router.push(`/post/${post.postSeq}`);
          }}
          key={index}
          className="group flex w-full cursor-pointer justify-between py-1"
        >
          <Typography.P3 className=" transition-all group-hover:text-sky-400">
            {post.title}
          </Typography.P3>
          <i className="bi bi-arrow-right transition-all group-hover:text-sky-400"></i>
        </div>
      ))}
    </div>
  );
};

export default RelatedPostsByCategory;
