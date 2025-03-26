import React, { useState } from "react";
import { FaGithub, FaLaptopCode, FaLinkedin, FaBars, FaXmark } from "react-icons/fa6";
import headerLogoImg from "../assets/header-logo.png";
import ContactForm from "../components/ContactForm";
import T from "../components/i18n/Translator";
import LanguageToggle from "../components/LanguageToggle";
import ThemeToggle from "../components/ThemeToggle";
import ToolsIconSection from "../components/ToolsIconSection";
import MagnetLines from "../components/MagnetLines";

export default function Home() {
  const [selectedLink, setSelectedLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-primary-white dark:bg-primary-black dark:text-primary-white w-full fixed top-0 z-10 flex items-center justify-between px-5 md:px-80 py-4 drop-shadow-lg overflow-x-hidden">
        <img src={headerLogoImg} alt="logo Kauê Henrick" className="h-9" />

        <div className="md:hidden flex items-center gap-10">
          <div className="flex gap-5">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <button
            className="z-30"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
          </button>
        </div>

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

        {isMenuOpen && (
          <div
            className="fixed md:hidden inset-0 bg-primary-white dark:bg-primary-black top-0 left-0 w-full h-full z-20 flex flex-col items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <nav className="space-y-6 text-center">
              {["home", "tools", "contact"].map((link) => (
                <div
                  key={link}
                  className={`text-2xl ${selectedLink === link
                    ? 'text-black dark:text-white'
                    : 'text-gray-500 dark:text-gray-400'
                    }`}
                >
                  <a
                    href={`#${link}`}
                    onClick={() => handleClick(link)}
                    className="block py-4"
                  >
                    <T path={`header.${link}`} />
                  </a>
                </div>
              ))}
            </nav>
          </div>
        )}
      </header >

      <main className="bg-secondary-white dark:bg-primary-black dark:text-primary-white overflow-x-hidden">
        <section id="home">
          <div className="flex flex-col max-sm:mt-5 md:flex-row md:justify-between md:min-h-screen px-4 sm:px-10 md:px-20 max-w-7xl mx-auto">
            <section className="space-y-10 w-full md:w-5/12 md:flex md:flex-col md:justify-center">
              <p className="text-xl md:text-2xl font-spacemono">&lt; <T path="main.hello" /> /&gt;</p>

              <div className="space-y-4">
                <p className="font-bold text-3xl md:text-4xl">
                  <T path="main.greetings" /> <br />
                  <span className="text-primary-pink"> <T path="main.title" /> </span>
                </p>
                <p className="text-base md:text-lg"> <T path="main.description" /> </p>

                <div className="flex gap-5 md:gap-7">
                  <a
                    href="https://github.com/kauehenrick"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-medium hover:text-primary-pink transition-colors"
                  >
                    <FaGithub size="20px" />
                    <p>Github</p>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kauehenrick/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-medium hover:text-primary-pink transition-colors"
                  >
                    <FaLinkedin size="20px" />
                    <p>LinkedIn</p>
                  </a>
                </div>
              </div>

              <a
                href="#contact"
                className="bg-primary-pink hover:bg-primary-pink/85 text-white transition duration-200 rounded-sm flex items-center justify-center gap-3 text-sm font-semibold px-4 py-2 w-full md:w-auto self-start"
                onClick={() => handleClick('contact')}
              >
                <p> <T path="main.button" /> </p>
                <FaLaptopCode size="20px" />
              </a>
            </section>

            <div className="flex items-center justify-center w-full md:w-1/2 mt-10 md:mt-0">
              <MagnetLines
                rows={9}
                columns={9}
                containerSize="60vmin"
                lineColor="#EF476F"
                lineWidth="0.8vmin"
                lineHeight="5vmin"
                baseAngle={0}
              />
            </div>
          </div>

          <footer className="bg-primary-pink hidden md:flex h-13 w-full absolute bottom-0 overflow-hidden">
            <div className="relative flex whitespace-nowrap w-full">
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

        <section id="tools" className="flex flex-col md:flex-row justify-between py-20 px-4 sm:px-10 md:px-20 gap-10 max-w-7xl mx-auto">
          <div className="w-full md:w-5/12">
            <h2 className="font-extrabold text-2xl md:text-3xl lg:text-4xl mb-5">
              <T path="main.tools.title1" /> <span className="text-primary-pink"> <T path="main.tools.title2" /> </span>
            </h2>
            <div className="space-y-2">
              <li> <T path="main.tools.list.frontend" /> </li>
              <li> <T path="main.tools.list.backend" /> </li>
              <li> <T path="main.tools.list.design" /> </li>
              <li> <T path="main.tools.list.database" /> </li>
            </div>
          </div>

          <ToolsIconSection />
        </section>

        <section id="contact" className="flex flex-col md:flex-row justify-between pb-20 px-4 sm:px-10 md:px-20 gap-10 max-w-7xl mx-auto">
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