"use client";

import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormLabel } from "./ContactFormLabel";

const messageFormSchema = z.object({
    name: z
        .string()
        .min(5, "Digite seu nome completo")
        .max(50, "Digite apenas seu nome"),
    email: z.email("Digite seu email"),
    subject: z
        .string()
        .min(5, "Assunto muito pequena")
        .max(50, "Assunto muito grande"),
    message: z.string().min(5, "Mensagem muito pequena"),
});

type MessageFormData = z.infer<typeof messageFormSchema>;

export function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<MessageFormData>({
        resolver: zodResolver(messageFormSchema),
        mode: "onSubmit",
    });

    function onSubmit(data: MessageFormData) {
        console.log(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ContactFormLabel
                type="text"
                title="name"
                label="Name"
                register={register}
                error={errors?.name?.message}
                required
            />

            <ContactFormLabel
                type="text"
                title="email"
                label="Email"
                register={register}
                error={errors?.email?.message}
                required
            />

            <ContactFormLabel
                type="text"
                title="subject"
                label="Subject"
                register={register}
                error={errors?.subject?.message}
                required
            />

            <ContactFormLabel
                type="text"
                title="message"
                label="Message"
                register={register}
                error={errors?.message?.message}
                required
            />

            <button type="submit">Enviar</button>
        </form>
    );
}
