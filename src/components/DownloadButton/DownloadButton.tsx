import { oneLine } from "common-tags";
import { forwardRef } from "react";
import type { InferComponentProps } from "../../types";
import { cn } from "../../utils/cn";

export type DownloadButtonProps = InferComponentProps<"a">;

export const DownloadButton = forwardRef<HTMLAnchorElement, DownloadButtonProps>((props, ref) => {
	const { className, ...restProps } = props;

	return (
		<a
			{...restProps}
			ref={ref}
			className={cn(
				oneLine`
					inline-flex
					h-12
                    cursor-pointer
					items-center
					justify-center
					rounded-lg
					border
					border-gray-200
					bg-slate-50
					px-4
					transition-colors
					duration-200
					ease-in-out
					hover:bg-slate-100
					focus:outline-none
					focus-visible:ring-2
					focus-visible:ring-blue-300
					focus-visible:ring-opacity-75
					active:bg-slate-200
					dark:border-gray-700/75
					dark:bg-slate-900
					dark:hover:bg-slate-600/25
					dark:focus-visible:ring-white
					dark:active:bg-slate-400/25
				`,
				className
			)}
			href="/static/resume.pdf"
			download="David_Lee_Resume.pdf"
		>
			Download
		</a>
	);
});

DownloadButton.displayName = "DownloadButton";
