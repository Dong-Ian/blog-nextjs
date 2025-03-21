export default async function Post({
  params,
}: {
  params: { postSeq: string };
}) {
  return (
    <div>
      <p>게시글 아이디: {params.postSeq}</p>
    </div>
  );
}
