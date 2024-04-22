import createJiti from "jiti";
import { fileURLToPath } from "url";

const fileUrlPath = fileURLToPath(import.meta.url);
const jiti = createJiti(fileUrlPath);

jiti("./src/env");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true
};

export default nextConfig;
