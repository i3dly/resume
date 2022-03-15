import clsx from "clsx";
import React, { CSSProperties, FC, ReactNode } from "react";

export interface BulletedListProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
}

export const BulletedList: FC<BulletedListProps> = ({
	children,
	className,
	style
}) => {
	return (
		<ul
			className={clsx(
				"flex flex-col gap-1",
				className
			)}
			style={style}
		>
			{children}
		</ul>
	);
};
