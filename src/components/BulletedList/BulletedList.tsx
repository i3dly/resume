import type { CSSProperties, FC, ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface BulletedListProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
}

export const BulletedList: FC<BulletedListProps> = ({ children, className, style }) => {
	return (
		<ul className={cn("flex flex-col gap-1", className)} style={style}>
			{children}
		</ul>
	);
};
