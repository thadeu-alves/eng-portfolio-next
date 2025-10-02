export const Section = {
    Container,
    TitleContainer,
    ImageContainer,
    Title,
    SubTitle,
    Point,
};

function TitleContainer({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`space-y-6 md:w-1/2 md:space-y-8 ${className}`}
        >
            {children}
        </div>
    );
}

function ImageContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="md:w-1/2">{children}</div>;
}

function Container({
    children,
    className,
    background,
    id,
}: {
    children: React.ReactNode;
    className?: string;
    background?: string;
    id?: string;
}) {
    return (
        <div className={`${background}`} id={id}>
            <div
                className={`py-20 px-4 space-y-16 md:container md:mx-auto ${className}`}
            >
                {children}
            </div>
        </div>
    );
}

function Title({
    children,
    className,
    variant,
    fullWidth,
}: {
    children: React.ReactNode;
    className?: string;
    variant?: string;
    fullWidth?: boolean;
}) {
    return (
        <h1
            className={`font-semibold ${
                !fullWidth && "max-w-120"
            } ${
                variant
                    ? `text-${variant}`
                    : "text-4xl md:text-5xl"
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
            className={`font-light max-w-100 ${
                variant
                    ? `text-${variant}`
                    : "text-lg md:text-xl"
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
