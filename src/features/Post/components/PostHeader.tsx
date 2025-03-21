import Typography from "@/components/atoms/Typography";
import { PostParams } from "../type/Post.type";

const PostHeader = ({ post }: PostParams) => {
  return (
    <div>
      <Typography.P1 className="text-[20px] text-gray-500">
        {post.category}
      </Typography.P1>
      <Typography.Head2>{post.postTitle}</Typography.Head2>
    </div>
  );
};

export default PostHeader;
