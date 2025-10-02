import Image from "next/image";
import { Section } from "./Section";

export function About() {
    return (
        <Section.Container
            className="md:flex md:justify-between md:gap-20"
            id="sobre"
        >
            <Section.ImageContainer>
                <Image
                    src="/hero-image.png"
                    alt="imagem do hero"
                    width={100}
                    height={100}
                    className="w-full h-full"
                />
            </Section.ImageContainer>
            <Section.TitleContainer>
                <Section.Point>Sobre mim</Section.Point>
                <Section.Title>
                    Conheça a Mente por trás da Inovação.
                </Section.Title>
                <Section.SubTitle>
                    Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem
                    Ipsum has been the industry standard
                    dummy text ever since the 1500s, when an
                    unknown printer took a galley of type
                    and scrambled it to make a type specimen
                    book.{" "}
                </Section.SubTitle>
            </Section.TitleContainer>
        </Section.Container>
    );
}
