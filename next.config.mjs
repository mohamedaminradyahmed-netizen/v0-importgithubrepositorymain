/** @type {import('next').NextConfig} */
const nextConfig = {
  // إصلاح مشكلة Turbopack - تحديد جذر المشروع بوضوح
  turbopack: {
    root: process.cwd(),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
