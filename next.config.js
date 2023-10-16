/** @type {import('next').NextConfig} */
const nextConfig = {
    // Below allows
    images: {
        remotePatterns: [
            { hostname: "images.unsplash.com" },
            { hostname: "images.pexels.com" },
            { hostname: "blog.homesalive.ca" },
            { hostname: "i.ibb.co" },
            { hostname: "lh3.googleusercontent.com" },
        ],
    },

    experimental: {
        // Below allows experimental server features
        serverActions: true,
    },
};

module.exports = nextConfig;
