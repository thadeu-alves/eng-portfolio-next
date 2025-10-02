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
        <div className="text-[#6F6F6F] space-y-2">
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
                className={`mb-4 block w-full rounded shadow-sm border-2 border-[#6F6F6F] px-6 py-3 text-lg font-medium text-white focus:outline-0 ${
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
