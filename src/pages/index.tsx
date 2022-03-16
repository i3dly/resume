import {
	Avatar,
	BulletedList,
	BulletedListItem,
	DarkModeSwitch,
	DownloadButton,
	LetterPage,
	PageContainer,
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
	name: "David Lee",
	jobTitle: "Senior Software Engineer",
	sites: {
		email: "jobs.lee.david.cs@gmail.com",
		linkedin: "https://linkedin.com/in/leedavidcs",
		github: "https://github.com/leedavidcs",
		blog: "https://makepurple.com/blog",
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
			technologies, improving the developer experience, improving site SEO and collaborating
			in dynamic teams.
		`}
	`,
	skills: {
		languages: ["TypeScript", "JavaScript"],
		frameworks: ["Next.js", "Remix", "Gatsby"],
		frontend: [
			"HTML5",
			"CSS3",
			"React",
			"Apollo Client",
			"Urql",
			"Styled-Components",
			"Tailwind CSS",
			"Visx",
			"D3",
			"Storybook",
			"Framer Motion",
			"Redux",
			"React-Three-Fiber",
			"React-Window",
			"Slate",
			"Radix",
			"Headless UI",
			"Reakit"
		],
		backend: [
			"Node.js",
			"GraphQL",
			"Apollo Server",
			"Redis",
			"Postgres",
			"MongoDB",
			"Socket.io",
			"Prisma",
			"Nexus",
			"Express",
			"Serverless",
			"DataLoader"
		],
		etc: [
			"Linux",
			"Git",
			"GitHub Actions",
			"Turborepo",
			"Lerna",
			"pnpm workspaces",
			"Docker",
			"Jest",
			"Cypress",
			"Webpack",
			"Prettier",
			"ESLint",
			"Jira",
			"Confluence",
			"Notion",
			"Google Analytics",
			"Amplitude",
			"GraphQL-Codegen",
			"Figma",
			"Algolia",
			"Stripe",
			"Twilio",
			"Sentry",
			"Postmark",
			"Cloudinary",
			"Vercel",
			"Netlify",
			"PlanetScale",
			"Upstash",
			"Octokit",
			"Cloudflare",
			"Lambda",
			"CloudFront",
			"CloudWatch",
			"RDS",
			"S3"
		]
	},
	education: {
		degree: "BS in Computer Science",
		college: "University of California, San Diego",
		endDate: "06/01/2017"
	},
	experience: [
		[
			{
				company: "Openbase",
				jobTitle: "Senior Frontend Engineer",
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
						Architected and built dev.page with the Next.js, Apollo, Styled-Components,
						Storybook, Codegen and Tailwind CSS.
					`,
					oneLine`
						Integrated Algolia onto the frontend, then authored and published an
						article about it onto Algolia's engineering blog.
					`,
					oneLine`
						Implemented pages for packages, categories, user-profiles, search and more.
					`,
					oneLine`
						Created a service with Serverless Framework to handle redirects from old
						URLs for SEO with logging on CloudWatch.
					`,
					oneLine`
						Participated in product feature ideation to drive user aquisition and
						retention.
					`,
					oneLine`
						Mentored developers in Next.js, Apollo Client, Styled-Components,
						TypeScript and more.
					`
				]
			},
			{
				company: "MakePurple",
				jobTitle: "Side Project (owner)",
				startDate: "09/01/2021",
				endDate: null,
				highlights: [
					oneLine`
						Built with Next.js, NextAuth, Prisma, Nexus, Apollo Server, Urql,
						Styled-Components, TailwindCSS, Twin Macro, PlanetScale, Upstash, Pusher,
						Octokit, Cloudinary and Figma.
					`,
					oneLine`
						Ported the yarn monolith to a monorepo with pnpm workspaces and Turborepo.
					`,
					oneLine`
						Authored an internal CSS-in-JS library for emails in React, a rich text
						editor with Slate, heat-maps with Visx, a type-safe GraphQL client for
						Octokit, and more.
					`,
					oneLine`
						Improved accessibility with support for screen-readers and keyboard
						navigation with Radix and Headless UI.
					`
				]
			},
			{
				company: "Toastel",
				jobTitle: "Senior Full Stack Engineer",
				startDate: "01/01/2020",
				endDate: "03/01/2021",
				highlights: [
					oneLine`
						Designed in Figma, and created an atomic design system without using any
						ui-toolkits or CSS framework, while improving accessibility and minimizing
						client bundle size.
					`,
					oneLine`
						Authored an internal charting library with Visx, a data-grid library with
						React-Window, responsive emails with Mjml, animations with Framer-Motion,
						and more.
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
						with Nodemailer, subscriptions and payouts with Stripe, presigned URL image
						uploads with AWS S3, business hour timezones with Google Maps, and CRUD
						with Nexus and Prisma.
					`
				]
			}
		],
		[
			{
				company: "Onfleet",
				jobTitle: "Full Stack Engineer",
				startDate: "01/01/2019",
				endDate: "01/01/2020",
				highlights: [
					oneLine`
						Migrated the ES5 + AngularJS frontend to TypeScript, React and
						Styled-Components, with snapshot testing through Jest + Storybook.
					`,
					oneLine`
						Proposed then directed the migration of the CoffeeScript + Restify backend
						monolith to TypeScript, Apollo, Serverless-Http + GraphQL that would allow
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
				jobTitle: "Software Engineer",
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
						Architected Bassett Furniture's new consumer site with TypeScript, React,
						Redux, Redux Observable, JSS and BabylonJS.
					`,
					oneLine`
						Authored an internal library to gradually migrate a legacy vanilla ES5 app
						to React, while increasing test coverage from 0 to 60%.
					`,
					oneLine`
						Built a sectional-sofa builder for Bassett Furniture's website for
						customers to build their custom sofa and checkout to cart.
					`
				]
			},
			{
				company: "Newport Asia",
				jobTitle: "Contract Software Engineer",
				startDate: "06/01/2016",
				endDate: "12/01/2017",
				highlights: [
					oneLine`
						Build data-grids, dashboards and internal tools for the normalization,
						aggregation, and visualization of financial data using 3rd-party market
						data APIs. 
					`,
					oneLine`
						Interfaced with non-technical financial analysts to gather requirements,
						translate those into technical specifications and build financial tools.
					`
				]
			},
			{
				company: "Bosera Asset Management",
				jobTitle: "Intern Software Engineer",
				startDate: "06/01/2015",
				endDate: "06/01/2016",
				highlights: [
					oneLine`
						Created a form where clients can send support requests or questions,
						and employees can receive, sort and answer them from an internal portal.
					`,
					oneLine`
						Converted non-technical requirements into wireframes and actionable tasks.
					`,
					oneLine`
						Built several pages, forms and data visualization modules for the company's
						revamped website.
					`
				]
			}
		]
	]
};

export const Page: NextPage = () => {
	const pagesRef = useRef<MutableRefObject<HTMLDivElement | null>[]>(
		data.experience.map(() => ({ current: null }))
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
							<h1 className="text-3xl leading-none font-medium">{data.name}</h1>
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
							{data.experience[0].map((experience, i) => (
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
								<SideBarSubHeader>Tooling + Misc.</SideBarSubHeader>
								<p className="mt-2">
									{data.skills.etc.join(", ")}
								</p>
							</div>
						</div>
					</div>
					<SideBarDivider />
					<div>
						<SideBarHeader>Education</SideBarHeader>
						<SideBarSubHeader>{data.education.degree}</SideBarSubHeader>
						<div className="text-xs mt-2">{data.education.college}</div>
						<div className="flex items-center gap-2 mt-1 text-xs">
							<FaCalendarAlt />
							<span>Graduated: {dayjs(data.education.endDate).format("MMMM YYYY")}</span>
						</div>
					</div>
				</SideBar>
			</LetterPage>
			{data.experience.slice(1).map((experiences, i) => (
				<LetterPage
					key={i}
					ref={pagesRef.current[i + 1]}
					className={clsx(
						"flex flex-row-reverse items-stretch",
						"shadow-2xl dark:shadow-indigo-700/40"
					)}
				>
					<div className="flex-grow flex flex-col items-stretch gap-4 p-4">
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
					<SideBar
						className={clsx(
							"flex-shrink-0 flex flex-col gap-4",
							"w-1/3 p-4"
						)}
					/>
				</LetterPage>
			))}
		</PageContainer>
	);
};

export default Page;
