import type { NextConfig } from "next";

// NEXT_PUBLIC_BASE_PATH=/jtaura npm run build  → GitHub Pages
// npm run build                                 → tjtaura.com
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
