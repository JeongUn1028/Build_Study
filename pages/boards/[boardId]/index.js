import { useRouter } from "next/router";

export default function BoardsPage() {
  const router = useRouter();
  const { boardId } = router.query;
  return (
    <>
      <h1>게시판 상세 dynamic 페이지입니다.</h1>
      <div>게시판 아이디: {boardId}</div>
    </>
  );
}
