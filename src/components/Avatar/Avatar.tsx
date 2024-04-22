"use client";

import { oneLine } from "common-tags";
import NextImage from "next/image";
import type { CSSProperties, FC } from "react";
import { cn } from "../../utils/cn";

export interface AvatarProps {
	className?: string;
	style?: CSSProperties;
}

export const Avatar: FC<AvatarProps> = ({ className, style }) => {
	return (
		<a
			className={cn(
				oneLine`
					before:content
					relative
					inline-flex
					cursor-pointer
					items-stretch
					rounded-full
					border-4
					border-solid
					border-transparent
					bg-clip-padding
					before:absolute
					before:inset-0
					before:-m-1
					before:rounded-full
					before:bg-makepurple-gradient
				`,
				className
			)}
			href="https://github.com/leedavidcs"
			rel="noopener noreferrer"
			style={style}
			target="_blank"
		>
			<div className={cn("z-10 flex items-stretch overflow-hidden rounded-full")}>
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
