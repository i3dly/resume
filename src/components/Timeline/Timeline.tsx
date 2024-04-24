import type { CSSProperties, FC, ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface TimelineProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
}

export const Timeline: FC<TimelineProps> = ({ children, className, style }) => {
	return (
		<div className={cn("flex flex-col", className)} style={style}>
			{children}
		</div>
	);
};
