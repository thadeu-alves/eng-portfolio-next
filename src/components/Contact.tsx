import { ContactForm } from "./ContactForm";
import { Section } from "./Section";

export function Contact() {
    return (
        <Section.Container className="bg-black text-white">
            <div className="space-y-8">
                <Section.Point>Contato</Section.Point>
                <Section.Title>Fale Comigo</Section.Title>
            </div>
            <ContactForm />
        </Section.Container>
    );
}
