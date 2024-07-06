/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    webpack: config => {

        config.module.rules.push({
            test: /\.woff2$/,
            type: "asset/resource"
        });

        return config;
    }
};

export default nextConfig;