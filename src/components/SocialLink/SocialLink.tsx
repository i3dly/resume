import clsx from "clsx";
import React, { CSSProperties, FC, ReactElement } from "react";
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
			className={clsx(
				"inline-flex items-center gap-1.5",
				className
			)}
			href={href}
			rel="noreferrer noopener"
			style={style}
			target="_blank"
		>
			{icon}
			<span>{children}</span>
		</Anchor>
	);
};
