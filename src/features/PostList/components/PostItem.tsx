import Typography from "@/components/atoms/Typography";
import Link from "next/link";
import { PostInterface } from "../types/PostList.type";

interface PostItemProps {
  post: PostInterface;
}

interface ContentsProps {
  contents: string;
}

interface SubInfoProps {
  reg: string;
  viewed: string;
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
      .replace(/<[^>]*>/g, "")
      .trim();
  };

  const plainText = stripMarkdown(contents);
  const sliced = plainText.slice(0, 200);

  return (
    <div className="">
      <Typography.P2 className="mt-[10px] text-gray-600">
        {sliced}
        {plainText.length > 200 && (
          <span className="ml-[5px] text-gray-500">더보기...</span>
        )}
      </Typography.P2>
      <Typography.P1 className="invisible h-0 w-full flex-wrap">
        blank blank blank blank blank blank blank blank blank blank blank blank
        blank
      </Typography.P1>
    </div>
  );
};

const SubInfo = ({ reg, viewed }: SubInfoProps) => {
  const date = new Date(reg);
  date.setHours(date.getHours() + 9);

  const formattedDate = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일 ${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}`;

  return (
    <div className="mt-[10px]">
      <Typography.P3 className="text-gray-400">
        {formattedDate}
        <span> | 조회수 {viewed}</span>
      </Typography.P3>
    </div>
  );
};

const PostItem = ({ post }: PostItemProps) => {
  return (
    <Link href={`/post/${post.postSeq}`}>
      <div className="group cursor-pointer p-[30px]">
        <Typography.P2 className="text-gray-500">{post.category}</Typography.P2>
        <Typography.SubTitle1 className="font-semibold transition-colors duration-200 group-hover:text-sky-400">
          {post.title}
        </Typography.SubTitle1>
        <Contents contents={post.content} />
        <SubInfo reg={post.createdAt} viewed={post.views} />
      </div>
    </Link>
  );
};

export default PostItem;
