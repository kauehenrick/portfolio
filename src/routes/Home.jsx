import { FaGithub, FaLinkedin, FaLaptopCode } from "react-icons/fa6";
import React from "react";
import contactImg from "../assets/contact-image.jpeg";
import figmaLogoImg from "../assets/figma.png";
import headerLogoImg from "../assets/header-logo.png";
import ComputerVectorImg from "../assets/computer_vector.png";
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

  const tapeContent = ["Desenvolvimento Web", "|", "UI/UX", "|", "Desenvolvimento Fullstack", "|"];

  const handleClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <>
      <header className="bg-primary-white dark:bg-primary-black dark:text-primary-white w-full fixed top-0 z-10 flex items-center justify-between md:px-80 py-4 drop-shadow-lg">
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
        <section className="bg-secondary-white dark:bg-primary-black flex flex-col justify-center min-h-screen">
          <div className="flex md:flex-row items-center justify-between md:px-80">

            <section className="space-y-6">
              <p className="text-2xl font-spacemono">&lt; <Translator path="main.hello" /> /&gt;</p>

              <div className="space-y-4">
                <p className="font-bold text-4xl"> <Translator path="main.greetings" /> <br /> <span className="text-primary-pink"> <Translator path="main.title" /> </span></p>
                <p> <Translator path="main.description" /> </p>

                <div className="flex text-primary-white gap-7">
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

              <button className="bg-primary-pink rounded-sm flex items-center gap-3 text-sm font-semibold px-4 py-2 cursor-pointer">
                <p> <Translator path="main.button" /> </p>

                <FaLaptopCode size="20px" />
              </button>
            </section>

            <img src={ComputerVectorImg} alt="Foto Kauê" className="h-154" />
          </div>

          <footer className="bg-primary-pink flex h-13 w-full absolute bottom-0 overflow-hidden">
            <div className="relative flex whitespace-nowrap">
              <div className="animate-marquee-continuous inline-flex items-center gap-4">
                {Array.from({ length: 10 }, (_, outerIndex) => (
                  <React.Fragment key={outerIndex}>
                    {tapeContent.map((item, innerIndex) => (
                      <span key={`${outerIndex}-${innerIndex}`} className="text-white font-medium">
                        {item}
                      </span>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </footer>
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
      </footer>
    </>
  )
}