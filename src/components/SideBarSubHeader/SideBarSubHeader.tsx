import type { CSSProperties, FC, ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface SideBarSubHeaderProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
}

export const SideBarSubHeader: FC<SideBarSubHeaderProps> = ({ children, className, style }) => {
	return (
		<h4 className={cn("text-sm font-medium leading-none underline", className)} style={style}>
			{children}
		</h4>
	);
};
