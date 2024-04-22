import { Tailwind as OneDocTailwind } from "@onedoc/react-print";
import type { FC, ReactNode } from "react";

export interface TailwindProps {
	children?: ReactNode;
}

export const Tailwind: FC<TailwindProps> = ({ children }) => {
	return (
		<OneDocTailwind
			config={{
				darkMode: "class",
				theme: {
					extend: {
						backgroundImage: {
							"makepurple-gradient": `linear-gradient(-80deg, #db2777, $#7c3aed, #3b82f6)`
						}
					}
				}
			}}
		>
			{children}
		</OneDocTailwind>
	);
};
