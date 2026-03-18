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

export const getStaticProps = async (context) => {
  const { boardId } = context.params;
  return {
    props: {
      boardId,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { boardId: "1" } },
      { params: { boardId: "2" } },
      { params: { boardId: "3" } },
    ],
    fallback: false,
  };
};
