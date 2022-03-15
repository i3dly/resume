import clsx from "clsx";
import React, { CSSProperties, FC, ReactNode } from "react";

export interface SideBarProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
}

export const SideBar: FC<SideBarProps> = ({ children, className, style }) => {
	return (
		<section
			className={clsx(
				"border-0 border-r border-solid border-indigo-500/60",
				"bg-indigo-800 text-gray-50",
				"dark:bg-indigo-700",
				className
			)}
			style={style}
		>
			{children}
		</section>
	);
};
