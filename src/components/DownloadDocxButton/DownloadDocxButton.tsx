import clsx from "clsx";
import React, { CSSProperties, FC } from "react";
import { useDownloadDocx } from "@/hooks";

export interface DownloadDocxButtonProps {
	className?: string;
	style?: CSSProperties;
}

export const DownloadDocxButton: FC<DownloadDocxButtonProps> = ({
    className,
    style,
}) => {
    const [loading, download] = useDownloadDocx();

    return (
		<button
			className={clsx(
				"flex items-center justify-content",
				"h-12 px-3",
				"border border-gray-200 dark:border-gray-700/75 rounded-lg",
				"transition-colors ease-in-out duration-200",
				"focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75",
				"cursor-pointer",
				className
			)}
			disabled={loading}
			onClick={async () => {
                await download();
			}}
			style={style}
			type="button"
		>
			{loading ? "Loading..." : "Download Docx"}
		</button>
    );
};
