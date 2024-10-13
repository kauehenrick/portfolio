import Header from "../components/Header";
import { CarouselSize } from "@/components/CarouselSize";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
    return (
        <>
            <Header />

            <main className="flex flex-col m-auto md:w-7/12 md:mt-20 md:gap-12">
                <section className="md:flex md:space-x-10">
                    <div className="space-y-5">
                        <p className="text-5xl">Olá, me chamo <br /> <span className="text-pink-primary font-bold">Kauê Henrick</span>!</p>
                        <p className="text-xl font-titillium">&lt; Desenvolvedor Web /&gt;</p>
                        <p className="text-xl">É um prazer te ter aqui, seja bem vindo(a) ao meu portfólio.</p>
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
                    <img src="./src/assets/computer_vector.svg" alt="Imagem gráfica de um computador" />
                </section>

                <CarouselSize />

                <section className="flex flex-col">
                    <p className="text-4xl font-bold">Projetos</p>
                    <p className="text-lg">Alguns dos projetos nos quais trabalhei, tanto pessoais quanto profissionais.</p>

                    <div className="mt-5 space-y-5">
                    <div className="border border-white border-opacity-5 rounded-xl h-20"></div>
                    <div className="border border-white border-opacity-5 rounded-xl h-20"></div>
                    <div className="border border-white border-opacity-5 rounded-xl h-20"></div>
                    </div>
                </section>
            </main>
        </>
    )
}