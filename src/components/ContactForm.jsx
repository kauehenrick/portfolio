import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'sonner';
import Translator from './i18n/Translator';
import { useTranslation } from 'react-i18next';
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const form = useRef();
  const { i18n } = useTranslation();

  const selectedLanguage = i18n.language

  const onSubmit = (data) => {
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log(data);
          toast.success('Email enviado com sucesso!', {
            closeButton: true
          });
          reset();
        },
        (error) => {
          toast.error('Erro ao enviar email!');
          console.log(error.text);
        },
      );
  };

  return (
    <form id="contact-form" ref={form} onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <label htmlFor="reply_to" className="mb-1"> <Translator path="main.contact.name" /> </label>
      <input type="text" {...register("reply_to", { required: true })} placeholder={selectedLanguage == "pt-BR" ? "Seu nome" : "Your name"} className="bg-primary-white text-black rounded-lg w-82 h-8 px-2 mb-5 text-sm" />

      <label htmlFor="email" className="mb-1"> <Translator path="main.contact.email" /> </label>
      <input type="email" {...register("email", { required: true })} placeholder="email@email.com" className="bg-primary-white text-black rounded-lg w-82 h-8 px-2 mb-5 text-sm" />

      <label htmlFor="message" className="mb-1"> <Translator path="main.contact.message" /> </label>
      <textarea {...register("message", { required: true })} placeholder={selectedLanguage == "pt-BR" ? "Sua mensagem aqui..." : "Your message here..."} className="bg-primary-white text-black rounded-lg w-82 px-2 py-1 mb-5 min-h-20 text-sm" />

      <button type="submit" className="bg-primary-pink rounded-lg py-1 w-30 self-end cursor-pointer hover:bg-primary-pink/85"> <Translator path="main.contact.send" /> </button>
    </form>
  );
}