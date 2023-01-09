import clsx from "clsx";
import NextImage from "next/image"
import React, { CSSProperties, FC } from "react";

export interface AvatarProps {
	className?: string;
	style?: CSSProperties;
}

export const Avatar: FC<AvatarProps> = ({ className, style }) => {
	return (
		<a
			className={clsx(
				"relative inline-flex items-stretch cursor-pointer",
				"border-[4px] border-solid border-transparent rounded-full",
				"bg-clip-padding",
				"before:content before:absolute before:inset-0 before:-m-[4px] before:rounded-full",
				"before:bg-makepurple-gradient",
				className
			)}
			href="https://github.com/leedavidcs"
			rel="noopener noreferrer"
			style={style}
			target="_blank"
		>
			<div
				className={clsx(
					"flex items-stretch overflow-hidden rounded-full z-10"
				)}
			>
				<NextImage
					alt="leedavidcs"
					src="https://avatars.githubusercontent.com/u/15151154?v=4"
					loader={({ src, width }) => {
						const url: URL = new URL(src);

						url.searchParams.append("s", `${width}`);

						return url.toString();
					}}
					priority
					width={96}
					height={96}
					unoptimized
				/>
			</div>
		</a>
	);
};
