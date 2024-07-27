import { oneLine, stripIndents } from "common-tags";

export type ProfessionalExperience = {
	company: string;
	jobTitle: string;
	startDate: string;
	info?: string;
	endDate: string | null;
	highlights: readonly string[];
};

export type ResumeData = {
	link: string;
	name: string;
	jobTitle: string;
	sites: {
		email: string;
		linkedin: string;
		github: string;
		blog: string;
	};
	summary: string;
	skills: {
		languages: readonly string[];
		frameworks: readonly string[];
		frontend: readonly string[];
		backend: readonly string[];
		tooling: readonly string[];
		concepts: readonly string[];
	};
	education: {
		degree: string;
		college: string;
		endDate: string;
	};
	experience: {
		professional: readonly ProfessionalExperience[][];
	};
};

export const data: ResumeData = {
	link: "https://resume.leedavidcs.dev",
	name: "David Lee",
	jobTitle: "Staff Software Engineer / Engineering Lead",
	sites: {
		email: "jobs.lee.david.cs@gmail.com",
		linkedin: "https://linkedin.com/in/leedavidcs",
		github: "https://github.com/leedavidcs",
		blog: "https://makepurple.com/leedavidcs"
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
		${oneLine`Enjoyer of React + Cloudflare Workers. 🚀`}
	`,
	skills: {
		languages: ["TypeScript", "JavaScript"],
		frameworks: ["Next.js", "Remix", "Nest.js"],
		frontend: [
			"HTML5",
			"CSS3",
			"React",
			"Urql",
			"Apollo Client",
			"Tailwind CSS",
			"Styled-Components",
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
			"Serverless",
			"Cloudflare Workers",
			"D1",
			"Postgres",
			"MongoDB",
			"Drizzle",
			"Prisma",
			"Redis",
			"GraphQL",
			"Apollo Server",
			"Nexus",
			"Hono",
			"Express",
			"Socket.io",
			"tRPC",
			"Lucia",
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
			"GraphQL-Codegen",
			"GitHub Actions",
			"AWS",
			"Cloudflare",
			"Vercel",
			"Netlify",
			"Pulumi",
			"CDKTF",
			"Terraform",
			"Turborepo",
			"Docker",
			"Amplitude",
			"Google Analytics",
			"Algolia",
			"Sentry",
			"Notion",
			"Segment",
			"Upstash",
			"Postmark",
			"Cloudinary",
			"Changesets",
			"Playwright",
			"Cypress",
			"Jest",
			"Octokit",
			"Stellate",
			"Stripe",
			"Twilio",
			"Chromatic"
		],
		concepts: [
			"SEO",
			"A11y",
			"I18n",
			"SSR",
			"CSR",
			"ISR",
			"SSG",
			"PPR",
			"Atomic Design",
			"Image Optimization",
			"JWT",
			"Authorization",
			"Lighthouse",
			"Code-splitting",
			"Lazy Loading",
			"PubSub",
			"DB Normalization",
			"DB Sharding",
			"Caching",
			"GraphQL APQ",
			"N+1",
			"Rate Limiting",
			"IP Blacklisting",
			"CRDTs",
			"Windowing",
			"Concurrency",
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
					company: "KarmaSuite",
					jobTitle: "Staff Engineer / Engineering Lead",
					startDate: "03/27/2023",
					endDate: null,
					highlights: [
						oneLine`
							Architected and built the bulk of the initial KarmaSuite application as
							the 1st engineer (using Next.js, Turborepo, Tailwind CSS, tRPC, prisma,
							and Storybook), including an atomic design system with Radix UI.
						`,
						oneLine`
							Unified and integrated 3rd party accounting APIs (e.g. QuickBooks, NetSuite,
							etc.) to ETL pipelines so that data can be written to and from KarmaSuite.
						`,
						oneLine`
							Denormalized database tables to support more performant bulk reads and
							writes of thousands of data rows in crons and long-lived background tasks.
						`,
						oneLine`
							Invented a highly performant algorithm to allocate tens of thousands
							of expenses to restricted funding sources that minimizes wasted dollars
							for non-profits using partitioning, set theory and hot-swappable heuristics
							for an A* algorithm.
						`,
						oneLine`
							Created and reviewed numerous PRDs, RFCs and TADs for the engineering org.
						`
					]
				},
				{
					company: "@pluv/io",
					jobTitle: "Open Source (npm)",
					startDate: "08/01/2022",
					endDate: null,
					highlights: [
						oneLine`
							Built real-time, typesafe packages for multiple runtimes (Node.js and
							Cloudflare Workers) and frontend frameworks (e.g. react), supporting
							authentication, rooms, custom events, awareness + presence and CRDT
							storage (with yjs and loro-crdt).
						`,
						oneLine`
							Configured git and npm management with Commitizen, Changeset, Renovate,
							Kodiak and GitHub Actions.
						`,
						oneLine`
							Added E2E tests with Playwright, simulating runs on singular and
							distributed Node.js servers and Cloudflare Worker durable objects.
						`,
						oneLine`
							Currently building an automated multi-project deployment PaaS as a
							GitHub app using Next.js, CDKTF/Terraform, AWS (ECR, Lambda), Cloudflare
							(Pages, Workers, D1, Durable Objects), and QStash.
						`,
						oneLine`
							Migrated both doc and PaaS sites from Next.js pages directory to the
							app router.
						`,
					]
				},
				{
					company: "Openbase",
					info: "shut-down",
					jobTitle: "Staff Frontend Engineer",
					startDate: "04/01/2021",
					endDate: "02/17/2023",
					highlights: [
						oneLine`
							Proposed then executed a gradual migration strategy to port the frontend
							from a SPA-Parcel app to Next.js, Apollo, Styled-Components, Storybook and
							Codegen.
						`,
						oneLine`
							Improved web vitals, a11y and SEO to boost Lighthouse scores from <20 to >90.
						`,
						oneLine`
							Architected the frontend application and implemented many features with
							Next.js, Apollo, Styled-Components, Storybook, Codegen and Tailwind CSS.
						`,
						oneLine`
							Created an Algolia-Apollo interoperability module to power Openbase's search,
							that populated @apollo/client's normalized cache, compatible with Next.js SSR.
						`,
						oneLine`
							Authored an a/b + split-testing framework that integrated with Google
							Analytics and Amplitude that segmented users by percentage or special
							conditions.
						`,
						oneLine`
							Created serverless functions to reroute traffic from old sites and
							generate custom README badges with metrics from Openbase for package
							maintainers.
						`,
						oneLine`
							Significantly improved complex data-grid performances through windowing
							and minimizing re-renders via memoization and careful opt-outs of state
							updates.
						`
					]
				}
			],
			[
				{
					company: "MakePurple",
					jobTitle: "Website Project",
					startDate: "09/01/2021",
					endDate: "04/12/2022",
					highlights: [
						oneLine`
							Built with Next.js, NextAuth, Prisma, Nexus, Apollo Server, TailwindCSS,
							Urql, Storybook, PlanetScale, Upstash, Octokit, Pnpm workspaces and Turborepo.
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
							Implemented GraphQL for: activity feeds, GitHub operations,
							file uploads, friend suggestions, real-time chat, notifications,
							and comments with Nexus + Prisma.
						`
					]
				},
				{
					company: "Toastel",
					info: "shut-down",
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
							Implemented GraphQL for: full-text search with Algolia, emails
							with Nodemailer, subscriptions and payouts with Stripe, presigned URL
							uploads with S3, localized timezones with Google Maps, and CRUD with Nexus
							+ Prisma.
						`
					]
				},
				{
					company: "Onfleet",
					jobTitle: "Senior Full Stack Engineer",
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
					info: "acquired by Williams Sonoma",
					jobTitle: "Senior Software Engineer",
					startDate: "01/01/2018",
					endDate: "01/01/2019",
					highlights: [
						oneLine`
							Implemented a monogramming app that used WebGL to enable customers to
							apply custom texts and images as textures over 3d meshes using React,
							TypeScript, JSS, Apollo, GraphQL, Pixi.js and Babylon.js.
						`,
						oneLine`
							Mentored junior engineers; drove requirements and timelines with managers;
							interfaced with clients to guide integration; and facilitated meetings with
							QA, graphics and the infra teams to coordinate successful releases and
							milestones.
						`,
						oneLine`
							Built a REST api with authentication (with Koa.js, Mongoose and Passport.js)
							to power Bassett Furniture's new store site (React, Redux Observable and JSS).
						`,
						oneLine`
							Authored a library to bridge a legacy ES5 app to React, and set-up a
							CI/CD pipeline using TravisCI, SonarQube, Jest and ESLint.
						`
					]
				},
				{
					company: "Bosera Funds & Newport Asia",
					jobTitle: "Software Engineer",
					startDate: "06/01/2015",
					endDate: "12/01/2017",
					highlights: []
				}
			]
		]
	}
};
