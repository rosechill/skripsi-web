/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: 
        [
            {
                protocol: 'https',
                hostname: 'www.travelxism.com',
            }
        ]
    },
};

export default nextConfig;
