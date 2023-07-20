import {
	Avatar,
	BulletedList,
	BulletedListItem,
	DarkModeSwitch,
	DownloadButton,
	DownloadDocxButton,
	LetterPage,
	PageContainer,
	ResumeLink,
	SideBar,
	SideBarDivider,
	SideBarHeader,
	SideBarSubHeader,
	SocialLink,
	Timeline,
	TimelineItem
} from "@/components";
import clsx from "clsx";
import dayjs from "dayjs";
import { NextPage } from "next";
import React, { MutableRefObject, useRef } from "react";
import {
	FaCalendarAlt,
	FaCode,
	FaEnvelope,
	FaGithub,
	FaLinkedin
} from "react-icons/fa";
import { data } from "../resume-data";

export const Page: NextPage = () => {
	const pagesRef = useRef<MutableRefObject<HTMLDivElement | null>[]>(
		data.experience.professional.map(() => ({ current: null }))
	);

	return (
		<PageContainer className="gap-8">
			<div className="flex justify-between w-[8.5in]">
				<div className="flex flex-row gap-3">
					<DownloadButton
						fileName="lee_david_resume.pdf"
						metaData={JSON.stringify(data)}
						targets={pagesRef.current}
					/>
					<DownloadDocxButton />
				</div>
				<DarkModeSwitch />
			</div>
			<LetterPage
				ref={pagesRef.current[0]}
				className={clsx(
					"flex flex-row-reverse items-stretch",
					"shadow-2xl dark:shadow-indigo-700/40"
				)}
			>
				<div className="flex-grow flex flex-col items-stretch">
					<div
						className={clsx(
							"flex items-center gap-4 w-full p-4",
							"border-b border-solid border-gray-500/60 dark:border-indigo-500"
						)}
					>
						<div className={"flex-shrink-0"}>
							<Avatar />
						</div>
						<div className="flex-grow basis-0 min-w-0">
							<h1 className="text-3xl leading-none font-semibold">{data.name}</h1>
							<h2 className="text-gray-600 dark:text-gray-300/80">{data.jobTitle}</h2>
							<div
								className={clsx(
									"grid grid-cols-2 gap-x-4 gap-y-1",
									"mt-2",
									"text-xs"
								)}
							>
								<div>
									<SocialLink
										href={`mailto:${data.sites.email}`}
										icon={<FaEnvelope className="h-3.5 w-3.5" />}
									>
										{data.sites.email}
									</SocialLink>
								</div>
								<div>
									<SocialLink
										href={data.sites.linkedin}
										icon={<FaLinkedin className="h-3.5 w-3.5" />}
									>
										{data.sites.linkedin.replace(/^https?:\/\//, "")}
									</SocialLink>
								</div>
								<div>
									<SocialLink
										href={data.sites.github}
										icon={<FaGithub className="h-3.5 w-3.5" />}
									>
										{data.sites.github.replace(/^https?:\/\//, "")}
									</SocialLink>
								</div>
								<div>
									<SocialLink
										href={data.sites.blog}
										icon={<FaCode className="h-3.5 w-3.5" />}
									>
										{data.sites.blog.replace(/^https?:\/\//, "")}
									</SocialLink>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col p-4">
						<h3
							className={clsx(
								"text-xl leading-none font-semibold pb-1 mx-auto",
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
									icon={<FaCalendarAlt className="h-3 w-3" height={12} width={12} />}
									info={experience.info}
									startDate={experience.startDate}
									title={experience.company}
									subTitle={experience.jobTitle}
								>
									<BulletedList>
										{experience.highlights.map((highlight, j) => (
											<BulletedListItem key={j}>
												{highlight}
											</BulletedListItem>
										))}
									</BulletedList>
								</TimelineItem>
							))}
						</Timeline>
					</div>
				</div>
				<SideBar
					className={clsx(
						"flex-shrink-0 flex flex-col gap-4",
						"w-1/3 p-4"
					)}
				>
					<div>
						<SideBarHeader>Summary</SideBarHeader>
						<div className="flex flex-col gap-2 text-xs leading-snug mt-3">
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
								<p className="mt-2">
									{data.skills.languages.join(", ")}
								</p>
							</div>
							<div className="text-xs leading-snug">
								<SideBarSubHeader>Frameworks</SideBarSubHeader>
								<p className="mt-2">
									{data.skills.frameworks.join(", ")}
								</p>
							</div>
							<div className="text-xs leading-snug">
								<SideBarSubHeader>Frontend</SideBarSubHeader>
								<p className="mt-2">
									{data.skills.frontend.join(", ")}
								</p>
							</div>
							<div className="text-xs leading-snug">
								<SideBarSubHeader>Backend</SideBarSubHeader>
								<p className="mt-2">
									{data.skills.backend.join(", ")}
								</p>
							</div>
							<div className="text-xs leading-snug">
								<SideBarSubHeader>Tooling + Services</SideBarSubHeader>
								<p className="mt-2">
									{data.skills.tooling.join(", ")}
								</p>
							</div>
							<div className="text-xs leading-snug">
								<SideBarSubHeader>Concepts + Misc.</SideBarSubHeader>
								<p className="mt-2">
									{data.skills.concepts.join(", ")}
								</p>
							</div>
						</div>
					</div>
					{!!data.link && <ResumeLink link={data.link} />}
				</SideBar>
			</LetterPage>
			{data.experience.professional.slice(1).map((experiences, i) => (
				<LetterPage
					key={i}
					ref={pagesRef.current[i + 1]}
					className={clsx(
						"flex flex-row-reverse items-stretch",
						"shadow-2xl dark:shadow-indigo-700/40"
					)}
				>
					<div className="flex-grow flex flex-col items-stretch gap-4 py-4">
						<div className="flex flex-col items-stretch gap-4 px-4">
							<h3
								className={clsx(
									"text-xl leading-none font-semibold pb-1 mx-auto",
									"border-b-2 border-solid border-gray-500/60 dark:border-indigo-500",
									"uppercase"
								)}
							>
								<span>Professional Experience</span>{" "}
								<span
									className={clsx(
										"text-sm",
										"text-gray-600 dark:text-gray-300/80"
									)}
								>
									(continued)
								</span>
							</h3>
							<Timeline>
								{experiences.map((experience, j) => (
									<TimelineItem
										key={j}
										endDate={experience.endDate ?? undefined}
										icon={<FaCalendarAlt className="h-3 w-3" height={12} width={12} />}
										info={experience.info}
										startDate={experience.startDate}
										title={experience.company}
										subTitle={experience.jobTitle}
									>
										{!!experience.highlights.length && (
											<BulletedList>
												{experience.highlights.map((highlight, j) => (
													<BulletedListItem key={j}>
														{highlight}
													</BulletedListItem>
												))}
											</BulletedList>
										)}
									</TimelineItem>
								))}
							</Timeline>
						</div>
					</div>
					<SideBar
						className={clsx(
							"flex-shrink-0 flex flex-col gap-4",
							"w-1/3 p-4"
						)}
					>
						<div>
							<SideBarHeader>Education</SideBarHeader>
							<SideBarSubHeader>{data.education.degree}</SideBarSubHeader>
							<div className="text-xs mt-2">{data.education.college}</div>
							<div className="flex items-center gap-2 mt-1 text-xs">
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
