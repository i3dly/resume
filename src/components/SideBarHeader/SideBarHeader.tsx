import type { CSSProperties, FC, ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface SideBarHeaderProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
}

export const SideBarHeader: FC<SideBarHeaderProps> = ({ children, className, style }) => {
	return (
		<h3 className={cn("mb-3 text-lg font-medium uppercase leading-none text-white", className)} style={style}>
			{children}
		</h3>
	);
};
