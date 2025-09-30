import Link from "next/link";

export function ButtonLink({
    href,
    children,
    className,
    variant,
}: {
    href: string;
    className?: string;
    children: React.ReactNode;
    variant?: boolean;
}) {
    return (
        <Link
            href={href}
            className={`font-medium ${
                variant
                    ? "border border-[#D9D9D9] text-[#D9D9D9]"
                    : "bg-[#E4A42A]"
            } px-4 py-2 rounded ${className}`}
        >
            {children}
        </Link>
    );
}
