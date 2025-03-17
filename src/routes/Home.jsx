import React, { useState } from "react";
import { FaGithub, FaLaptopCode, FaLinkedin } from "react-icons/fa6";
import headerLogoImg from "../assets/header-logo.png";
import ContactForm from "../components/ContactForm";
import T from "../components/i18n/Translator";
import LanguageToggle from "../components/LanguageToggle";
//import ProjectsSection from "../components/ProjectsSection";
import ThemeToggle from "../components/ThemeToggle";
import ToolsIconSection from "../components/ToolsIconSection";
import MagnetLines from "../components/MagnetLines";

export default function Home() {
  const [selectedLink, setSelectedLink] = useState("inicio");

  const tapeContent = ["Desenvolvimento Web", "|", "UI/UX", "|", "Desenvolvimento Front-end", "|"];

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
                  <T path="header.home" />
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
                  <T path="header.tools" />
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
                  <T path="header.projects" />
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
                  <T path="header.contact" />
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
        <section className="bg-secondary-white dark:bg-primary-black">
          <div className="flex flex-col md:flex-row justify-between min-h-screen">
            <section className="space-y-10 md:w-5/12 md:mt-45 md:pl-80">
              <p className="text-2xl font-spacemono">&lt; <T path="main.hello" /> /&gt;</p>

              <div className="space-y-4">
                <p className="font-bold text-4xl"> <T path="main.greetings" /> <br /> <span className="text-primary-pink"> <T path="main.title" /> </span></p>
                <p> <T path="main.description" /> </p>

                <div className="flex gap-7">
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

              <a href="#contato" className="bg-primary-pink hover:bg-primary-pink/85 text-white transition duration-200 rounded-sm flex items-center justify-center gap-3 text-sm font-semibold px-4 py-2 w-50 cursor-pointer" onClick={() => handleClick('contato')}>
                <p> <T path="main.button" /> </p>
                <FaLaptopCode size="20px" />
              </a>
            </section>

            <MagnetLines
              rows={9}
              columns={9}
              containerSize="60vmin"
              lineColor="#EF476F"
              lineWidth="0.8vmin"
              lineHeight="5vmin"
              baseAngle={0}
              style={{ margin: "auto" }}
            />
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

        <section id="ferramentas" className="bg-secondary-white dark:bg-primary-black flex justify-between py-35 md:px-80">
          <div className="w-5/12">
            <h2 className="font-extrabold text-4xl mb-5"> <T path="main.tools.title1" /> <span className="text-primary-pink"> <T path="main.tools.title2" /> </span></h2>
            <li> <T path="main.tools.list.frontend" /> </li>
            <li> <T path="main.tools.list.backend" /> </li>
            <li> <T path="main.tools.list.design" /> </li>
            <li> <T path="main.tools.list.database" /> </li>
          </div>

          <ToolsIconSection />
        </section>

        {/*<section id="projetos">
          <ProjectsSection />
        </section>*/}

        <section id="contato" className="bg-secondary-white dark:bg-primary-black flex justify-between pb-35 md:px-80">
          <div className="w-5/12 space-y-8">
            <h2 className="font-extrabold text-4xl mb-5"> <T path="main.contact.title1" /> <span className="text-primary-pink"> <T path="main.contact.title2" /> </span>!</h2>
            <p> <T path="main.contact.description1" /> <br /> <T path="main.contact.description2" /> </p>

            <div>
              <p className="font-bold text-xl mb-3"> <T path="main.contact.myNumber" /> </p>
              <p>+55 77 99943-4338</p>
            </div>

            <div>
              <p className="font-bold text-xl mb-3">Email:</p>
              <p>kauehenrick@proton.me</p>
            </div>
          </div>

          <ContactForm />
        </section>
      </main>

      <footer className="bg-primary-pink text-primary-white h-12 flex items-center justify-center gap-3 text-xl">
        <a href="https://github.com/kauehenrick" target="blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/kauehenrick/" target="blank"><FaLinkedin /></a>
      </footer>
    </>
  )
}