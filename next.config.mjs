/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    basePath: isProd ? '/Uspacy' : '', 
    assetPrefix: isProd ? '/Uspacy/' : '',
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
      },
};

export default nextConfig;
