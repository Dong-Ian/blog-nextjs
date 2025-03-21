export default async function TagPostList({
  params,
}: {
  params: { tag: string };
}) {
  const tag = (await params).tag;
  return <div>{tag} 태그의 글 목록</div>;
}
