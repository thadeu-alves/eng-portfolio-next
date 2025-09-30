import React from "react";
import { Section } from "./Section";
import { ButtonLink } from "./ButtonLink";
import Image from "next/image";

export function Hero() {
    return (
        <Section.Container className="bg-[#D9D9D9]">
            <div className="space-y-4">
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
            </div>

            <div>
                <Image
                    src="/hero-image.png"
                    alt="imagem do hero"
                    width={100}
                    height={100}
                    className="w-full"
                />
            </div>
        </Section.Container>
    );
}
