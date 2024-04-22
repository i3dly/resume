import { oneLine } from "common-tags";
import dayjs from "dayjs";
import type { NextPage } from "next";
import { FaCalendarAlt, FaCode, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Avatar } from "../components/Avatar";
import { BulletedList } from "../components/BulletedList";
import { BulletedListItem } from "../components/BulletedListItem";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { LetterPage } from "../components/LetterPage";
import { PageContainer } from "../components/PageContainer";
import { ResumeLink } from "../components/ResumeLink";
import { SideBar } from "../components/SideBar";
import { SideBarDivider } from "../components/SideBarDivider";
import { SideBarHeader } from "../components/SideBarHeader";
import { SideBarSubHeader } from "../components/SideBarSubHeader";
import { SocialLink } from "../components/SocialLink";
import { Timeline } from "../components/Timeline";
import { TimelineItem } from "../components/TimelineItem";
import { data } from "../resume-data";
import { cn } from "../utils/cn";

export const Page: NextPage = () => {
	return (
		<PageContainer className="gap-8">
			<DarkModeSwitch />
			<LetterPage
				className={cn(
					oneLine`
    					flex
                        flex-row-reverse
                        items-stretch
    					shadow-2xl
                        dark:shadow-indigo-700/40
                    `
				)}
			>
				<div className="flex grow flex-col items-stretch">
					<div
						className={cn(
							"flex w-full items-center gap-4 p-4",
							"border-b border-solid border-gray-500/60 dark:border-indigo-500"
						)}
					>
						<div className={"shrink-0"}>
							<Avatar />
						</div>
						<div className="min-w-0 grow basis-0">
							<h1 className="text-3xl font-semibold leading-none">{data.name}</h1>
							<h2 className="text-gray-600 dark:text-gray-300/80">{data.jobTitle}</h2>
							<div className={cn("grid grid-cols-2 gap-x-4 gap-y-1", "mt-2", "text-xs")}>
								<div>
									<SocialLink
										href={`mailto:${data.sites.email}`}
										icon={<FaEnvelope className="size-3.5" />}
									>
										{data.sites.email}
									</SocialLink>
								</div>
								<div>
									<SocialLink href={data.sites.linkedin} icon={<FaLinkedin className="size-3.5" />}>
										{data.sites.linkedin.replace(/^https?:\/\//, "")}
									</SocialLink>
								</div>
								<div>
									<SocialLink href={data.sites.github} icon={<FaGithub className="size-3.5" />}>
										{data.sites.github.replace(/^https?:\/\//, "")}
									</SocialLink>
								</div>
								<div>
									<SocialLink href={data.sites.blog} icon={<FaCode className="size-3.5" />}>
										{data.sites.blog.replace(/^https?:\/\//, "")}
									</SocialLink>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col p-4">
						<h3
							className={cn(
								"mx-auto pb-1 text-xl font-semibold leading-none",
								"border-b-2 border-solid border-gray-500/60 dark:border-indigo-500",
								"uppercase"
							)}
						>
							Professional Experience
						</h3>
						<Timeline className="mt-4">
							{data.experience.professional[0].map((experience, i) => (
								<TimelineItem
									key={i}
									endDate={experience.endDate ?? undefined}
									icon={<FaCalendarAlt className="size-3" height={12} width={12} />}
									info={experience.info}
									startDate={experience.startDate}
									title={experience.company}
									subTitle={experience.jobTitle}
								>
									<BulletedList>
										{experience.highlights.map((highlight, j) => (
											<BulletedListItem key={j}>{highlight}</BulletedListItem>
										))}
									</BulletedList>
								</TimelineItem>
							))}
						</Timeline>
					</div>
				</div>
				<SideBar className={cn("flex shrink-0 flex-col gap-4", "w-1/3 p-4")}>
					<div>
						<SideBarHeader>Summary</SideBarHeader>
						<div className="mt-3 flex flex-col gap-2 text-xs leading-snug">
							{data.summary.split(/\n+/g).map((paragraph, i) => (
								<p key={i}>{paragraph}</p>
							))}
						</div>
					</div>
					<SideBarDivider />
					<div>
						<SideBarHeader>Skills</SideBarHeader>
						<div className="flex flex-col gap-3">
							<div className="text-xs leading-snug">
								<SideBarSubHeader>Languages</SideBarSubHeader>
								<p className="mt-2">{data.skills.languages.join(", ")}</p>
							</div>
							<div className="text-xs leading-snug">
								<SideBarSubHeader>Frameworks</SideBarSubHeader>
								<p className="mt-2">{data.skills.frameworks.join(", ")}</p>
							</div>
							<div className="text-xs leading-snug">
								<SideBarSubHeader>Frontend</SideBarSubHeader>
								<p className="mt-2">{data.skills.frontend.join(", ")}</p>
							</div>
							<div className="text-xs leading-snug">
								<SideBarSubHeader>Backend</SideBarSubHeader>
								<p className="mt-2">{data.skills.backend.join(", ")}</p>
							</div>
							<div className="text-xs leading-snug">
								<SideBarSubHeader>Tooling + Services</SideBarSubHeader>
								<p className="mt-2">{data.skills.tooling.join(", ")}</p>
							</div>
							<div className="text-xs leading-snug">
								<SideBarSubHeader>Concepts + Misc.</SideBarSubHeader>
								<p className="mt-2">{data.skills.concepts.join(", ")}</p>
							</div>
						</div>
					</div>
					{!!data.link && <ResumeLink link={data.link} />}
				</SideBar>
			</LetterPage>
			{data.experience.professional.slice(1).map((experiences, i) => (
				<LetterPage
					key={i}
					className={cn("flex flex-row-reverse items-stretch", "shadow-2xl dark:shadow-indigo-700/40")}
				>
					<div className="flex grow flex-col items-stretch gap-4 py-4">
						<div className="flex flex-col items-stretch gap-4 px-4">
							<h3
								className={cn(
									"mx-auto pb-1 text-xl font-semibold leading-none",
									"border-b-2 border-solid border-gray-500/60 dark:border-indigo-500",
									"uppercase"
								)}
							>
								<span>Professional Experience</span>{" "}
								<span className={cn("text-sm", "text-gray-600 dark:text-gray-300/80")}>
									(continued)
								</span>
							</h3>
							<Timeline>
								{experiences.map((experience, j) => (
									<TimelineItem
										key={j}
										endDate={experience.endDate ?? undefined}
										icon={<FaCalendarAlt className="size-3" height={12} width={12} />}
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
					<SideBar className={cn("flex shrink-0 flex-col gap-4", "w-1/3 p-4")}>
						<div>
							<SideBarHeader>Education</SideBarHeader>
							<SideBarSubHeader>{data.education.degree}</SideBarSubHeader>
							<div className="mt-2 text-xs">{data.education.college}</div>
							<div className="mt-1 flex items-center gap-2 text-xs">
								<FaCalendarAlt />
								<span>Graduated: {dayjs(data.education.endDate).format("MMMM YYYY")}</span>
							</div>
						</div>
						{!!data.link && <ResumeLink link={data.link} />}
					</SideBar>
				</LetterPage>
			))}
		</PageContainer>
	);
};

export default Page;
