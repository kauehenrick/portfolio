import brasilLogoImg from "../assets/brasil.png";
import euaLogoImg from "../assets/usa.png";
import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { i18n } = useTranslation()

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language);
  }

  return (
    <div className="flex items-center gap-5">
      <img src={brasilLogoImg} alt="Logo do Brasil" className="h-4 cursor-pointer" onClick={() => handleChangeLanguage('pt-BR')} />
      <img src={euaLogoImg} alt="Logo dos EUA" className="h-4 cursor-pointer" onClick={() => handleChangeLanguage('en-US')} />
    </div>
  )
}