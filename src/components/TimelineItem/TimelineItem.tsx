import { oneLine } from "common-tags";
import dayjs from "dayjs";
import type { CSSProperties, FC, ReactElement, ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface TimelineItemProps {
	children?: ReactNode;
	className?: string;
	endDate?: Date | string;
	icon: ReactElement;
	info?: string;
	startDate: Date | string;
	style?: CSSProperties;
	subTitle?: string;
	title: string;
}

export const TimelineItem: FC<TimelineItemProps> = ({
	children,
	className,
	endDate,
	icon,
	info,
	startDate,
	style,
	subTitle,
	title
}) => {
	return (
		<div
			className={cn(
				oneLine`
					before:content
					relative
					flex
					items-start
					before:absolute
					before:-bottom-[1rem]
					before:left-[0.75rem]
					before:top-6
					before:w-0
					before:-translate-x-1/2
					before:border
					before:border-solid
					before:border-indigo-800
					last:before:hidden
					dark:before:border-indigo-700
				`,
				className
			)}
			style={style}
		>
			<div
				className={cn(
					oneLine`
						z-10
						flex
						h-6
						w-6
						flex-shrink-0
						items-center
						justify-center
						rounded-full
						border
						border-solid
						border-indigo-500/60
						bg-indigo-800
						text-white
						dark:bg-indigo-700
					`
				)}
			>
				{icon}
			</div>
			<div className="ml-3 flex flex-col">
				<h4 className={cn("flex h-6 items-center text-base font-medium leading-none")}>
					<span>{title}</span>
					{!!info && (
						<>
							<span className="ml-1.5 text-xs font-normal">({info})</span>
						</>
					)}
				</h4>
				{!!subTitle && <h5 className={cn("mt-0.5 text-sm italic leading-none")}>{subTitle}</h5>}
				<span className={cn("mt-1 text-xs leading-none text-gray-600 dark:text-gray-300/80")}>
					{dayjs(startDate).format("MMM YYYY")} - {endDate ? dayjs(endDate).format("MMM YYYY") : "Present"}
				</span>
				<div className={cn("mt-2 text-xs text-gray-600 dark:text-gray-300/80")}>{children}</div>
			</div>
		</div>
	);
};
