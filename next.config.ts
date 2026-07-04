import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  // Static export — deployable to any static host (no Node server required)
  output: "export",
  // Emit /about/index.html instead of /about.html so plain web servers
  // (Apache/cPanel/nginx) resolve routes without rewrite rules
  trailingSlash: true,
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
