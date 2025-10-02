import { ButtonLink } from "./ButtonLink";
import { Section } from "./Section";
import { ServiceCard } from "./ServiceCard";

export function Services() {
    const services = [
        {
            icon: "🏛️",
            title: "Projetos Arquitetônicos e Reformas (2D e 3D)",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            icon: "🏛️",
            title: "Projetos Arquitetônicos e Reformas (2D e 3D)",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            icon: "🏛️",
            title: "Projetos Arquitetônicos e Reformas (2D e 3D)",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            icon: "🏛️",
            title: "Projetos Arquitetônicos e Reformas (2D e 3D)",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            icon: "🏛️",
            title: "Projetos Arquitetônicos e Reformas (2D e 3D)",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            icon: "🏛️",
            title: "Projetos Arquitetônicos e Reformas (2D e 3D)",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
    ];

    return (
        <Section.Container
            background="bg-black"
            id="servicos"
        >
            <div className="space-y-8 md:space-y-0 md:flex md:justify-between md:items-end-safe">
                <div>
                    <Section.Point>Serviços</Section.Point>
                    <Section.Title
                        className="text-white"
                        fullWidth
                    >
                        Do Conceito à Obra
                    </Section.Title>
                </div>
                <ButtonLink
                    href="/servicos"
                    variant
                    className="h-fit"
                >
                    Saiba mais
                </ButtonLink>
            </div>
            <div className="space-y-4 md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-3">
                {services.map(
                    ({ icon, title, description }, id) => {
                        return (
                            <ServiceCard
                                icon={icon}
                                title={title}
                                description={description}
                                key={id}
                            />
                        );
                    }
                )}
            </div>
        </Section.Container>
    );
}
