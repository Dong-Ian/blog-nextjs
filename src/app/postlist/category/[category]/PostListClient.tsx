"use client";

import Typography from "@/components/atoms/Typography";
import Pagination from "@/components/molecules/Pagination";
import PostItem from "@/features/PostList/components/PostItem";
import { PostInterface } from "@/features/PostList/types/PostList.type";
import { useRouter } from "next/navigation";

interface Props {
  category: string;
  posts: PostInterface[];
  totalPages: number;
  currentPage: number;
}

export default function PostListClient({
  category,
  posts,
  totalPages,
  currentPage,
}: Props) {
  const router = useRouter();

  const handlePageChange = ({ selected }: { selected: number }) => {
    router.push(`/postlist/category/${category}?page=${selected + 1}`);
  };

  return (
    <div className="m-auto flex w-[90%] max-w-screen-md flex-col justify-center">
      <Typography.SubTitle1 className="ml-[30px] text-gray-500">
        {category}
      </Typography.SubTitle1>
      {posts.map((post) => (
        <PostItem key={post.postSeq} post={post} />
      ))}
      {posts.length == 0 ? (
        <div className="ml-7 flex items-center justify-center py-60">
          <Typography.P1 className="text-gray-400">
            게시글이 없습니다.
          </Typography.P1>
        </div>
      ) : (
        <Pagination
          postCount={totalPages}
          perPage={5}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
