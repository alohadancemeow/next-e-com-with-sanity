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

    // logging: {
    //     fetches: {
    //         fullUrl: true,
    //     },
    // },

};

export default nextConfig;
