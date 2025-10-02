"use client";
import Link from "next/link";
import { Section } from "./Section";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Footer() {
    const path = usePathname();

    const links = [
        {
            href: "/",
            title: "Home",
        },
        {
            href: "/servicos",
            title: "Serviços",
        },
        {
            href: "/projetos",
            title: "Projetos",
        },
        {
            href: "/#contato",
            title: "Contato",
        },
    ];

    return (
        <Section.Container
            background="bg-black"
            className="border-t border-t-[#6F6F6F] md:space-y-12"
        >
            <div className="flex justify-between items-center">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={50}
                        height={50}
                        className="w-20 h-20"
                    />
                </Link>

                <div className="flex gap-4">
                    <Link
                        href="/"
                        className="block bg-[#E4A42A] p-4 w-fit rounded-full"
                    >
                        <Image
                            src="/whats.svg"
                            alt="Whatsapp Logo"
                            width={30}
                            height={30}
                            className="w-6 h-6"
                        />
                    </Link>

                    <Link
                        href="/"
                        className="block bg-white p-4 w-fit rounded-full"
                    >
                        <Image
                            src="/insta.svg"
                            alt="Instagram Logo"
                            width={30}
                            height={30}
                            className="w-6 h-6"
                        />
                    </Link>
                </div>
            </div>
            <div className="text-[#6F6F6F] flex flex-col gap-8 md:flex-row md:justify-between">
                <p className="max-w-60">
                    Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry
                </p>

                <ul className="space-y-2">
                    {links.map(({ href, title }, id) => {
                        return (
                            <li
                                key={id}
                                className={` ${
                                    href === path
                                        ? "text-[#E4A42A]"
                                        : "text-[#6F6F6F]"
                                }`}
                            >
                                <Link
                                    href={href}
                                    className="font-medium"
                                >
                                    {title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <ul className="space-y-2">
                    <li className="font-medium">
                        Serra Grande, Paraíba
                    </li>
                    <li className="font-medium">
                        +55 83 91234-5678
                    </li>
                    <li className="font-medium">
                        mail@gmail.com
                    </li>
                </ul>
            </div>
            <div className="text-[#6F6F6F] text-center w-full">
                Developed By{" "}
                <Link
                    href="https://thadeualves.vercel.app"
                    className="text-[#E4A42A] italic"
                >
                    Thadeu Alves
                </Link>{" "}
                @2025
            </div>
        </Section.Container>
    );
}
