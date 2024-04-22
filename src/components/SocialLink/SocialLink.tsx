import type { CSSProperties, FC, ReactElement } from "react";
import { cn } from "../../utils/cn";
import { Anchor } from "../Anchor";

export interface SocialLinkProps {
	children: string;
	className?: string;
	href: string;
	icon: ReactElement;
	style?: CSSProperties;
}

export const SocialLink: FC<SocialLinkProps> = ({ children, className, href, icon, style }) => {
	return (
		<Anchor
			className={cn("inline-flex items-center", className)}
			href={href}
			rel="noreferrer noopener"
			style={style}
			target="_blank"
		>
			{icon}
			<span className="ml-1.5">{children}</span>
		</Anchor>
	);
};
