import { Section } from "./Section";

export function ServiceCard({
    icon,
    title,
    description,
}: {
    icon: string;
    title: string;
    description: string;
}) {
    return (
        <div className="bg-[#D9D9D9] p-8 space-y-4 rounded w-full h-full">
            <h2 className="text-4xl">{icon}</h2>
            <Section.Title variant="lg">
                {title}
            </Section.Title>
            <Section.SubTitle variant="sm">
                {description}
            </Section.SubTitle>
        </div>
    );
}
