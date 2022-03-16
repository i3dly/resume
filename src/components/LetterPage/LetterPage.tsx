import clsx from "clsx";
import React, { CSSProperties, forwardRef, ReactNode } from "react";

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
			className={clsx(
				"h-[11in] w-[8.5in]",
				"border border-solid",
				"bg-white border-gray-200",
				"dark:bg-slate-800 dark:border-gray-700/75",
				"transition-color ease-in-out duration-200",
				className
			)}
			style={style}
		>
			{children}
		</div>
	);
});

LetterPage.displayName = "LetterPage";
