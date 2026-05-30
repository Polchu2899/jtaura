import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/jtaura",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
