import { CSS, compile } from "@onedoc/react-print";
import type { FC } from "react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { PageContainer } from "../components/PageContainer";
import { ResumePage1 } from "../components/ResumePage1";
import { ResumePage2 } from "../components/ResumePage2";
import { DownloadButton } from "../components/DownloadButton";

const Page: FC = async () => {
	const compiled = await compile(
		<>
			<CSS>{`
				@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
				@page {
					size: letter;
					margin: 0in;
				}
			`}</CSS>
			<ResumePage1 />
			<ResumePage2 />
		</>
	);

	return (
		<PageContainer>
			<div className="flex items-center gap-4">
				<DarkModeSwitch />
				<DownloadButton />
			</div>
			<div className="mt-4" dangerouslySetInnerHTML={{ __html: compiled }} />
		</PageContainer>
	);
};

export default Page;
