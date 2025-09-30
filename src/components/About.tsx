import Image from "next/image";
import { Section } from "./Section";

export function About() {
    return (
        <Section.Container>
            <div>
                <Image
                    src="/hero-image.png"
                    alt="imagem do hero"
                    width={100}
                    height={100}
                    className="w-full"
                />
            </div>
            <div className="space-y-4">
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
            </div>
        </Section.Container>
    );
}
