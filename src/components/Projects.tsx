import Image from "next/image";
import { ButtonLink } from "./ButtonLink";
import { Section } from "./Section";

export function Projects() {
    const projects = [
        {
            image: "/hero-image.png",
            city: "Serra Grande, Paraíba",
            title: "Project Title",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            link: "/projetos",
        },
        {
            image: "/hero-image.png",
            city: "Serra Grande, Paraíba",
            title: "Project Title",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            link: "/projetos",
        },
        {
            image: "/hero-image.png",
            city: "Serra Grande, Paraíba",
            title: "Project Title",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            link: "/projetos",
        },
    ];

    return (
        <Section.Container>
            <div className="space-y-8">
                <Section.Point>Projetos</Section.Point>
                <Section.Title>
                    Nossa Obra-Prima Estrutural
                </Section.Title>
                <ButtonLink href="" variant>
                    Saiba Mais
                </ButtonLink>
            </div>

            <div className="space-y-8">
                {projects.map(
                    (
                        {
                            image,
                            city,
                            title,
                            description,
                            link,
                        },
                        id
                    ) => {
                        return (
                            <div
                                key={id}
                                className="space-y-4"
                            >
                                <Image
                                    src={image}
                                    alt="imagem do hero"
                                    width={100}
                                    height={100}
                                    className="w-full"
                                />
                                <Section.Point>
                                    {city}
                                </Section.Point>
                                <Section.Title>
                                    {title}
                                </Section.Title>
                                <Section.SubTitle>
                                    {description}
                                </Section.SubTitle>
                                <ButtonLink href={link}>
                                    Ver Projeto
                                </ButtonLink>
                            </div>
                        );
                    }
                )}
            </div>
        </Section.Container>
    );
}
