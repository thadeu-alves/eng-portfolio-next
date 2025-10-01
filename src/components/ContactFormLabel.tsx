import {
    FieldValues,
    Path,
    UseFormRegister,
} from "react-hook-form";

interface ContactFormLabelProps<
    TFieldValue extends FieldValues
> {
    title: Path<TFieldValue>;
    register: UseFormRegister<TFieldValue>;
    label: string;
    type?: string;
    required?: boolean;
    error?: string;
}

export function ContactFormLabel<
    TFieldValue extends FieldValues
>({
    title,
    register,
    label,
    type = "text",
    required = false,
    error,
}: ContactFormLabelProps<TFieldValue>) {
    const inputProps = register
        ? register(title, {
              required: required && `${label} is required`,
          })
        : { name: title };

    return (
        <div>
            <label
                htmlFor={title}
                className="block text-sm font-medium text-[var(--primary)]"
            >
                {label}
                {required && (
                    <span className="text-red-500"> *</span>
                )}
            </label>
            <input
                type={type}
                id={title}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border ${
                    error ? "border-red-500" : ""
                }`}
                {...inputProps}
            />
            {error && (
                <p className="mt-1 text-sm text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
}
