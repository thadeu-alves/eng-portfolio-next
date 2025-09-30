export const Section = {
    Container,
    Title,
    SubTitle,
};

function Container({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`p-20 ${className}`}>
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
