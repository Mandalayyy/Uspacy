/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';


const nextConfig = {
    basePath: isProd ? '/Uspace' : '',  // Замініть 'your-repo-name' на назву вашого репозиторію
    assetPrefix: isProd ? '/Uspace/' : '',
    output: 'export',
    distDir: 'dist',
};

module.exports = nextConfig;
