import Typography from "@/components/atoms/Typography";
import Link from "next/link";
import { PostInterface } from "../types/PostList.type";

interface MainPagePopularPostListProps {
  postList: PostInterface[];
}

const MainPagePopularPostList = ({
  postList,
}: MainPagePopularPostListProps) => {
  return (
    <div className="mr-[45px] w-[350px] border-l-2 px-10 ">
      <Typography.P2 className="mb-6 font-bold">인기글</Typography.P2>
      {postList.map((post, index) => {
        const title = post.title.slice(0, 22);
        return (
          <Link
            href={`/post/${post.postSeq}`}
            key={index}
            className="flex h-8 items-center justify-between transition-all hover:text-sky-400"
          >
            <div className="flex items-center justify-start gap-2">
              <Typography.P2>
                {title}
                {post.title.length > 22 && " ..."}
              </Typography.P2>
            </div>
            <i className="bi bi-arrow-right"></i>
          </Link>
        );
      })}
    </div>
  );
};

export default MainPagePopularPostList;
