import Typography from "@/components/atoms/Typography";
import { PostInterface } from "../types/PostList.type";

interface PostItemProps {
  post: PostInterface;
}

interface ContentsProps {
  contents: string;
}

const Contents = ({ contents }: ContentsProps) => {
  const stripMarkdown = (markdown: string) => {
    return markdown
      .replace(/!\[.*?\]\(.*?\)/g, "") // 이미지 ![alt](url)
      .replace(/\[([^\]]+)\]\((.*?)\)/g, "$1") // 링크 [text](url)
      .replace(/(```[\s\S]*?```)/g, "") // 코드 블럭 ```code```
      .replace(/`([^`]+)`/g, "$1") // 인라인 코드 `code`
      .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, "$1") // bold, italic 등
      .replace(/^>\s+/gm, "") // blockquote
      .replace(/#+\s+/g, "") // heading
      .replace(/[-+*]\s+/g, "") // unordered list
      .replace(/\d+\.\s+/g, "") // ordered list
      .replace(/---/g, "") // horizontal rule
      .replace(/\r?\n|\r/g, " ") // 줄바꿈 제거
      .replace(/\s+/g, " ") // 연속 공백 제거
      .trim();
  };

  const plainText = stripMarkdown(contents);
  const sliced = plainText.slice(0, 200);

  return (
    <div>
      <Typography.P2 className="mt-[10px] text-gray-600">
        {sliced}
        {plainText.length > 200 && (
          <span className="ml-[5px] text-gray-500">더보기...</span>
        )}
      </Typography.P2>
    </div>
  );
};

const PostItem = ({ post }: PostItemProps) => {
  return (
    <div className="cursor-pointer p-[30px]">
      <Typography.P2 className="text-gray-500">
        {post.categoryName}
      </Typography.P2>
      <Typography.SubTitle1 className="font-semibold">
        {post.postTitle}
      </Typography.SubTitle1>
      <Contents contents={post.postContents} />
    </div>
  );
};

export default PostItem;
