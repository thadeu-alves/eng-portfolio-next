import { ContactForm } from "./ContactForm";
import { Section } from "./Section";

export function Contact() {
    return (
        <Section.Container
            background="bg-black"
            className="text-white md:flex md:gap-20"
            id="contato"
        >
            <Section.TitleContainer>
                <Section.Point>Contato</Section.Point>
                <Section.Title>Fale Comigo</Section.Title>
            </Section.TitleContainer>
            <Section.ImageContainer>
                <ContactForm />
            </Section.ImageContainer>
        </Section.Container>
    );
}
