import type { NextConfig } from "next";

// Dual-target build config:
//
// - Vercel (VERCEL=1 is set automatically by Vercel's build): native Next.js
//   deployment with built-in image optimization and clean URLs.
// - Anywhere else (e.g. Namecheap cPanel / Apache): fully static export into
//   `out/` — plain HTML/CSS/JS, no Node.js server needed. Requires
//   `images.unoptimized` and is served with the public/.htaccess rewrite
//   rules.
const isVercel = process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  ...(isVercel
    ? {}
    : { output: "export" as const, images: { unoptimized: true } }),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
