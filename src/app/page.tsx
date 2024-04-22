import { compile } from "@onedoc/react-print";
import type { FC } from "react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { InterFont } from "../components/InterFont";
import { PageContainer } from "../components/PageContainer";
import { ResumePage1 } from "../components/ResumePage1";
import { ResumePage2 } from "../components/ResumePage2";

export const Page: FC = async () => {
	const compiled = await compile(
		<>
			<InterFont />
			<ResumePage1 />
			<ResumePage2 />
		</>
	);

	return (
		<PageContainer className="gap-8">
			<DarkModeSwitch />
			<div dangerouslySetInnerHTML={{ __html: compiled }} />
		</PageContainer>
	);
};

export default Page;
