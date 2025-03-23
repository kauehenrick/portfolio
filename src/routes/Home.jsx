import React, { useState } from "react";
import { FaGithub, FaLaptopCode, FaLinkedin } from "react-icons/fa6";
import headerLogoImg from "../assets/header-logo.png";
import ContactForm from "../components/ContactForm";
import T from "../components/i18n/Translator";
import LanguageToggle from "../components/LanguageToggle";
import ThemeToggle from "../components/ThemeToggle";
import ToolsIconSection from "../components/ToolsIconSection";
import MagnetLines from "../components/MagnetLines";

export default function Home() {
  const [selectedLink, setSelectedLink] = useState("inicio");

  const tapeContent = [
    <T key="webDevelopment" path="main.footer.webDevelopment" />,
    "|",
    <T key="uiux" path="main.footer.uiux" />,
    "|",
    <T key="frontendDevelopment" path="main.footer.frontendDevelopment" />,
    "|",
  ];

  const handleClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <>
      <header className="bg-primary-white dark:bg-primary-black dark:text-primary-white w-full fixed top-0 z-10 flex items-center justify-between md:px-80 py-4 drop-shadow-lg overflow-x-hidden">
        <img src={headerLogoImg} alt="logo Kauê Henrick" className="h-9" />

        <div className="hidden md:flex gap-8">
          <nav>
            <ul className="flex gap-5 text-sm md:text-base">
              {["home", "tools", "contact"].map((link) => (
                <li key={link} className={`relative hover:text-black dark:hover:text-white transition-colors ${selectedLink === link ? 'dark:text-primary-white' : 'text-gray-400'}`}>
                  <a href={`#${link}`} onClick={() => handleClick(link)}>
                    <T path={`header.${link}`} />
                  </a>
                  {selectedLink === link && <span className="absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-primary-pink"></span>}
                </li>
              ))}
            </ul>
          </nav>

          <LanguageToggle />

          <div className="flex items-center gap-5">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="bg-secondary-white dark:bg-primary-black dark:text-primary-white overflow-x-hidden">
        <section id="home">
          <div className="flex flex-col md:flex-row justify-between min-h-screen">
            <section className="space-y-10 mx-5 md:w-5/12 md:mt-45 md:pl-80">
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

        <section id="tools" className="flex flex-col md:flex-row justify-between py-20 px-5 gap-10">
          <div className="md:w-5/12">
            <h2 className="font-extrabold text-4xl mb-5"> <T path="main.tools.title1" /> <span className="text-primary-pink"> <T path="main.tools.title2" /> </span></h2>
            <li> <T path="main.tools.list.frontend" /> </li>
            <li> <T path="main.tools.list.backend" /> </li>
            <li> <T path="main.tools.list.design" /> </li>
            <li> <T path="main.tools.list.database" /> </li>
          </div>

          <ToolsIconSection />
        </section>

        <section id="contact" className="flex flex-col md:flex-row justify-between pb-20 px-5 gap-10">
          <div className="space-y-8">
            <h2 className="font-extrabold text-4xl mb-5"> <T path="main.contact.title1" /> <span className="text-primary-pink"> <T path="main.contact.title2" /> </span></h2>
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

      <footer className="bg-primary-pink flex flex-wrap items-center justify-center py-4 text-primary-white text-sm md:text-base">
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <a href="https://github.com/kauehenrick" target="blank"><FaGithub size="20px" /></a>
          <a href="https://www.linkedin.com/in/kauehenrick/" target="blank"><FaLinkedin size="20px" /></a>
        </div>
      </footer>
    </>
  )
}