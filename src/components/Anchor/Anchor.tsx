import { InferComponentProps } from "@/types";
import clsx from "clsx";
import React, { forwardRef } from "react";

export type AnchorProps = InferComponentProps<"a">;

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => {
	const { className } = props;

	return (
		<a
			{...props}
			className={clsx(
				"cursor-pointer",
				"hover:underline",
				className
			)}
			ref={ref}
		/>
	);
});

Anchor.displayName = "Anchor";
