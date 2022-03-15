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
import { NextPage } from "next";
import React, { useRef } from "react";
import {
	FaCalendarAlt,
	FaCode,
	FaEnvelope,
	FaGithub,
	FaLinkedin
} from "react-icons/fa";

export const Page: NextPage = () => {
	const page1Ref = useRef<HTMLDivElement | null>(null);
	const page2Ref = useRef<HTMLDivElement | null>(null);
	
	return (
		<PageContainer className="gap-8">
			<div className="flex justify-between w-[8.5in]">
				<DownloadButton fileName="lee_david_resume.pdf" targets={[page1Ref, page2Ref]} />
				<DarkModeSwitch />
			</div>
			<LetterPage
				ref={page1Ref}
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
							<h1 className="text-3xl leading-none font-medium">David Lee</h1>
							<h2 className="text-gray-600 dark:text-gray-300/80">Senior Software Engineer</h2>
							<div
								className={clsx(
									"grid grid-cols-2 gap-x-4 gap-y-1",
									"mt-2",
									"text-xs"
								)}
							>
								<div>
									<SocialLink
										href="mailto:jobs.lee.david.cs@gmail.com"
										icon={<FaEnvelope className="h-3.5 w-3.5" />}
									>
										jobs.lee.david.cs@gmail.com
									</SocialLink>
								</div>
								<div>
									<SocialLink
										href="https://linkedin.com/in/leedavidcs"
										icon={<FaLinkedin className="h-3.5 w-3.5" />}
									>
										linkedin.com/in/leedavidcs
									</SocialLink>
								</div>
								<div>
									<SocialLink
										href="https://github.com/leedavidcs"
										icon={<FaGithub className="h-3.5 w-3.5" />}
									>
										github.com/leedavidcs
									</SocialLink>
								</div>
								<div>
									<SocialLink
										href="https://makepurple.com/leedavidcs"
										icon={<FaCode className="h-3.5 w-3.5" />}
									>
										makepurple.com/blog
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
							<TimelineItem
								icon={<FaCalendarAlt className="h-3 w-3" height={12} width={12} />}
								startDate="04/12/2021"
								title="Openbase"
								subTitle="Senior Frontend Engineer"
							>
								<BulletedList>
									<BulletedListItem>
										Proposed then executed a gradual migration strategy to port
										the frontend from a SPA-Parcel app to Next.js, Apollo,
										Styled-Components, Storybook and Codegen.
									</BulletedListItem>
									<BulletedListItem>
										Improved all Lighthouse metrics from 20 to 90, and coverage
										from 0% to 70%.
									</BulletedListItem>
									<BulletedListItem>
										Architected and built dev.page with the Next.js, Apollo,
										Styled-Components, Storybook, Codegen and Tailwind CSS.
									</BulletedListItem>
									<BulletedListItem>
										Integrated Algolia onto the frontend, then authored and
										published an article about it onto Algolia&apos;s
										engineering blog.
									</BulletedListItem>
									<BulletedListItem>
										Implemented pages for packages, categories, user-profiles,
										homepage, search and more.
									</BulletedListItem>
									<BulletedListItem>
										Created a service with Serverless Framework to handle
										redirects from old URLs for SEO.
									</BulletedListItem>
									<BulletedListItem>
										Participated in product feature ideation to drive user
										aquisition and retention.
									</BulletedListItem>
									<BulletedListItem>
										Mentored developers in Next.js, Apollo Client, Styled-Components,
										TypeScript and more.
									</BulletedListItem>
								</BulletedList>
							</TimelineItem>
							<TimelineItem
								icon={<FaCalendarAlt className="h-3 w-3" height={12} width={12} />}
								startDate="09/01/2021"
								title="MakePurple"
								subTitle="Side Project (owner)"
							>
								<BulletedList>
									<BulletedListItem>
										Built with Next.js, NextAuth, Prisma, Nexus, Apollo Server,
										Urql, Styled-Components, TailwindCSS, Twin Macro, PlanetScale,
										Upstash, Pusher, Octokit, Cloudinary and Figma.
									</BulletedListItem>
									<BulletedListItem>
										Ported the yarn monolith project to a monorepo with pnpm
										workspaces and TurboRepo.
									</BulletedListItem>
									<BulletedListItem>
										Authored an internal CSS-in-JS library for emails in React, a
										rich text editor with Slate, a type-safe GraphQL client for
										Octokit, authorization edge-functions, and more.
									</BulletedListItem>
									<BulletedListItem>
										Improved accessibility with support for screen-readers and
										keyboard navigation with Radix and Headless UI.
									</BulletedListItem>
								</BulletedList>
							</TimelineItem>
							<TimelineItem
								endDate="03/01/2021"
								icon={<FaCalendarAlt className="h-3 w-3" height={12} width={12} />}
								startDate="01/01/2020"
								title="Toastel"
								subTitle="Senior Full Stack Engineer"
							>
								<BulletedList>
									<BulletedListItem>
										Designed in Figma, and created an atomic design system
										without using any ui-toolkits or CSS framework, while
										improving accessibility and minimizing client bundle size.
									</BulletedListItem>
									<BulletedListItem>
										Authored an internal charting library with Visx, a data-grid
										library with React-Window, responsive emails with Mjml-React,
										animations with Framer-Motion, and more.
									</BulletedListItem>
									<BulletedListItem>
										Coded over 300 components and 400 stories on Storybook, with
										Jest snapshot testing.
									</BulletedListItem>
									<BulletedListItem>
										Achieved 95-100 on all Google Lighthouse metrics (excluding
										PWA).
									</BulletedListItem>
									<BulletedListItem>
										Implemented JWT auth with refresh-tokens, blacklisting and
										retries using Redis + Apollo.
									</BulletedListItem>
									<BulletedListItem>
										Implemented all GraphQL resolvers for: full-text search with
										Algolia, emails with Nodemailer, subscriptions and payouts
										with Stripe, presigned URL image uploads with AWS S3,
										business hour timezones with Google Maps, and CRUD with
										Nexus and Prisma.
									</BulletedListItem>
								</BulletedList>
							</TimelineItem>
						</Timeline>
					</div>
				</div>
				<SideBar
					className={clsx(
						"flex-shrink-0 flex flex-col gap-4",
						"w-[31%] p-4"
					)}
				>
					<div>
						<SideBarHeader>Summary</SideBarHeader>
						<div className="flex flex-col gap-2 text-xs leading-snug mt-3">
							<p>
								Full Stack Engineer with extensive experience in
								start-ups, serving various key roles in software
								development.
							</p>
							<p>
								Advanced expertise in TypeScript and Node.js with
								React and GraphQL.
							</p>
							<p>
								Demonstrated skill in architecting greenfield
								applications, researching emerging technologies,
								improving the developer experience, improving site SEO
								and collaborating in dynamic teams.
							</p>
						</div>
					</div>
					<SideBarDivider />
					<div>
						<SideBarHeader>Skills</SideBarHeader>
						<div className="flex flex-col gap-3">
							<div className="text-xs leading-snug">
								<SideBarSubHeader>Languages</SideBarSubHeader>
								<p className="mt-2">
									TypeScript, JavaScript
								</p>
							</div>
							<div className="text-xs leading-snug">
								<SideBarSubHeader>Frameworks</SideBarSubHeader>
								<p className="mt-2">
									Next.js, Remix, Gatsby
								</p>
							</div>
							<div className="text-xs leading-snug">
								<SideBarSubHeader>Frontend</SideBarSubHeader>
								<p className="mt-2">
									HTML5, CSS3, React, Apollo Client, Urql,
									Styled-Components, Tailwind CSS, Visx, D3,
									Storybook, Framer-Motion, Redux, React-Three-Fiber,
									React-Window, Slate
								</p>
							</div>
							<div className="text-xs leading-snug">
								<SideBarSubHeader>Backend</SideBarSubHeader>
								<p className="mt-2">
									Node.js, GraphQL, Apollo Server, Redis, Postgres,
									MongoDB, Socket.io, Prisma, Nexus, Express,
									Serverless, DataLoader
								</p>
							</div>
							<div className="text-xs leading-snug">
								<SideBarSubHeader>Tooling + Misc.</SideBarSubHeader>
								<p className="mt-2">
									Linux, Git, Github Actions, Turborepo, Lerna, pnpm
									workspaces, Docker, Jest, Cypress, Webpack, Prettier,
									ESLint, Jira, Confluence, Notion, Google Analytics,
									Amplitude, GraphQL-Codegen, Figma, Algolia, Stripe,
									Twilio, Sentry, Postmark, Cloudinary, Vercel, Netlify,
									Planetscale, Upstash, Cloudflare, RDS, Lambda, S3,
									CloudFront, CloudWatch
								</p>
							</div>
						</div>
					</div>
					<SideBarDivider />
					<div>
						<SideBarHeader>Education</SideBarHeader>
						<SideBarSubHeader>BS in Computer Science</SideBarSubHeader>
						<div className="text-xs mt-2">University of California, San Diego</div>
						<div className="flex items-center gap-2 mt-1 text-xs">
							<FaCalendarAlt />
							<span>Graduated: June 2017</span>
						</div>
					</div>
				</SideBar>
			</LetterPage>
			<LetterPage
				ref={page2Ref}
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
						<TimelineItem
							endDate="01/01/2020"
							icon={<FaCalendarAlt className="h-3 w-3" height={12} width={12} />}
							startDate="01/01/2019"
							title="Onfleet"
							subTitle="Full Stack Engineer"
						>
							<BulletedList>
								<BulletedListItem>
									Migrated the ES5 + AngularJS frontend to TypeScript, React and
									Styled-Components.
								</BulletedListItem>
								<BulletedListItem>
									Proposed then directed the migration of the CoffeeScript
									+ Restify backend monolith to TypeScript, Apollo, Serverless-Http +
									GraphQL with increases to code-coverage in Jest.
								</BulletedListItem>
								<BulletedListItem>
									Rewrote both the Stripe billing and the Twilio voice and SMS
									proxying services to support more features, be more declarative
									and be more testable.
								</BulletedListItem>
							</BulletedList>
						</TimelineItem>
						<TimelineItem
							endDate="01/01/2019"
							icon={<FaCalendarAlt className="h-3 w-3" height={12} width={12} />}
							startDate="01/01/2018"
							title="Outward"
							subTitle="Software Engineer"
						>
							<BulletedList>
								<BulletedListItem>
									Implemented all client-side features for a 3D monogramming web-app
									that supports more use-cases and produces higher-fidelity product
									images than Adobe&apos;s Scene7 for Williams-Sonoma (built with
									React, TypeScript, JSS, Apollo, GraphQL, Pixi, Babylon).
								</BulletedListItem>
								<BulletedListItem>
									Mentored Junior Frontend Engineers; worked with project managers
									in driving requirements and timelines; talked to clients directly
									to assist integration; and organized and led meetings with QA,
									graphics and the dev-ops teams to coordinate successful releases
									and milestones.
								</BulletedListItem>
								<BulletedListItem>
									Created a RESTful service for Bassett Furniture&apos;s new
									consumer site, including the customer/designer interactions and
									authentication (built with TypeScript + Koa).
								</BulletedListItem>
							</BulletedList>
						</TimelineItem>
					</Timeline>
				</div>
				<SideBar
					className={clsx(
						"flex-shrink-0 flex flex-col gap-4",
						"w-[31%] p-4"
					)}
				/>
			</LetterPage>
		</PageContainer>
	);
};

export default Page;
