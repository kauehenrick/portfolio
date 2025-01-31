import headerLogoImg from "../assets/header-logo.svg";
import kauePictureImg from "../assets/kaue-picture.jpg";
import typescriptLogoImg from "../assets/typescript.png";
import figmaLogoImg from "../assets/figma.png";
import nodejsLogoImg from "../assets/nodejs.png";
import reactjsLogoImg from "../assets/reactjs.png";
import tailwindLogoImg from "../assets/tailwindcss.png";
import postgresqlLogoImg from "../assets/postgresql.png";
import brasilLogo from "../assets/brasil.png";
import euaLogo from "../assets/usa.png";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import SkillItem from "../components/SkillItem";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between mx-8 mt-4">
        <img src={headerLogoImg} alt="logo Kauê Henrick" />

        <div className="flex gap-8">
          <nav>
            <ul className="flex gap-9">
              <li><a href="">Início</a></li>
              <li><a href="">Sobre</a></li>
              <li><a href="">Projetos</a></li>
              <li><a href="">Contato</a></li>
            </ul>
          </nav>

          <div className="flex gap-4">
            <img src={brasilLogo} alt="Logo do Brasil" />
            <img src={euaLogo} alt="Logo dos EUA" />
          </div>
        </div>
      </header>

      <main className="space-y-12 my-4">
        <section className="bg-primary-gray bg-cover flex items-center justify-center gap-13 h-[700px]">
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

        <section className="flex flex-col items-center justify-center gap-y-8">
          <p className="font-extrabold text-4xl">Principais <span className="text-primary-pink">Ferramentas</span></p>

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

        <section className="flex flex-col items-center justify-center">
          <p className="font-extrabold text-4xl">Vamos Trabalhar <span className="text-primary-pink">Juntos</span></p>
        </section>
      </main>

      <footer className="bg-primary-pink h-18">

      </footer>
    </>
  )
}