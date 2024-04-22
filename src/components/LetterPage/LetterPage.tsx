import { oneLine } from "common-tags";
import type { CSSProperties, ReactNode } from "react";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";

export interface LetterPageProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
}

export const LetterPage = forwardRef<HTMLDivElement, LetterPageProps>((props, ref) => {
	const { children, className, style } = props;

	return (
		<div
			ref={ref}
			className={cn(
				oneLine`
					transition-color
					h-[11.7in]
					w-[8.3in]
					border
					border-solid
					border-gray-200
					bg-white
					font-[inter]
					duration-200
					ease-in-out
					dark:border-gray-700/75
					dark:bg-slate-800
				`,
				className
			)}
			style={style}
		>
			{children}
		</div>
	);
});

LetterPage.displayName = "LetterPage";
