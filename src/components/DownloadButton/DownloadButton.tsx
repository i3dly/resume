import clsx from "clsx";
import { toJpeg } from "html-to-image";
import JsPdf from "jspdf";
import React, { CSSProperties, FC, MutableRefObject, useCallback, useState } from "react";
import { AVATAR_DATA_URL_FALLBACK } from "./AVATAR_FALLBACK";

const LETTER_PAPER_HEIGHT = 11;
const LETTER_PAPER_WIDTH = 8.5;
const METADATA_PADDING = 0.2;

const useToPdf = (
	fileName: string,
	targets: readonly MutableRefObject<HTMLElement | null>[],
	metaData?: string
) => {
	const [loading, setLoading] = useState<boolean>(false);

	const getTargetElement = useCallback((target: MutableRefObject<HTMLElement | null>) => {
		const elem = target.current;

		if (!elem) return null;

		return elem;
	}, []);

	const toPdf = useCallback(async () => {
		setLoading(true);

		const dataUris = await Promise.all(
			targets
				.map((target) => getTargetElement(target))
				.filter((element) => !!element)
				.map(async (element) => {
					if (!element) throw new Error();

					const dataUri = await toJpeg(element, {
						imagePlaceholder: AVATAR_DATA_URL_FALLBACK
					});

					return dataUri;
				})
		);

		const jspdf = new JsPdf({
			orientation: "portrait",
			unit: "in",
			format: [
				LETTER_PAPER_WIDTH,
				LETTER_PAPER_HEIGHT
			]
		});

		const pdfWithPages = dataUris.reduce((pdf, dataUri, i) => {
			return (!!i ? pdf.addPage() : pdf)
				.addImage(
					dataUri,
					"JPEG",
					0,
					0,
					LETTER_PAPER_WIDTH,
					LETTER_PAPER_HEIGHT
				);
		}, jspdf);

		const finalPdf = !!metaData
			? pdfWithPages
				.addPage()
				.setFontSize(8)
				.text(metaData, METADATA_PADDING, METADATA_PADDING, {
					maxWidth: LETTER_PAPER_WIDTH - (2 * METADATA_PADDING)
				})
			: pdfWithPages;

		setLoading(false);

		finalPdf.save(fileName);
	}, [fileName, getTargetElement, metaData, targets]);

	return { loading, toPdf };
};

export interface DownloadButtonProps {
	className?: string;
	fileName: string;
	metaData?: string;
	style?: CSSProperties;
	targets: readonly MutableRefObject<HTMLElement | null>[];
}

export const DownloadButton: FC<DownloadButtonProps> = ({
	className,
	fileName,
	metaData,
	style,
	targets
}) => {
	const { loading, toPdf } = useToPdf(fileName, targets, metaData);

	return (
		<button
			className={clsx(
				"flex items-center justify-content",
				"h-12 px-3",
				"border border-gray-200 dark:border-gray-700/75 rounded-lg",
				"transition-colors ease-in-out duration-200",
				"focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75",
				"cursor-pointer",
				className
			)}
			disabled={loading}
			onClick={async () => {
				await toPdf();
			}}
			style={style}
			type="button"
		>
			{loading ? "Loading..." : "Download Resume"}
		</button>
	);
};
