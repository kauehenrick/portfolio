import jsLogoImg from "../assets/js.svg";
import tsLogoImg from "../assets/ts.svg";
import html5LogoImg from "../assets/html5.svg";
import css3LogoImg from "../assets/css3.svg";
import reactjsLogoImg from "../assets/reactjs.svg";
import tailwindcssLogoImg from "../assets/tailwindcss.svg";
import shadcnuiLogoImg from "../assets/shadcnui.svg";
import zustandLogoImg from "../assets/zustand.svg";
import zodLogoImg from "../assets/zod.svg";
import figmaLogoImg from "../assets/figma.svg";
import nodejsLogoImg from "../assets/nodejs.svg";
import postgresqlLogoImg from "../assets/postgresql.svg";
import mysqlLogoImg from "../assets/mysql.svg";
import gitLogoImg from "../assets/git.svg";
import linuxLogoImg from "../assets/linux.svg";

const tools = [
  { img: jsLogoImg, name: "JavaScript" },
  { img: tsLogoImg, name: "TypeScript" },
  { img: html5LogoImg, name: "HTML5" },
  { img: css3LogoImg, name: "CSS3" },
  { img: reactjsLogoImg, name: "ReactJS" },
  { img: tailwindcssLogoImg, name: "TailwindCSS" },
  { img: shadcnuiLogoImg, name: "ShadCN UI" },
  { img: zustandLogoImg, name: "Zustand" },
  { img: zodLogoImg, name: "Zod" },
  { img: figmaLogoImg, name: "Figma" },
  { img: nodejsLogoImg, name: "Node.js" },
  { img: postgresqlLogoImg, name: "PostgreSQL" },
  { img: mysqlLogoImg, name: "MySQL" },
  { img: gitLogoImg, name: "Git" },
  { img: linuxLogoImg, name: "Linux" },
];

export default function ToolsIconSection() {
  return (
    <div className="grid grid-cols-5 gap-11">
      {tools.map((tool, index) => (
        <div key={index} className="relative flex flex-col items-center group">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-24 h-24 bg-primary-pink rounded-full blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <img
              src={tool.img}
              alt={tool.name}
              className="w-20 h-20 cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
          <span className="absolute bottom-0 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded px-2 py-1 transition-opacity duration-300">
            {tool.name}
          </span>
        </div>
      ))}
    </div>
  );
}



