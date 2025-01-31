import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <label htmlFor="name" className="mb-1">Nome:</label>
      <input {...register("name", { required: true })} className="bg-primary-white text-black rounded-lg w-82 h-8 px-2 mb-5" />
      <label htmlFor="email" className="mb-1">Email:</label>
      <input type="email" {...register("email")} className="bg-primary-white text-black rounded-lg w-82 h-8 px-2 mb-5" />
      <label htmlFor="message" className="mb-1">Sua mensagem:</label>
      <textarea {...register("message")} className="bg-primary-white text-black rounded-lg w-82 h-8 px-2 py-1 mb-5 min-h-20" />
      <button type="submit" className="bg-primary-pink rounded-lg py-1 w-30 self-end cursor-pointer hover:bg-primary-pink/85">Enviar</button>
    </form>
  )
}