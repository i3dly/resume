import clsx from "clsx";
import dayjs from "dayjs";
import React, { CSSProperties, FC, ReactElement, ReactNode } from "react";

export interface TimelineItemProps {
	children?: ReactNode;
	className?: string;
	endDate?: Date | string
	icon: ReactElement;
	startDate: Date | string
	style?: CSSProperties;
	subTitle?: string;
	title: string;
}

export const TimelineItem: FC<TimelineItemProps> = ({
	children,
	className,
	endDate,
	icon,
	startDate,
	style,
	subTitle,
	title
}) => {
	return (
		<div
			className={clsx(
				"relative",
				"flex items-start gap-3",
				"before:content before:border before:border-solid before:border-indigo-800 dark:before:border-indigo-700 before:w-0",
				"last:before:hidden",
				"before:absolute before:top-6 before:left-[0.75rem] before:-bottom-[1rem]",
				"before:-translate-x-1/2",
				className
			)}
			style={style}
		>
			<div
				className={clsx(
					"flex-shrink-0",
					"flex items-center justify-center h-6 w-6",
					"border border-solid border-indigo-500/60 rounded-full",
					"bg-indigo-800 dark:bg-indigo-700 text-white",
					"z-10"
				)}
			>
				{icon}
			</div>
			<div className="flex flex-col">
				<h4
					className={clsx(
						"flex items-center h-6",
						"text-base font-medium leading-none"
					)}
				>
					{title}
				</h4>
				{!!subTitle && (
					<h5
						className={clsx(
							"text-sm leading-none italic mt-0.5"
						)}
					>
						{subTitle}
					</h5>
				)}
				<span
					className={clsx(
						"text-xs leading-none mt-1",
						"text-gray-600 dark:text-gray-300/80"
					)}
				>
					{dayjs(startDate).format("MMM YYYY")} -{" "}
					{endDate ? dayjs(endDate).format("MMM YYYY") : "Present"}
				</span>
				<div className={clsx(
					"mt-2",
					"text-xs text-gray-600 dark:text-gray-300/80"
				)}>
					{children}
				</div>
			</div>
		</div>
	);
};
