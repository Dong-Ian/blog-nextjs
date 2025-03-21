export default async function CategoryPostList({
  params,
}: {
  params: { category: string };
}) {
  const category = (await params).category;

  return (
    <div>
      <p>{category} PostList</p>
    </div>
  );
}
