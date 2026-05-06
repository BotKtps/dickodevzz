/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  // Pastikan tidak ada konfigurasi yang memblokir CSS
};

export default nextConfig;

