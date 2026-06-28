import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = "ebpartners";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repositoryName}` : "",
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(isGithubPages
    ? {
        assetPrefix: `/${repositoryName}/`,
        basePath: `/${repositoryName}`,
      }
    : {}),
};

export default nextConfig;
