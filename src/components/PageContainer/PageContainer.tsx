import clsx from "clsx";
import React, { CSSProperties, FC, ReactNode } from "react";

export interface PageContainerProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
}

export const PageContainer: FC<PageContainerProps> = ({ children, className, style }) => {
	return (
		<div
			className={clsx(
				"flex flex-col items-center",
				"min-w-screen min-h-screen py-4",
				"bg-slate-50 dark:bg-slate-900",
				"transition-colors duration-200 ease-in-out",
				"text-black dark:text-sky-500",
				className
			)}
			style={style}
		>
			{children}
		</div>
	);
};
