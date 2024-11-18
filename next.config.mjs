import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  output: "export",
  basePath: process.env.NODE_ENV === "development" ? "" : "/portfolio-blog-theme",
  assetPrefix: process.env.NODE_ENV === "development" ? "" : "/portfolio-blog-theme",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  transpilePackages: ["next-mdx-remote"],
};

export default withContentlayer(nextConfig);
