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
                    ? "border border-[#6F6F6F] text-[#6F6F6F]"
                    : "bg-[#E4A42A]"
            } px-4 py-2 rounded ${className}`}
        >
            {children}
        </Link>
    );
}
