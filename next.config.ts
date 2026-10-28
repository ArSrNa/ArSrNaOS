import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: false,
	output: 'export',
	transpilePackages: [
		'@ant-design/icons',
		'@ant-design/icons-svg',
		'antd'
	],
	allowedDevOrigins: ["i46d4z5elx-3000.cnb.run"]
};

export default nextConfig;
