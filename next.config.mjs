/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  generateBuildId: async () => {
    return "nextjs-static-site";
  },

  //* 아래 주소들만 out folder에 만들기
  exportPathMap: () => {
    return {
      "/": { page: "/" },
      "/boards": { page: "/boards" },
      "/boards/1": { page: "/boards/[boardId]", query: { boardId: "1" } },
      "/boards/2": { page: "/boards/[boardId]", query: { boardId: "2" } },
      "/boards/3": { page: "/boards/[boardId]", query: { boardId: "3" } },
      "/404": { page: "/404" },
    };
  },
};

export default nextConfig;
