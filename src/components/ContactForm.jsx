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
    <form id="contact-form" ref={form} onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-11">
      <input autoComplete="off" type="text" {...register("reply_to", { required: true })} placeholder={selectedLanguage == "pt-BR" ? "NOME" : "NAME"} className="font-spacemono h-8 px-2 mb-5 border-b focus:outline-none" />

      <input autoComplete="off" type="email" {...register("email", { required: true })} placeholder="EMAIL" className="h-8 px-2 mb-5 border-b focus:outline-none" />

      <textarea {...register("message", { required: true })} placeholder={selectedLanguage == "pt-BR" ? "Sua mensagem..." : "Your message.."} className="font-spacemono px-2 py-1 mb-5 min-h-20 border-b focus:outline-none" />

      <button
        type="submit"
        className="rounded-lg py-1 w-50 self-end cursor-pointer border text-primary-pink 
             hover:bg-primary-pink/85 hover:text-white transition duration-200">
        <Translator path="main.contact.send" />
      </button>
    </form>
  );
}