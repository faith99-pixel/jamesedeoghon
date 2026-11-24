import type { NextConfig } from "next";

// The site is published as a fully static export (plain HTML/CSS/JS) so it
// can be hosted on Namecheap shared hosting (cPanel/Apache) with no Node.js
// server. `next build` produces the `out/` folder that gets uploaded.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
