import clsx from "clsx";
import React, { CSSProperties, FC, ReactNode } from "react";
import { FaPlay } from "react-icons/fa";

export interface BulletedListItemProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
}

export const BulletedListItem: FC<BulletedListItemProps> = ({
	children,
	className,
	style
}) => {
	return (
		<li
			className={clsx(
				"relative",
				"pl-3",
				"list-none",
				className
			)}
			style={style}
		>
			<FaPlay
				className={clsx(
					"absolute top-[0.25rem] left-0",
					"h-1.5 w-1.5",
					"text-black dark:text-sky-500",
					"transition-colors ease-in-out duration-200"
				)}
				aria-hidden
			/>
			<div>{children}</div>
		</li>
	);
};
