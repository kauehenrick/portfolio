import { FaGithub, FaLinkedin } from "react-icons/fa6";
import brasilLogoImg from "../assets/brasil.png";
import contactImg from "../assets/contact-image.jpeg";
import figmaLogoImg from "../assets/figma.png";
import headerLogoImg from "../assets/header-logo.png";
import kauePictureImg from "../assets/kaue-picture.jpg";
import nodejsLogoImg from "../assets/nodejs.png";
import postgresqlLogoImg from "../assets/postgresql.png";
import reactjsLogoImg from "../assets/reactjs.png";
import sunLogoImg from "../assets/sol.png";
import tailwindLogoImg from "../assets/tailwindcss.png";
import typescriptLogoImg from "../assets/typescript.png";
import euaLogoImg from "../assets/usa.png";
import ContactForm from "../components/ContactForm";
import ProjectsSection from "../components/ProjectsSection";
import SkillItem from "../components/SkillItem";
import { useState } from "react";

export default function Home() {
  const [selectedLink, setSelectedLink] = useState("inicio");

  const handleClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <>
      <header className="bg-primary-black fixed top-0 z-10 w-full flex items-center justify-between px-8 py-4 drop-shadow-lg">
        <img src={headerLogoImg} alt="logo Kauê Henrick" className="h-9" />

        <div className="flex gap-8">
          <nav>
            <ul className="flex gap-5">
              <li
                className={`hover:text-white transition-colors relative ${selectedLink === 'inicio' ? 'text-primary-white' : 'text-gray-400'
                  }`}
              >
                <a href="#" onClick={() => handleClick('inicio')}>
                  Início
                </a>
                {selectedLink === 'inicio' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-primary-pink"></span>
                )}
              </li>
              <li
                className={`hover:text-white transition-colors relative ${selectedLink === 'ferramentas' ? 'text-primary-white' : 'text-gray-400'
                  }`}
              >
                <a href="#ferramentas" onClick={() => handleClick('ferramentas')}>
                  Ferramentas
                </a>
                {selectedLink === 'ferramentas' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-primary-pink"></span>
                )}
              </li>
              <li
                className={`hover:text-white transition-colors relative ${selectedLink === 'projetos' ? 'text-primary-white' : 'text-gray-400'
                  }`}
              >
                <a href="#projetos" onClick={() => handleClick('projetos')}>
                  Projetos
                </a>
                {selectedLink === 'projetos' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-primary-pink"></span>
                )}
              </li>
              <li
                className={`hover:text-white transition-colors relative ${selectedLink === 'contato' ? 'text-primary-white' : 'text-gray-400'
                  }`}
              >
                <a href="#contato" onClick={() => handleClick('contato')}>
                  Contato
                </a>
                {selectedLink === 'contato' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-primary-pink"></span>
                )}
              </li>
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