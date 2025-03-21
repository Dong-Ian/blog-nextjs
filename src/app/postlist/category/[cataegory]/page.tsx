export default async function CategoryPostList({
  params,
}: {
  params: { category: string };
}) {
  const category = (await params).category;
  return <div>{category} 카테고리의 글 목록</div>;
}
