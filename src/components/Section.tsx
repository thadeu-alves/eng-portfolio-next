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
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <h1
            className={`text-4xl font-semibold ${className}`}
        >
            {children}
        </h1>
    );
}

function SubTitle({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <p className={`text-xl font-light ${className}`}>
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
