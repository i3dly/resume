import { Onedoc } from "@onedoc/client";
import { CSS, compile } from "@onedoc/react-print";
import { ResumePage1 } from "../../../components/ResumePage1";
import { ResumePage2 } from "../../../components/ResumePage2";
import { Tailwind } from "../../../components/Tailwind";
import { env } from "../../../env";

export const GET = async (request: Request) => {
	if (process.env.NODE_ENV === "production") return Response.json({ ok: true });

	const onedoc = new Onedoc(env.ONEDOC_API_KEY);

	const { link, error } = await onedoc.render({
		html: await compile(
			<Tailwind>
				<CSS>{`
					@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
					@page {
						size: letter;
						margin: 0in;
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
