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
        <div className="bg-[#D9D9D9] px-8 py-4 flex justify-between items-center relative">
            <Link href="/">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={50}
                    height={50}
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
                />
            </button>

            <ul
                className={`absolute bg-[#D9D9D9] left-0 top-20 text-center py-8 space-y-4 w-full lg:static lg:flex lg:gap-8 lg:w-fit ${
                    open ? "block" : "hidden"
                }`}
            >
                {links.map(({ href, title }, id) => {
                    return (
                        <li
                            key={id}
                            className={` ${
                                href === path
                                    ? "text-[#E4A42A]"
                                    : "text-black"
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
        </div>
    );
}
