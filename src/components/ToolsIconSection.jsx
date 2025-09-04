import elementorLogoImg from "../assets/elementor.svg";
import figmaLogoImg from "../assets/figma.svg";
import gitLogoImg from "../assets/git.svg";
import illustratorLogoImg from "../assets/illustrator.svg";
import jsLogoImg from "../assets/javascript.svg";
import linuxLogoImg from "../assets/linux.svg";
import mysqlLogoImg from "../assets/mysql.svg";
import nestjsLogoImg from "../assets/nestjs.svg";
import nodejsLogoImg from "../assets/nodejs.svg";
import psLogoImg from "../assets/photoshop.svg";
import postgresqlLogoImg from "../assets/postgresql.svg";
import reactjsLogoImg from "../assets/reactjs.svg";
import shadcnuiLogoImg from "../assets/shadcnui.svg";
import tailwindcssLogoImg from "../assets/tailwindcss.svg";
import tsLogoImg from "../assets/typescript.svg";
import wpLogoImg from "../assets/wordpress.svg";
import zodLogoImg from "../assets/zod.svg";
import zustandLogoImg from "../assets/zustand.svg";

const toolsDesign = [
  { img: psLogoImg, name: "Photoshop" },
  { img: figmaLogoImg, name: "Figma" },
  { img: wpLogoImg, name: "Wordpress" },
  { img: elementorLogoImg, name: "Elementor" },
  { img: illustratorLogoImg, name: "Illustrator" },
];

const toolsDev = [
  { img: jsLogoImg, name: "JavaScript" },
  { img: tsLogoImg, name: "TypeScript" },
  { img: reactjsLogoImg, name: "ReactJS" },
  { img: tailwindcssLogoImg, name: "TailwindCSS" },
  { img: shadcnuiLogoImg, name: "shadcn/ui" },
  { img: zustandLogoImg, name: "Zustand" },
  { img: zodLogoImg, name: "Zod" },
  { img: nodejsLogoImg, name: "Node.js" },
  { img: nestjsLogoImg, name: "NestJS" },
  { img: gitLogoImg, name: "Git" },
  { img: linuxLogoImg, name: "Linux" },
  { img: postgresqlLogoImg, name: "PostgreSQL" },
  { img: mysqlLogoImg, name: "MySQL" },
];

export default function ToolsIconSection() {
  return (
    <>
      <section className="flex flex-wrap gap-2 mb-7.5">
        {toolsDesign.map((tool, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1.5 border-[0.1px] border-primary-gray rounded w-fit"
          >
            <img src={tool.img} alt={`${tool.name} logo`} className="h-4" />
            <p className="font-light text-sm">{tool.name}</p>
          </div>
        ))}
      </section>

      <section className="flex flex-wrap gap-2">
        {toolsDev.map((tool, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1.5 border-[0.1px] border-primary-gray rounded w-fit"
          >
            <img src={tool.img} alt={`${tool.name} logo`} className="h-4" />
            <p className="font-light text-sm">{tool.name}</p>
          </div>
        ))}
      </section>
    </>
  );
}



