import { Tailwind as OneDocTailwind } from "@onedoc/react-print";
import type { FC, ReactNode } from "react";

export interface TailwindProps {
	children?: ReactNode;
}

export const Tailwind: FC<TailwindProps> = ({ children }) => {
	return <OneDocTailwind>{children}</OneDocTailwind>;
};
