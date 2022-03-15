import clsx from "clsx";
import React, { CSSProperties, FC, ReactNode } from "react";

export interface SideBarHeaderProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
}

export const SideBarHeader: FC<SideBarHeaderProps> = ({ children, className, style }) => {
	return (
		<h3
			className={clsx(
				"mb-3 text-lg leading-none font-medium text-white uppercase",
				className
			)}
			style={style}
		>
			{children}
		</h3>
	);
};
