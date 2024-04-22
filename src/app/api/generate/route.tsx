import { Onedoc } from "@onedoc/client";
import { CSS, compile } from "@onedoc/react-print";
import { InterFont } from "../../../components/InterFont";
import { ResumePage1 } from "../../../components/ResumePage1";
import { ResumePage2 } from "../../../components/ResumePage2";
import { Tailwind } from "../../../components/Tailwind";
import { env } from "../../../env";

export const GET = async (request: Request) => {
	const onedoc = new Onedoc(env.ONEDOC_API_KEY);

	const { link, error } = await onedoc.render({
		html: await compile(
			<Tailwind>
				<InterFont />
				<CSS>{`
				  @page {
					size: a4;
					margin: 0in 0in 0in 0in;
				  }

				  @media print {
					html, body {
						margin: 0;
						border: initial;
						border-radius: initial;
						width: initial;
						min-height: initial;
						box-shadow: initial;
						background: initial;
						page-break-after: always;
					}
				  }
				`}</CSS>
				<ResumePage1 />
				<ResumePage2 />
			</Tailwind>
		),
		title: "Resume: David Lee",
		test: false,
		save: true
	});

	if (error) {
		console.error(error);

		return Response.json({ ok: true });
	}

	return Response.json({ link });
};
