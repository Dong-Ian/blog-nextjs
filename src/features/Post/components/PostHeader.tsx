import Tag from "@/components/atoms/Tag";
import Typography from "@/components/atoms/Typography";
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
      <Typography.P1 className="mb-[-10px] text-[20px] text-gray-500">
        {post.category}
      </Typography.P1>
      <Typography.Head2>{post.postTitle}</Typography.Head2>
      <div className="flex gap-1">
        {post.tags?.map((tag: string, index: number) => (
          <Tag.Default
            className="cursor-pointe transition-all hover:cursor-pointer hover:bg-gray-100"
            key={index}
          >
            {tag}
          </Tag.Default>
        ))}
      </div>
      <SubInfo reg={post.regDate} viewed={post.viewed} />
    </div>
  );
};

export default PostHeader;
