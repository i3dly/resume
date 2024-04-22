import type { CSSProperties, FC } from "react";
import { cn } from "../../utils/cn";

export interface SideBarDividerProps {
	className?: string;
	style?: CSSProperties;
}

export const SideBarDivider: FC<SideBarDividerProps> = ({ className, style }) => {
	return <hr className={cn("h-0 w-full border-0 border-b border-solid border-white", className)} style={style} />;
};
