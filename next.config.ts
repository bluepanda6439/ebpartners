import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
