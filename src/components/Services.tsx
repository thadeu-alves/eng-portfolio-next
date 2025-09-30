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
    ];

    return (
        <Section.Container className="bg-black">
            <div className="space-y-8">
                <Section.Point>Serviços</Section.Point>
                <Section.Title className="text-white">
                    Do Conceito à Obra
                </Section.Title>
                <ButtonLink href="/servicos" variant>
                    Saiba mais
                </ButtonLink>
            </div>
            <div className="space-y-4">
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
