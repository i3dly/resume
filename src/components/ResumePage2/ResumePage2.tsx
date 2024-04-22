import dayjs from "dayjs";
import { FC } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { data } from "../../resume-data";
import { cn } from "../../utils/cn";
import { BulletedList } from "../BulletedList";
import { BulletedListItem } from "../BulletedListItem";
import { LetterPage } from "../LetterPage";
import { ResumeLink } from "../ResumeLink";
import { SideBar } from "../SideBar";
import { SideBarHeader } from "../SideBarHeader";
import { SideBarSubHeader } from "../SideBarSubHeader";
import { Timeline } from "../Timeline";
import { TimelineItem } from "../TimelineItem";

const experiences = data.experience.professional[1];

export const ResumePage2: FC = () => {
	return (
		<LetterPage className={cn("flex flex-row-reverse items-stretch", "shadow-2xl dark:shadow-indigo-700/40")}>
			<div className="flex grow flex-col items-stretch py-4">
				<div className="flex flex-col items-stretch px-4">
					<h3
						className={cn(
							"mx-auto pb-1 text-xl font-semibold leading-none",
							"border-b-2 border-solid border-gray-500/60 dark:border-indigo-500",
							"uppercase"
						)}
					>
						<span>Professional Experience</span>{" "}
						<span className={cn("text-sm", "text-gray-600 dark:text-gray-300/80")}>(continued)</span>
					</h3>
					<Timeline className="mt-4">
						{experiences.map((experience, j) => (
							<TimelineItem
								key={j}
								endDate={experience.endDate ?? undefined}
								// eslint-disable-next-line tailwindcss/enforces-shorthand
								icon={<FaCalendarAlt className="h-3 w-3" height={12} width={12} />}
								info={experience.info}
								startDate={experience.startDate}
								title={experience.company}
								subTitle={experience.jobTitle}
							>
								{!!experience.highlights.length && (
									<BulletedList>
										{experience.highlights.map((highlight, j) => (
											<BulletedListItem key={j}>{highlight}</BulletedListItem>
										))}
									</BulletedList>
								)}
							</TimelineItem>
						))}
					</Timeline>
				</div>
			</div>
			<SideBar className={cn("flex w-1/3 shrink-0 flex-col p-4")}>
				<div>
					<SideBarHeader>Education</SideBarHeader>
					<SideBarSubHeader>{data.education.degree}</SideBarSubHeader>
					<div className="mt-2 text-xs">{data.education.college}</div>
					<div className="mt-1 flex items-center gap-2 text-xs">
						<FaCalendarAlt />
						<span>Graduated: {dayjs(data.education.endDate).format("MMMM YYYY")}</span>
					</div>
				</div>
				{!!data.link && <ResumeLink className="mt-4" link={data.link} />}
			</SideBar>
		</LetterPage>
	);
};
