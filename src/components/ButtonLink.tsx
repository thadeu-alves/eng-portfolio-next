import Link from "next/link";

export function ButtonLink({
    href,
    children,
    className,
}: {
    href: string;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className={`font-medium bg-[#E4A42A] px-4 py-2 rounded ${className}`}
        >
            {children}
        </Link>
    );
}
