import clsx from "clsx";
import React, { CSSProperties, FC, ReactNode } from "react";

export interface SideBarSubHeaderProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
}

export const SideBarSubHeader: FC<SideBarSubHeaderProps> = ({
	children,
	className,
	style
}) => {
	return (
		<h4
			className={clsx(
				"text-sm leading-none font-medium underline",
				"text-cyan-300 dark:text-cyan-200",
				className
			)}
			style={style}
		>
			{children}
		</h4>
	);
};
