import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev'

// note: the if statement is present because you
//       only need to use the function during development
if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform()
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io**",
            },
        ],
        unoptimized: true
    },

    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },

    experimental: {
        runtime: 'edge', // Apply edge runtime globally
    },

    // logging: {
    //     fetches: {
    //         fullUrl: true,
    //     },
    // },

};

export default nextConfig;
