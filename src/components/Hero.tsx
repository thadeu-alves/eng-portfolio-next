import React from "react";
import { Section } from "./Section";
import { ButtonLink } from "./ButtonLink";
import Image from "next/image";

export function Hero() {
    return (
        <Section.Container
            background="bg-[#D9D9D9]"
            className="md:flex md:justify-between md:gap-20"
        >
            <Section.TitleContainer>
                <Section.Title>
                    Transformando Conceitos em Realidade
                    Concreta
                </Section.Title>
                <Section.SubTitle className="text-[#6F6F6F]">
                    Desgin Inovador, Estruturas Robustas,
                    Soluções Sustentáveis
                </Section.SubTitle>
                <ButtonLink href="/#contato">
                    Fale Comigo
                </ButtonLink>
            </Section.TitleContainer>

            <Section.ImageContainer>
                <Image
                    src="/hero-image.png"
                    alt="imagem do hero"
                    width={100}
                    height={100}
                    className="w-full"
                />
            </Section.ImageContainer>
        </Section.Container>
    );
}
