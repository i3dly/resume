import clsx from "clsx";
import React, { CSSProperties, FC, ReactNode } from "react";

export interface TimelineProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
}

export const Timeline: FC<TimelineProps> = ({
	children,
	className,
	style
}) => {
	return (
		<div
			className={clsx(
				"flex flex-col gap-4",
				className
			)}
			style={style}
		>
			{children}
		</div>
	);
};
