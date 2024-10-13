import brazilFlagImg from "../../assets/brazil-flag.svg";
import usaFlagImg from "../../assets/usa-flag.svg";

export default function Header() {
    return (
        <div className='flex justify-between m-auto mt-2.5 md:w-7/12 px-5 py-2 backdrop-blur-xl border border-white border-opacity-5 rounded-xl sticky top-0 z-50'>
            <img src="./src/assets/khicon.svg" alt="logo Kauê Henrick" />

            <nav className='flex items-center text-md gap-5'>
                <p className="cursor-pointer">Início</p>
                <p className="cursor-pointer">Sobre</p>
                <p className="cursor-pointer">Projetos</p>
                <p className="cursor-pointer">Contato</p>
            </nav>

            <div className="flex items-center gap-3">
                <img className="size-5 cursor-pointer" src={brazilFlagImg} alt="bandeira do brasil" />
                <img className="size-5 cursor-pointer" src={usaFlagImg} alt="bandeira dos estados unidos" />
            </div>
        </div>
    )
}