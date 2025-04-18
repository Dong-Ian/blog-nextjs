import Tag from "@/components/atoms/Tag";
import Typography from "@/components/atoms/Typography";
import Link from "next/link";
import { PostParams } from "../type/Post.type";

interface SubInfoProps {
  reg: string;
  viewed: string;
}

const SubInfo = ({ reg, viewed }: SubInfoProps) => {
  const date = new Date(reg);
  date.setHours(date.getHours() + 9);

  const formattedDate = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일 ${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}`;

  return (
    <div>
      <Typography.P3 className="text-gray-400">
        {formattedDate}
        <span> | 조회수 {viewed}</span>
      </Typography.P3>
    </div>
  );
};

const PostHeader = ({ post }: PostParams) => {
  return (
    <div className="flex flex-col gap-4">
      <Link href={`/postlist/category/${post.category}`}>
        <Typography.P1 className="mb-[-10px] text-[20px] text-gray-500">
          {post.category}
        </Typography.P1>
      </Link>
      <Typography.Head2 className="text-[30px]">
        {post.postTitle}
      </Typography.Head2>
      <div className="flex flex-wrap gap-1">
        {post.tags?.map((tag: string, index: number) => (
          <Link key={index} href={`/postlist/tag/${tag}`}>
            <Tag.Default className="cursor-pointe transition-all hover:cursor-pointer hover:bg-gray-100">
              {tag}
            </Tag.Default>
          </Link>
        ))}
      </div>
      <SubInfo reg={post.regDate} viewed={post.viewed} />
    </div>
  );
};

export default PostHeader;
