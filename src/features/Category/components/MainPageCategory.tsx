import Typography from "@/components/atoms/Typography";
import Link from "next/link";

interface MainPageCategoryProps {
  categoryList: { categoryId: number; name: string; postCount: number }[];
}

const MainPageCategory = ({ categoryList }: MainPageCategoryProps) => {
  return (
    <div className="mr-[45px] w-[350px] border-l-2 px-10 ">
      <Typography.P2 className="mb-6 font-bold">카테고리</Typography.P2>
      {categoryList.map((category, index) => (
        <Link
          href={`/postlist/category/${category.name}`}
          key={index}
          className="flex h-8 items-center justify-between transition-all hover:text-sky-400"
        >
          <div className="flex items-center justify-start gap-2">
            <Typography.P2>{category.name}</Typography.P2>
            <Typography.P3 className="text-xs text-gray-400">
              ( {category.postCount} )
            </Typography.P3>
          </div>
          <i className="bi bi-arrow-right"></i>
        </Link>
      ))}
    </div>
  );
};

export default MainPageCategory;
