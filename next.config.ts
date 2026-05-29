import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/jtaura",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
