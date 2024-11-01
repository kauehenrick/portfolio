import { CarouselSize } from "@/components/CarouselSize";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import { ModeToggle } from "@/components/ui/mode-toggle";

import brazilFlagImg from "../assets/brazil-flag.svg";
import usaFlagImg from "../assets/usa-flag.svg";
import khiconImg from "../assets/khicon.svg";
import computervectorImg from "../assets/computer_vector.svg";
import womenatwork from "../assets/women-at-work.jpeg";

export default function Home() {
    const [activeLink, setActiveLink] = useState(window.location.hash || '#home');

    const handleClick = (link: string) => {
        setActiveLink(link);
    };

    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    }

    const navbarItems = [
        { name: t("navbarItems.home"), src: "#top" },
        { name: t("navbarItems.projects"), src: "#projects" },
        { name: t("navbarItems.contact"), src: "#contact" },
    ]

    return (
        <>
            <header className='flex justify-between m-auto mt-2.5 md:w-7/12 px-5 py-2 backdrop-blur-xl border border-white border-opacity-5 rounded-xl sticky top-0 z-50'>
                <img src={khiconImg} alt="logo Kauê Henrick" />

                <nav className='flex items-center text-md gap-5'>
                    {navbarItems.map((item) => (
                        <a
                            key={item.src}
                            href={item.src}
                            className={`relative ${activeLink === item.src
                                ? 'font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-pink-primary'
                                : 'hover:font-semibold'
                                } after:transition-transform after:duration-300 after:scale-x-100`}
                            onClick={() => handleClick(item.src)}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                <div className="flex gap-7">
                    <div className="flex items-center gap-3">
                        <img className="size-5 cursor-pointer" src={brazilFlagImg} alt="bandeira do brasil" onClick={() => handleChangeLanguage("br")} />
                        <img className="size-5 cursor-pointer" src={usaFlagImg} alt="bandeira dos estados unidos" onClick={() => handleChangeLanguage("en")} />
                    </div>

                    <ModeToggle />
                </div>
            </header>

            <main className="flex flex-col m-auto md:w-7/12 md:mt-20 md:gap-12">
                <section className="md:flex md:space-x-10">
                    <div className="space-y-5">
                        <p className="text-5xl">{t("greetingsHeader")} <br /> <span className="text-pink-primary font-bold">Kauê Henrick</span>!</p>
                        <p className="text-xl font-titillium">&lt; {t("jobDescription")} /&gt;</p>
                        <p className="text-xl">{t("greetingsDescription")}</p>
                        <div className="flex space-x-7">
                            <a className="flex items-center cursor-pointer gap-2" href="https://github.com/kauehenrick" target="blank_">
                                <FaGithub size={'30px'} color="#EF476F" />
                                <p className="font-semibold">Github</p>
                            </a>
                            <a className="flex items-center cursor-pointer gap-2" href="https://www.linkedin.com/in/kauehenrick/" target="blank_">
                                <FaLinkedin size={'30px'} color="#EF476F" />
                                <p className="font-semibold">LinkedIn</p>
                            </a>
                        </div>
                    </div>
                    <img src={computervectorImg} alt="Imagem gráfica de um computador" />
                </section>

                <CarouselSize />

                <section className="flex flex-col" id="projects">
                    <p className="text-4xl font-bold">{t("navbarItems.projects")}</p>
                    <p className="text-lg">{t("projectDescription")}</p>

                    <div className="flex gap-5 mt-5">
                        <img className="h-80 border border-white border-opacity-5 rounded-xl" src={womenatwork} alt="" />
                        <div>
                            <p className="font-semibold text-xl mt-2">{t("tempProject.header")}</p>
                            <p>{t("tempProject.description")}</p>
                        </div>
                    </div>
                </section>

                <section id="contact">
                    <p className="text-4xl font-bold">{t("navbarItems.contact")}</p>

                    <ContactForm />
                </section>

                <footer className="space-y-1 mb-5">
                    <p className="font-semibold text-xl">Kauê Henrick</p>
                    <p>Sítio Grande, Bahia, Brasil</p>
                    <p>© kauehenrick, 2024</p>
                </footer>
            </main>
        </>
    )
}