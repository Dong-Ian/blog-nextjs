import Typography from "@/components/atoms/Typography";
import Link from "next/link";

interface MainPageTagProps {
  tagList: { tagId: number; name: string; postCount: number }[];
}

const MainPageTag = ({ tagList }: MainPageTagProps) => {
  return (
    <div className="mr-[45px] w-[350px] border-l-2 px-10 ">
      <Typography.P2 className="mb-6 font-bold">태그</Typography.P2>
      <div className="flex flex-wrap gap-3">
        {tagList.map((tag, index) => (
          <Link
            href={`/postlist/tag/${tag.name}`}
            key={index}
            className="flex items-center justify-between transition-all hover:text-sky-400"
          >
            <div className="flex items-center justify-center rounded-lg border px-5 py-2">
              <Typography.P2 className="text-sm">{tag.name}</Typography.P2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainPageTag;
