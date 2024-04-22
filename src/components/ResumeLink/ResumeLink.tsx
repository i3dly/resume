import type { CSSProperties, FC } from "react";
import { cn } from "../../utils/cn";

export interface ResumeLinkProps {
	className?: string;
	link: string;
	style?: CSSProperties;
}

export const ResumeLink: FC<ResumeLinkProps> = ({ className, link, style }) => {
	return (
		<div className={cn("mt-auto", "text-center text-xs text-white", className)} style={style}>
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
