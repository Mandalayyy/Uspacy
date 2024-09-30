/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    basePath: isProd ? '/Uspacy' : '',  // Замініть 'your-repo-name' на назву вашого репозиторію
    assetPrefix: isProd ? '/Uspacy/' : '',
    output: 'export',
    distDir: 'dist',
};

export default nextConfig;
