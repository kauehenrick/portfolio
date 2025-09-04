//import { useState } from "react";
import { PiEnvelope, PiGithubLogo, PiLinkedinLogo, PiPhone } from "react-icons/pi";
import headerLogoImg from "../assets/header-logo.webp";
import kaueWeberImg from "../assets/kaue-weber-image.webp";
import ContactForm from "../components/ContactForm";
import ProjectsSection from "../components/ProjectsSection";
import ToolsIconSection from "../components/ToolsIconSection";

export default function Home() {
  /*const [selectedLink, setSelectedLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (link) => {
    setSelectedLink(link);
    setIsMenuOpen(false);
  };*/

  return (
    <div className="bg-primary-white text-primary-black dark:bg-primary-black dark:text-primary-white">
      {/*<header className="bg-primary-white dark:bg-primary-black dark:text-primary-white w-full fixed top-0 z-10 flex items-center justify-between px-5 md:px-80 py-4 drop-shadow-lg overflow-x-hidden">
        <img src={headerLogoImg} alt="logo Kauê Henrick" className="h-11 in-dark:invert" />

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
              {["home", "tools", "projects", "contact"].map((link) => (
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
      </header >*/}

      <main className="md:w-168 mx-5 md:mx-auto">
        <section className="flex flex-col md:flex-row justify-between py-12.5 gap-5" id="home">
          <div className="flex flex-col gap-6">
            <img src={headerLogoImg} className="w-25 h-12.25 in-dark:invert" alt="" />

            <ul className="flex gap-2 font-light text-sm">
              <li>Desenvolvedor Frontend</li>
              <li>-</li>
              <li>Webdesigner</li>
            </ul>

            <p className="max-w-73.5">Especializado em criar páginas atraentes e eficientes, proporcionando a melhor experiência para o usuário final.</p>

            <ul className="flex font-light text-sm gap-3">
              <li className="flex items-center gap-1.5">
                <PiGithubLogo className="font-normal text-base" />
                <a href="https://github.com/kauehenrick" target="blank"><p>Github</p></a>
              </li>
              <li className="flex items-center gap-1.5">
                <PiLinkedinLogo className="font-normal text-base" />
                <a href="https://www.linkedin.com/in/kaueweber/" target="blank"><p>LinkedIn</p></a>
              </li>
            </ul>
          </div>

          <img src={kaueWeberImg} className="md:w-54.75 rounded-b md:rounded-r" alt="" />
        </section>

        <section className="pb-20" id="services">
          <p className="text-2.5xl mb-6">Serviços</p>

          <ul className="flex flex-col gap-3 text-lg">
            <li>
              <p className="mb-2.5">Sites e Landing Pages</p>
              <hr />
            </li>

            <li>
              <p className="mb-2.5">Flyers e Banners</p>
              <hr />
            </li>

            <li>
              <p className="mb-2.5">Identidade visual</p>
              <hr />
            </li>
          </ul>
        </section>

        <section className="pb-20" id="tools">
          <p className="text-2.5xl mb-6">Ferramentas</p>

          <ToolsIconSection />
        </section>

        <section className="pb-20" id="projects">
          <p className="text-2.5xl mb-6">Projetos</p>

          <ProjectsSection />
        </section>

        <section className="flex flex-col md:flex-row pb-12.5 gap-10 md:gap-20" id="contact">
          <div className="flex flex-col gap-6">
            <h2 className="text-2.5xl md:max-w-52">Vamos trabalhar juntos?</h2>

            <p>Quer saber mais sobre meu trabalho ou apenas bater um papo? Envie-me uma mensagem. <br /> Estou esperando seu contato!</p>

            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-1.5">
                <PiPhone />
                <p className="font-light text-sm">+55 (77) 9 9943-4338</p>
              </li>

              <li className="flex items-center gap-1.5">
                <PiEnvelope />
                <p className="font-light text-sm">kauehenrick@proton.me</p>
              </li>
            </ul>
          </div>

          <ContactForm />
        </section>
      </main>

      <footer className="bg-secondary-black flex items-center justify-between px-6 h-12.5 md:px-120 border-y-[0.1px] border-primary-gray">
        <p className="font-light text-xs">© 2025 Kauê Weber.</p>

        <ul className="flex gap-1.5">
          <li><a href="https://github.com/kauehenrick" target="blank"><PiGithubLogo size="1rem" /></a></li>
          <li><a href="https://www.linkedin.com/in/kaueweber/" target="blank"><PiLinkedinLogo size="1rem" /></a></li>
        </ul>
      </footer>
    </div>
  )
}