import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import contactImg from "../assets/contact-image.jpeg";
import figmaLogoImg from "../assets/figma.png";
import headerLogoImg from "../assets/header-logo.png";
import kauePictureImg from "../assets/kaue-picture.jpg";
import nodejsLogoImg from "../assets/nodejs.png";
import postgresqlLogoImg from "../assets/postgresql.png";
import reactjsLogoImg from "../assets/reactjs.png";
import tailwindLogoImg from "../assets/tailwindcss.png";
import typescriptLogoImg from "../assets/typescript.png";
import ContactForm from "../components/ContactForm";
import SkillItem from "../components/SkillItem";
import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import Translator from "../components/i18n/Translator";
import LanguageToggle from "../components/LanguageToggle";

export default function Home() {
  const [selectedLink, setSelectedLink] = useState("inicio");

  const handleClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <>
      <header className="bg-primary-white dark:bg-primary-black dark:text-primary-white fixed top-0 z-10 w-full flex items-center justify-between px-8 py-4 drop-shadow-lg">
        <img src={headerLogoImg} alt="logo Kauê Henrick" className="h-9" />

        <div className="flex gap-8">
          <nav>
            <ul className="flex gap-5">
              <li
                className={`hover:text-black dark:hover:text-white transition-colors relative ${selectedLink === 'inicio' ? 'dark:text-primary-white' : 'text-gray-400'
                  }`}
              >
                <a href="#" onClick={() => handleClick('inicio')}>
                  <Translator path="header.home" />
                </a>
                {selectedLink === 'inicio' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-primary-pink"></span>
                )}
              </li>
              <li
                className={`hover:text-black dark:hover:text-white transition-colors relative ${selectedLink === 'ferramentas' ? 'dark:text-primary-white' : 'text-gray-400'
                  }`}
              >
                <a href="#ferramentas" onClick={() => handleClick('ferramentas')}>
                  <Translator path="header.tools" />
                </a>
                {selectedLink === 'ferramentas' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-primary-pink"></span>
                )}
              </li>
              {/*<li
                className={`hover:text-black dark:hover:text-white transition-colors relative ${selectedLink === 'projetos' ? 'dark:text-primary-white' : 'text-gray-400'
                  }`}
              >
                <a href="#projetos" onClick={() => handleClick('projetos')}>
                  <Translator path="header.projects"/>
                </a>
                {selectedLink === 'projetos' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-primary-pink"></span>
                )}
              </li>*/}

              <li
                className={`hover:text-black dark:hover:text-white transition-colors relative ${selectedLink === 'contato' ? 'dark:text-primary-white' : 'text-gray-400'
                  }`}
              >
                <a href="#contato" onClick={() => handleClick('contato')}>
                  <Translator path="header.contact" />
                </a>
                {selectedLink === 'contato' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-primary-pink"></span>
                )}
              </li>
            </ul>
          </nav>

          <LanguageToggle />

          <div className="flex items-center gap-5">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="dark:text-primary-white">
        <section className="bg-secondary-white dark:bg-primary-gray flex flex-col md:flex-row items-center justify-center h-[700px] gap-10">
          <div className="space-y-4 w-[550px]">
            <p className="font-extrabold text-4xl"> <Translator path="main.greetings" /> <br /> <span className="text-primary-pink"> <Translator path="main.title" /> </span></p>
            <p className="w-136"> <Translator path="main.description" /> </p>

            <div className="flex text-primary-pink gap-7">
              <a href="https://github.com/kauehenrick" target="blank" className="flex items-center gap-2 font-medium">
                <FaGithub size="20px" />
                <p>Github</p>
              </a>
              <a href="https://www.linkedin.com/in/kauehenrick/" target="blank" className="flex items-center gap-2 font-medium">
                <FaLinkedin size="20px" />
                <p>LinkedIn</p>
              </a>
            </div>
          </div>

          <img src={kauePictureImg} alt="Foto Kauê" className="h-[300px] rounded-r-2xl" />
        </section>

        <section id="ferramentas" className="bg-primary-white dark:bg-primary-black flex flex-col items-center justify-center py-15 gap-y-8">
          <h2 className="font-extrabold text-4xl"> <Translator path="main.tools.title1" /> <span className="text-primary-pink"> <Translator path="main.tools.title2" /> </span></h2>

          <div className="grid grid-flow-col grid-cols-2 gap-13">
            <div className="space-y-8">
              <SkillItem skillLogo={typescriptLogoImg} skillTitle="Typescript" skillDescription={<Translator path="main.tools.typescript" />} />
              <SkillItem skillLogo={figmaLogoImg} skillTitle="Figma" skillDescription={<Translator path="main.tools.figma" />} />
              <SkillItem skillLogo={nodejsLogoImg} skillTitle="NodeJS" skillDescription={<Translator path="main.tools.nodejs" />} />
            </div>
            <div className="space-y-8">
              <SkillItem skillLogo={reactjsLogoImg} skillTitle="ReactJS" skillDescription={<Translator path="main.tools.reactjs" />} />
              <SkillItem skillLogo={tailwindLogoImg} skillTitle="TailwindCSS" skillDescription={<Translator path="main.tools.tailwindcss" />} />
              <SkillItem skillLogo={postgresqlLogoImg} skillTitle="PostgreSQL" skillDescription={<Translator path="main.tools.postgresql" />} />
            </div>
          </div>
        </section>

        {/*<section id="projetos">
          <ProjectsSection />
        </section>*/}

        <section id="contato" className="bg-secondary-white dark:bg-primary-gray flex flex-col items-center justify-center py-15 gap-y-8">
          <h2 className="font-extrabold text-4xl"> <Translator path="main.contact.title1" /> <span className="text-primary-pink"> <Translator path="main.contact.title2" /> </span></h2>

          <p className="text-center"> <Translator path="main.contact.description1" /> <br /> <Translator path="main.contact.description2" /> </p>

          <div className="flex flex-col md:flex-row items-center gap-13">
            <img src={contactImg} alt="" className="h-[320px] max-sm:rounded-t-2xl md:rounded-l-2xl" />
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-primary-pink text-primary-white h-12 flex items-center justify-center gap-3 text-xl">
        <a href="https://github.com/kauehenrick" target="blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/kauehenrick/" target="blank"><FaLinkedin /></a>
        <a href="https://www.instagram.com/kaue.weber/" target="blank"><FaInstagram /></a>
      </footer>
    </>
  )
}