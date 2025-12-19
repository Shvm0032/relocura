/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",        // static build
  images: {
    unoptimized: true,     // next/image cPanel compatible
  },
};

export default nextConfig;
