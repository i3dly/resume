import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		ONEDOC_API_KEY: z.string()
	},
	runtimeEnv: {
		ONEDOC_API_KEY: process.env.ONEDOC_API_KEY
	},
	client: {}
});
