import { Document, Packer, Paragraph } from "docx";
import { saveAs } from "file-saver";
import { useCallback, useMemo, useState } from "react";
import { data } from "../resume-data";

export const useDownloadDocx = () => {
    const doc = useMemo(() => {
        return new Document({
            sections: [
                {
                    children: [
                        new Paragraph({ text: `See the original resume at: ${data.link}` }),
                        new Paragraph({ text: data.name }),
                        new Paragraph({ text: data.jobTitle }),
                        new Paragraph({ text: "Sites" }),
                        new Paragraph({
                            text: `email: ${data.sites.email}`,
                            bullet: { level: 0 }
                        }),
                        new Paragraph({
                            text: `linkedin: ${data.sites.linkedin}`,
                            bullet: { level: 0 }
                        }),
                        new Paragraph({
                            text: `github: ${data.sites.github}`,
                            bullet: { level: 0 }
                        }),
                        new Paragraph({
                            text: `blog: ${data.sites.blog}`,
                            bullet: { level: 0 }
                        }),
                        new Paragraph({ text: data.summary }),
                        new Paragraph({ text: "Skills" }),
                        new Paragraph({
                            text: "Languages",
                            bullet: { level: 0 }
                        }),
                        new Paragraph({
                            text: data.skills.languages.join(", "),
                            bullet: { level: 1 }
                        }),
                        new Paragraph({
                            text: "Frameworks",
                            bullet: { level: 0 }
                        }),
                        new Paragraph({
                            text: data.skills.frameworks.join(", "),
                            bullet: { level: 1 }
                        }),
                        new Paragraph({
                            text: "Frontend",
                            bullet: { level: 0 }
                        }),
                        new Paragraph({
                            text: data.skills.frontend.join(", "),
                            bullet: { level: 1 }
                        }),
                        new Paragraph({
                            text: "Backend",
                            bullet: { level: 0 }
                        }),
                        new Paragraph({
                            text: data.skills.backend.join(", "),
                            bullet: { level: 1 }
                        }),
                        new Paragraph({
                            text: "Tooling & Services",
                            bullet: { level: 0 }
                        }),
                        new Paragraph({
                            text: data.skills.tooling.join(", "),
                            bullet: { level: 1 }
                        }),
                        new Paragraph({
                            text: "Concepts",
                            bullet: { level: 0 }
                        }),
                        new Paragraph({
                            text: data.skills.concepts.join(", "),
                            bullet: { level: 1 }
                        }),
                        new Paragraph({ text: "Education" }),
                        new Paragraph({
                            text: `Degree: ${data.education.degree}`,
                            bullet: { level: 0 }
                        }),
                        new Paragraph({
                            text: `College: ${data.education.college}`,
                            bullet: { level: 0 }
                        }),
                        new Paragraph({
                            text: `Graduation Date: ${data.education.endDate}`,
                            bullet: { level: 0 }
                        }),
                        new Paragraph({
                            text: "Professional Experience"
                        }),
                        ...data.experience.professional
                            .reduce((acc, experiences) => [...acc, ...experiences])
                            .reduce((paragraphs, experience) => [
                                ...paragraphs,
                                new Paragraph({
                                    text: `Company: ${experience.company}`,
                                    bullet: { level: 0 }
                                }),
                                new Paragraph({
                                    text: `Title: ${experience.jobTitle}`,
                                    bullet: { level: 1 }
                                }),
                                new Paragraph({
                                    text: `Start Date: ${experience.startDate}`,
                                    bullet: { level: 1 }
                                }),
                                new Paragraph({
                                    text: `End Date: ${experience.endDate ?? "Present"}`,
                                    bullet: { level: 1 }
                                }),
                                ...(experience.highlights.length
                                    ? [
                                        new Paragraph({
                                            text: "Highlights",
                                            bullet: { level: 1 }
                                        })
                                    ]
                                    : []),
                                ...experience.highlights.map((highlight) => new Paragraph({
                                    text: highlight,
                                    bullet: { level: 2 }
                                }))
                            ], [] as readonly Paragraph[])
                    ]
                }
            ]
        });
    }, []);

    const [loading, setLoading] = useState<boolean>(false);

    const download = useCallback(async () => {
        setLoading(true);

        const blob =  await Packer.toBlob(doc);

        saveAs(blob, `${data.name.split(/\s+/g).join("_")}.docx`);

        setLoading(false);
    }, [doc])

    return [loading, download] as [boolean, typeof download];
};
