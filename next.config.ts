import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: false,
	output: 'export',
	transpilePackages: [
		'@ant-design/icons',
		'@ant-design/icons-svg',
		'antd'
	],
	allowedDevOrigins: ["*.cnb.run"]
};

export default nextConfig;
