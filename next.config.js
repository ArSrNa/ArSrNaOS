/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	output: 'export',
	transpilePackages: [
		'@ant-design/icons',
		'@ant-design/icons-svg',
		'antd'
	],
	allowedDevOrigins: ["*.cnb.run"],
	images: {
		unoptimized: false
	},
};

module.exports = nextConfig;
