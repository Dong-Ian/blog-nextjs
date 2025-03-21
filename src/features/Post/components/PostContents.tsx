import EditorMarkdown from "@/components/atoms/EditorMarkdown";
import { PostParams } from "../type/Post.type";

const PostContents = ({ post }: PostParams) => {
  return (
    <div className="py-[30px]">
      <EditorMarkdown content={post.postContents} />
    </div>
  );
};

export default PostContents;
