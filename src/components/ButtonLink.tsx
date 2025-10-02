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
            className={`text-lg md:text-xl font-medium ${
                variant
                    ? "border border-[#6F6F6F] text-[#6F6F6F] hover:bg-[#6F6F6F] hover:text-white transition-all"
                    : "bg-[#E4A42A] border border-[#E4A42A] hover:bg-transparent hover:text-[#E4A42A] transition-all"
            } px-6 py-3 rounded ${className}`}
        >
            {children}
        </Link>
    );
}
