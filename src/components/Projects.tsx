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
        <Section.Container
            className="space-y-16"
            id="projetos"
        >
            <div className="space-y-8 md:space-y-0 md:flex md:justify-between md:items-end-safe">
                <div>
                    <Section.Point>Projetos</Section.Point>
                    <Section.Title fullWidth>
                        Nossa Obra-Prima Estrutural
                    </Section.Title>
                </div>
                <ButtonLink href="" variant>
                    Saiba Mais
                </ButtonLink>
            </div>

            <div className="space-y-12 md:space-y-12">
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
                                className={`space-y-8 md:flex md:justify-between md:gap-20 ${
                                    id === 1 &&
                                    "md:flex-row-reverse"
                                }`}
                            >
                                <div className="md:w-1/2">
                                    <Image
                                        src={image}
                                        alt="Imagem do Projeto"
                                        width={100}
                                        height={100}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <Section.TitleContainer
                                    className={
                                        id === 1
                                            ? "md:flex md:flex-col md:gap-4 md:items-end"
                                            : ""
                                    }
                                >
                                    <div
                                        className={
                                            id === 1
                                                ? "md:text-right"
                                                : ""
                                        }
                                    >
                                        <Section.Point>
                                            {city}
                                        </Section.Point>
                                        <Section.Title>
                                            {title}
                                        </Section.Title>
                                    </div>
                                    <Section.SubTitle>
                                        {description}
                                    </Section.SubTitle>
                                    <div
                                        className={
                                            id === 1
                                                ? "md:mt-[-10px]"
                                                : ""
                                        }
                                    >
                                        <ButtonLink
                                            href={link}
                                        >
                                            Ver Projeto
                                        </ButtonLink>
                                    </div>
                                </Section.TitleContainer>
                            </div>
                        );
                    }
                )}
            </div>
        </Section.Container>
    );
}
