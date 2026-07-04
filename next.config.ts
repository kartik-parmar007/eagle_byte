import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    loader: "custom",
    loaderFile: "./lib/imagekit-loader.ts",
  },
  experimental: {
    // Tailwind output is small — inlining removes the render-blocking CSS request
    inlineCss: true,
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);
