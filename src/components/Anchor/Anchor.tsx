import type { InferComponentProps } from "@/types";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";

export type AnchorProps = InferComponentProps<"a">;

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => {
	const { className } = props;

	return <a {...props} className={cn("cursor-pointer", "hover:underline", className)} ref={ref} />;
});

Anchor.displayName = "Anchor";
