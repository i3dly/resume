import clsx from "clsx";
import React, { CSSProperties, FC } from "react";

export interface ResumeLinkProps {
	className?: string;
	link: string;
	style?: CSSProperties;
}

export const ResumeLink: FC<ResumeLinkProps> = ({
	className,
	link,
	style,
}) => {
	return (
		<div
			className={clsx(
				"mt-auto",
				"text-xs text-white text-center",
				className
			)}
			style={style}
		>
			<span>View this resume online at:</span>{" "}
			<a
				className="cursor-pointer hover:underline"
				href={link}
				target="_blank"
				rel="noreferrer noopener nofollow"
			>
				{link.replace(/^https?:\/\//, "")}
			</a>
		</div>
	);
};
