"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea"
import asideImg from "../../assets/anniroenkae.jpg";
import { toast } from "sonner";

const formSchema = z.object({
    user_name: z.string().min(2).max(50),
    user_email: z.string().min(2),
    message: z.string()
})

export default function ContactForm() {
    const { t } = useTranslation();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            user_name: "",
            user_email: "",
            message: "",
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const templateParams = {
            from_name: values.user_name,
            from_email: values.user_email,
            message: values.message,
        };

        emailjs
            .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, templateParams, import.meta.env.VITE_PUBLIC_SERVICE_ID)
            .then(() => {
                toast.success(t("contactForm.toast.sucess"));
                form.reset();
            })
            .catch(err => {
                toast.error(t("contactForm.toast.error"), err);
            })
    }

    return (
        <div className="flex max-h-[500px] mt-5">
            <img className="w-3/6 object-cover" src={asideImg} alt="" />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-8 w-2/6 ms-10 mt-5">
                    <FormField
                        control={form.control}
                        name="user_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t("contactForm.nameLabel")}</FormLabel>
                                <FormControl>
                                    <Input placeholder={t("contactForm.namePlaceholder")} {...field} />
                                </FormControl>
                                <FormDescription>
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="user_email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t("contactForm.emailLabel")}</FormLabel>
                                <FormControl>
                                    <Input placeholder={t("contactForm.emailPlaceholder")} type="email" {...field} />
                                </FormControl>
                                <FormDescription>
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t("contactForm.messageLabel")}</FormLabel>
                                <FormControl>
                                    <Textarea placeholder={t("contactForm.messagePlaceholder")} {...field} />
                                </FormControl>
                                <FormDescription>
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">{t("contactForm.submitButton")}</Button>
                </form>
            </Form>
        </div>
    )
}

