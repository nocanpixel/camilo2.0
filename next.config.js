/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'hackaday.com'
            },
            {
                protocol: 'https',
                hostname: 'cdn.freebiesupply.com'
            },
            {
                protocol: 'https',
                hostname: 'vitejs.dev'
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com'
            },
            {
                protocol: 'https',
                hostname: 'redux.js.org'
            }
        ]
    }
}

module.exports = nextConfig
