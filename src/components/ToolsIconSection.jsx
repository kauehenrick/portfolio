import figmaLogoImg from "../assets/figma.svg";
import gitLogoImg from "../assets/git.svg";
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
import zodLogoImg from "../assets/zod.svg";
import zustandLogoImg from "../assets/zustand.svg";
import ToolItem from "./ToolItem";
import nextjsLogoImg from "../assets/nextjs.svg";

const toolsDev = [
	{ img: jsLogoImg, name: "JavaScript" },
	{ img: tsLogoImg, name: "TypeScript" },
	{ img: reactjsLogoImg, name: "ReactJS" },
	{ img: nextjsLogoImg, name: "NextJS" },
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
	{ img: psLogoImg, name: "Photoshop" },
	{ img: figmaLogoImg, name: "Figma" },
];

export default function ToolsIconSection() {
	return (
		<section className="flex flex-wrap gap-2">
			{toolsDev.map((tool, index) => (
				<ToolItem key={index} name={tool.name} img={tool.img} />
			))}
		</section>
	);
}
