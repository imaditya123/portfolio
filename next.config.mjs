/** @type {import('next').NextConfig} */
const nextConfig = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}"],
    output: "export",
    reactStrictMode: true,
    basePath: '/github-pages',


};

export default nextConfig;
