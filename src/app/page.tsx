import type { NextPage } from "next";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { PageContainer } from "../components/PageContainer";
import { ResumePage1 } from "../components/ResumePage1";
import { ResumePage2 } from "../components/ResumePage2";

export const Page: NextPage = () => {
	return (
		<PageContainer className="gap-8">
			<DarkModeSwitch />
			<ResumePage1 />
			<ResumePage2 />
		</PageContainer>
	);
};

export default Page;
