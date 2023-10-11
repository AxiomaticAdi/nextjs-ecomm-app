/** @type {import('next').NextConfig} */
const nextConfig = {
    // Below allows
    images: {
        remotePatterns: [{ hostname: "images.unsplash.com" }],
    },

    experimental: {
        // Below allows experimental server features
        serverActions: true,
    },
};

module.exports = nextConfig;
