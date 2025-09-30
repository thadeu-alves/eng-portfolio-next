export const Section = {
    Container,
    Title,
    SubTitle,
    Point,
};

function Container({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`p-20 space-y-8 ${className}`}>
            {children}
        </div>
    );
}

function Title({
    children,
    className,
    variant,
}: {
    children: React.ReactNode;
    className?: string;
    variant?: string;
}) {
    return (
        <h1
            className={`font-semibold ${
                variant ? `text-${variant}` : "text-4xl"
            } ${className}`}
        >
            {children}
        </h1>
    );
}

function SubTitle({
    children,
    className,
    variant,
}: {
    children: React.ReactNode;
    className?: string;
    variant?: string;
}) {
    return (
        <p
            className={`font-light ${
                variant ? `text-${variant}` : "text-xl"
            } ${className}`}
        >
            {children}
        </p>
    );
}

function Point({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <h2 className="font-bold text-xs text-[#6F6F6F] uppercase mb-1">
            {children}
        </h2>
    );
}
