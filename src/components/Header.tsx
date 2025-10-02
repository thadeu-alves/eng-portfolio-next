"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
    const [open, setOpen] = useState(false);
    const path = usePathname();

    const links = [
        {
            href: "/",
            title: "Home",
        },
        {
            href: "/sobre",
            title: "Sobre",
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
            href: "/contato",
            title: "Contato",
        },
    ];

    return (
        <div className="bg-[#D9D9D9] border-b border-b-[#bab9b9] ">
            <div className="px-4 py-4 flex justify-between items-center relative md:container md:mx-auto lg:py-0">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={50}
                        height={50}
                        className="w-10"
                    />
                </Link>

                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden lg:absolute"
                >
                    <Image
                        src="/menu.svg"
                        alt="menu icon"
                        width={30}
                        height={30}
                        className="w-8"
                    />
                </button>

                <ul
                    className={`absolute bg-[#D9D9D9] left-0 top-19 p-4 space-y-4 w-full border-b border-b-[#bab9b9] lg:py-6 lg:space-y-0 lg:border-0 lg:static lg:flex lg:gap-8 lg:w-fit ${
                        open ? "block" : "hidden"
                    }`}
                >
                    {links.map(({ href, title }, id) => {
                        return (
                            <li
                                key={id}
                                className={`text-xl md:text-lg ${
                                    href === path
                                        ? "text-[#E4A42A] hover:text-[#a47419]"
                                        : "text-black hover:text-neutral-400"
                                }`}
                                onClick={() =>
                                    setOpen(false)
                                }
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
            </div>
        </div>
    );
}
