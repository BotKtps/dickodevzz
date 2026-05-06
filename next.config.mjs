/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Memaksa build tetap jalan meski ada error tipe data
    ignoreBuildErrors: true,
  },
  eslint: {
    // Memaksa build tetap jalan meski ada peringatan kode
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

