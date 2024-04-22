import { oneLine } from "common-tags";
import type { CSSProperties, FC, ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface SideBarProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
}

export const SideBar: FC<SideBarProps> = ({ children, className, style }) => {
	return (
		<section
			className={cn(
				oneLine`
					border-0
					border-r
					border-solid
					border-indigo-500/60
					bg-indigo-800
					text-gray-50
					dark:bg-indigo-700
				`,
				className
			)}
			style={style}
		>
			{children}
		</section>
	);
};
