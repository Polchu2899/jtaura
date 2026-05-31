import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  /* basePath removed — site serves from domain root (tjtaura.com/) */
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
