export default async function TagPostList({
  params,
}: {
  params: { tag: string };
}) {
  const tag = (await params).tag;

  return (
    <div>
      <p>{tag} PostList</p>
    </div>
  );
}
