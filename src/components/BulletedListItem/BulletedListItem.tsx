import type { CSSProperties, FC, ReactNode } from "react";
import { FaPlay } from "react-icons/fa";
import { cn } from "../../utils/cn";
import { oneLine } from "common-tags";

export interface BulletedListItemProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
}

export const BulletedListItem: FC<BulletedListItemProps> = ({ children, className, style }) => {
	return (
		<li className={cn("relative", "pl-3", "list-none", className)} style={style}>
			<FaPlay
				className={cn(
					oneLine`
						duration-20
						absolute
						left-0
						top-[0.25rem]
						h-1.5
						w-1.5
						text-black
						transition-colors
						ease-in-out
						dark:text-sky-500
					`
				)}
				aria-hidden
			/>
			<div>{children}</div>
		</li>
	);
};
