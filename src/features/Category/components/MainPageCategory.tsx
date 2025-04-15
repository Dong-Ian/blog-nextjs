import Typography from "@/components/atoms/Typography";
import Link from "next/link";

interface MainPageCategoryProps {
  categoryList: string[];
}
const MainPageCategory = ({ categoryList }: MainPageCategoryProps) => {
  return (
    <div className="mr-[45px] w-[350px] border-l-2 px-10 ">
      <Typography.P2 className="mb-6 font-bold">카테고리</Typography.P2>
      {categoryList.map((category, index) => (
        <Link
          href={`/postlist/category/${category}`}
          key={index}
          className="flex h-8 justify-between transition-all hover:text-sky-400"
        >
          <Typography.P2>{category}</Typography.P2>
          <i className="bi bi-arrow-right"></i>
        </Link>
      ))}
    </div>
  );
};

export default MainPageCategory;
