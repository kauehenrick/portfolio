import headerLogoImg from "../assets/header-logo.png";
import kauePictureImg from "../assets/kaue-picture.jpg";
import typescriptLogoImg from "../assets/typescript.png";
import figmaLogoImg from "../assets/figma.png";
import nodejsLogoImg from "../assets/nodejs.png";
import reactjsLogoImg from "../assets/reactjs.png";
import tailwindLogoImg from "../assets/tailwindcss.png";
import postgresqlLogoImg from "../assets/postgresql.png";
import brasilLogoImg from "../assets/brasil.png";
import euaLogoImg from "../assets/usa.png";
import sunLogoImg from "../assets/sol.png";
import contactImg from "../assets/contact-image.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import SkillItem from "../components/SkillItem";
import ContactForm from "../components/ContactForm";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <>
      <header className="bg-primary-black fixed top-0 z-10 w-full flex items-center justify-between px-8 py-4 drop-shadow-lg">
        <img src={headerLogoImg} alt="logo Kauê Henrick" className="h-9" />

        <div className="flex gap-8">
          <nav>
            <ul className="flex gap-9">
              <li><a href="#">Início</a></li>
              <li><a href="#ferramentas">Ferramentas</a></li>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <img src={brasilLogoImg} alt="Logo do Brasil" className="h-5 cursor-pointer" />
            <img src={euaLogoImg} alt="Logo dos EUA" className="h-5 cursor-pointer" />
          </div>

          <img src={sunLogoImg} alt="Ícone do Sol" className="h-6 cursor-pointer" />
        </div>
      </header>

      <main className="my-4">
        <section className="bg-primary-gray flex items-center justify-center gap-13 h-[700px]">
          <div className="space-y-4">
            <p className="font-extrabold text-4xl">Olá, me chamo Kauê Henrick <br /> <span className="text-primary-pink">Desenvolvedor Web</span></p>
            <p>Focado em entregar páginas com designs <br /> atraentes e eficientes, visando proporcionar uma <br /> excelente experiência para o cliente final.</p>
            <div className="flex text-primary-pink gap-4">
              <a href="https://github.com/kauehenrick" target="_blank" className="cursor-pointer"><FaGithub size="30px" /></a>
              <a href="https://www.linkedin.com/in/kauehenrick/" target="_blank" className="cursor-pointer"><FaLinkedin size="30px" /></a>
            </div>
          </div>
          <img src={kauePictureImg} alt="Foto Kauê" className="h-[300px] rounded-r-2xl" />
        </section>

        <section id="ferramentas" className="flex flex-col items-center justify-center py-15 gap-y-8">
          <h2 className="font-extrabold text-4xl">Principais <span className="text-primary-pink">Ferramentas</span></h2>

          <div className="grid grid-flow-col grid-cols-2 gap-13">
            <div className="space-y-8">
              <SkillItem skillLogo={typescriptLogoImg} skillTitle="Typescript" skillDescription="Linguagem de programação" />
              <SkillItem skillLogo={figmaLogoImg} skillTitle="Figma" skillDescription="Ferramenta de design" />
              <SkillItem skillLogo={nodejsLogoImg} skillTitle="NodeJS" skillDescription="Ambiente de execução Javascript" />
            </div>
            <div className="space-y-8">
              <SkillItem skillLogo={reactjsLogoImg} skillTitle="ReactJS" skillDescription="Biblioteca de Javascript" />
              <SkillItem skillLogo={tailwindLogoImg} skillTitle="TailwindCSS" skillDescription="Framework de CSS" />
              <SkillItem skillLogo={postgresqlLogoImg} skillTitle="PostgreSQL" skillDescription="Banco de dados relacional" />
            </div>
          </div>
        </section>

        <section id="projetos">
          <ProjectsSection />
        </section>

        <section id="contato" className="flex flex-col items-center justify-center py-15 gap-y-8">
          <h2 className="font-extrabold text-4xl">Vamos Trabalhar <span className="text-primary-pink">Juntos</span></h2>

          <p className="text-center">Caso queira conhecer mais sobre o meu trabalho ou sobre mim, talvez apenas mandar um &ldquo;alô&ldquo;, me mande uma mensagem. <br /> Estou esperando por você!</p>

          <div className="flex items-center gap-13">
            <img src={contactImg} alt="" className="h-[320px] rounded-l-2xl" />
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-primary-pink h-12 flex">
        <p className="m-auto">Feito com ❤︎ por Kauê Henrick</p>

      </footer>
    </>
  )
}