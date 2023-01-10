import {
	Avatar,
	BulletedList,
	BulletedListItem,
	DarkModeSwitch,
	DownloadButton,
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
import { oneLine, stripIndents } from "common-tags";
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

const data = {
	link: "https://resume.leedavidcs.dev",
	name: "David Lee",
	jobTitle: "Staff Software Engineer",
	sites: {
		email: "jobs.lee.david.cs@gmail.com",
		linkedin: "https://linkedin.com/in/leedavidcs",
		github: "https://github.com/leedavidcs",
		blog: "https://makepurple.com/leedavidcs",
	},
	summary: stripIndents`
		${oneLine`
			Full Stack Engineer with extensive experience in start-ups, serving various key roles
			in software development.
		`}
		${oneLine`
			Advanced expertise in TypeScript and Node.js with React and GraphQL.
		`}
		${oneLine`
			Demonstrated skill in architecting greenfield applications, researching emerging
			technologies, improving the developer experience, and working in distributed teams.
		`}
	`,
	skills: {
		languages: ["TypeScript", "JavaScript"],
		frameworks: ["Next.js", "Astro", "Remix", "Gatsby", "Nest.js"],
		frontend: [
			"HTML5",
			"CSS3",
			"React",
			"Urql",
			"Apollo Client",
			"Styled-Components",
			"Tailwind CSS",
			"Visx",
			"D3",
			"Recharts",
			"Framer Motion",
			"Storybook",
			"React-Three-Fiber",
			"React-Window",
			"Radix",
			"Headless UI",
			"Reakit",
			"Redux",
			"Slate",
			"Prism"
		],
		backend: [
			"Node.js",
			"Cloudflare Workers",
			"Serverless",
			"GraphQL",
			"tRPC",
			"Prisma",
			"Nexus",
			"Postgres",
			"MongoDB",
			"Redis",
			"Apollo Server",
			"Express",
			"Socket.io",
			"NextAuth",
		],
		tooling: [
			"Linux",
			"Mac",
			"Git",
			"VSCode",
			"Figma",
			"Zeplin",
			"SourceTree",
			"Webpack",
			"pnpm workspaces",
			"Turborepo",
			"Lerna",
			"Docker",
			"Cypress",
			"Jest",
			"ESLint",
			"Prettier",
			"GraphQL-Codegen",
			"Jira",
			"Confluence",
			"Notion",
			"Amplitude",
			"Segment",
			"Sentry",
			"Google Analytics",
			"GitHub Actions",
			"PlanetScale",
			"Upstash",
			"Postmark",
			"Octokit",
			"Algolia",
			"Pusher",
			"Stripe",
			"Twilio",
			"GraphCDN",
			"Cloudinary",
			"Cloudflare",
			"Vercel",
			"Netlify",
			"S3",
			"RDS",
			"ElastiCache",
			"Lambda",
			"API Gateway",
			"Amplify",
			"Elastic Beanstalk",
			"CloudWatch",
			"CloudFront",
			"Playwright",
			"Renovate",
			"Kodiak",
			"Changesets",
			"Chromatic",
		],
		concepts: [
			"SEO",
			"A11y",
			"I18n",
			"ISR",
			"SSR",
			"Atomic Design",
			"JWT",
			"Authorization",
			"Image Optimization",
			"Lighthouse",
			"Code-splitting",
			"DB Seeding",
			"DB Normalization",
			"GraphQL APQ",
			"CRDTs",
			"Windowing",
			"IP Blacklisting",
			"Rate Limiting",
			"Concurrency",
			"API Caching",
			"Monorepos",
		]
	},
	education: {
		degree: "BS in Computer Science",
		college: "University of California, San Diego",
		endDate: "06/01/2017"
	},
	experience: {
		professional: [
			[
				{
					company: "Openbase",
					jobTitle: "Staff Frontend Engineer",
					startDate: "04/01/2021",
					endDate: null,
					highlights: [
						oneLine`
							Proposed then executed a gradual migration strategy to port the frontend
							from a SPA-Parcel app to Next.js, Apollo, Styled-Components, Storybook and
							Codegen.
						`,
						oneLine`
							Improved all Lighthouse metrics from 20 to 90, and coverage from 0% to 70%.
						`,
						oneLine`
							Architected and built dev.page with Next.js, Apollo, Styled-Components,
							Storybook, Codegen and Tailwind CSS.
						`,
						oneLine`
							Created an Algolia-Apollo interoperability module to power Openbase's search,
							that populated @apollo/client's normalized cache.
						`,
						oneLine`
							Implemented the majority of the frontend application, including pages for
							packages, categories, user-profiles, search, comparisons and more.
						`,
						oneLine`
							Participated in product feature ideation to drive user aquisition and
							retention.
						`,
						oneLine`
							Mentored developers in Next.js, Apollo Client, Styled-Components, and more.
						`,
						oneLine`
							Authored a split-testing framework that integrated with Google Analytics and
							Amplitude to a/b test by segmenting users by percentage or special conditions.
						`,
						oneLine`
							Created serverless functions to reroute traffic from old sites and generate custom
							README badges with metrics from Openbase for package maintainers.
						`,
					]
				},
				{
					company: "@pluv/io",
					jobTitle: "Open Source (npm)",
					startDate: "08/01/2022",
					endDate: null,
					highlights: [
						oneLine`
							Created E2E type-safe real-time packages for Node.js and Cloudflare
							Workers.
						`,
						oneLine`
							Built with support for automatic type safety, authentication, custom
							events, rooms, awareness + presence and CRDT storage (with yjs).
						`,
						oneLine`
							Configured git and npm management with Commitizen, Changeset, Renovate,
							Kodiak and GitHub Actions.
						`,
						oneLine`
							Added E2E tests with Playwright, simulating runs on distributed Node.js
							servers, singular Node.js servers and Cloudflare Worker durable objects.
						`,
					]
				},
				{
					company: "makepurple.com",
					jobTitle: "Website",
					startDate: "09/01/2021",
					endDate: null,
					highlights: [
						oneLine`
							Built with Next.js, NextAuth, Prisma, Nexus, Apollo Server,
							Styled-Components, Twin.Macro, TailwindCSS, Urql, Storybook, PlanetScale,
							Upstash, Cloudinary, Postmark, Pusher, Octokit, Figma, Pnpm workspaces and
							Turborepo.
						`,
						oneLine`
							Authored an internal CSS-in-JS library for emails in React, a rich text
							editor with Slate, heat-maps with Visx, a type-safe GraphQL client for
							Octokit, and more.
						`,
						oneLine`
							Improved accessibility with support for screen-readers and keyboard
							navigation with Radix and Headless UI.
						`,
						oneLine`
							Implemented GraphQL resolvers for: activity feeds, GitHub follows,
							Cloudinary image uploads, Pusher real-time chat, GitHub skill and user
							search, connection suggestions, notifications, nested commenting, and CRUD
							with Nexus + Prisma.
						`
					]
				},
			],
			[
				{
					company: "Toastel",
					jobTitle: "Senior Full Stack Engineer",
					startDate: "01/01/2020",
					endDate: "03/01/2021",
					highlights: [
						oneLine`
							Designed in Figma, and created an atomic design system without using any
							ui-toolkits, while improving accessibility and minimizing client bundle
							size.
						`,
						oneLine`
							Authored an internal charting library with Visx, a data-grid library with
							React-Window, responsive emails with Mjml, animations with Framer-Motion,
							and more.
						`,
						oneLine`
							Created several GraphQL-Nexus plugins to rate-limit fields, validate inputs,
							and prevent malicious queries with complexity and depth limits.
						`,
						oneLine`
							Coded over 300 components and 400 stories on Storybook, with snapshot
							tests.
						`,
						oneLine`
							Achieved 95-100 on all Google Lighthouse metrics (excluding PWA).
						`,
						oneLine`
							Implemented JWTs with refresh-tokens, blacklists and retries with Redis +
							Apollo.
						`,
						oneLine`
							Implemented GraphQL resolvers for: full-text search with Algolia, emails
							with Nodemailer, subscriptions and payouts with Stripe, presigned URL
							uploads with S3, localized timezones with Google Maps, and CRUD with Nexus
							+ Prisma.
						`
					]
				},
				{
					company: "Onfleet",
					jobTitle: "Full Stack Engineer",
					startDate: "01/01/2019",
					endDate: "01/01/2020",
					highlights: [
						oneLine`
							Migrated the AngularJS + ES5 frontend to React, Styled-Components and
							TypeScript with snapshot testing through Jest + Storybook.
						`,
						oneLine`
							Proposed then directed the migration of the CoffeeScript + Restify backend
							monolith to TypeScript, Apollo Server and Serverless-Http that would allow
							for incremental adoption for frontend and mobile teams.
						`,
						oneLine`
							Rewrote both the Stripe billing and the Twilio voice and SMS proxying
							services to support more features, be more declarative and be more
							testable.
						`
					]
				},
				{
					company: "Outward",
					jobTitle: "Senior Software Engineer",
					startDate: "01/01/2018",
					endDate: "01/01/2019",
					highlights: [
						oneLine`
							Implemented all client-side features for a 3D monogramming web-app that
							supports more use-cases and produces higher-fidelity product images than
							Adobe's Scene7 for Williams-Sonoma (built with React, TypeScript, JSS,
								Apollo, GraphQL, Pixi, Babylon).
						`,
						oneLine`
							Mentored Junior Frontend Engineers; worked with project managers in driving
							requirements and timelines; interfaced directly with clients to assist
							integration; and organized and led meetings with QA, graphics and the
							dev-ops teams to coordinate successful releases and milestones.
						`,
						oneLine`
							Created a RESTful service for Bassett Furniture's new consumer site,
							including customer/designer interactions and authentication (built with
							TypeScript + Koa).
						`,
						oneLine`
							Architected new client site with TypeScript, React, Redux Observable and
							JSS.
						`,
						oneLine`
							Authored an internal library to gradually migrate a legacy vanilla ES5 app
							to React, while increasing test coverage from 0 to 60%.
						`,
						oneLine`
							Set-up a CI/CD pipeline using TravisCI, SonarQube, Jest and ESLint.
						`
					]
				},
				{
					company: "Newport Asia",
					jobTitle: "Contract Software Engineer",
					startDate: "06/01/2016",
					endDate: "12/01/2017",
					highlights: []
				},
				{
					company: "Bosera Funds",
					jobTitle: "Intern Software Engineer",
					startDate: "06/01/2015",
					endDate: "06/01/2016",
					highlights: []
				}
			]
		]
	}
};

export const Page: NextPage = () => {
	const pagesRef = useRef<MutableRefObject<HTMLDivElement | null>[]>(
		data.experience.professional.map(() => ({ current: null }))
	);

	return (
		<PageContainer className="gap-8">
			<div className="flex justify-between w-[8.5in]">
				<DownloadButton
					fileName="lee_david_resume.pdf"
					metaData={JSON.stringify(data)}
					targets={pagesRef.current}
				/>
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
