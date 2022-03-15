import clsx from "clsx";
import React, { CSSProperties, FC } from "react";

export interface SideBarDividerProps {
	className?: string;
	style?: CSSProperties;
}

export const SideBarDivider: FC<SideBarDividerProps> = ({ className, style }) => {
	return (
		<hr
			className={clsx(
				"h-0 w-full border-0 border-b border-solid border-white",
				className
			)}
			style={style}
		/>
	)
};
