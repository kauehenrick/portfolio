import { useTranslation } from "react-i18next";
import figmaLogoImg from "../assets/figma.svg";
import gitLogoImg from "../assets/git.svg";
import jsLogoImg from "../assets/javascript.svg";
import laravelLogoImg from "../assets/laravel.svg";
import linuxLogoImg from "../assets/linux.svg";
import mysqlLogoImg from "../assets/mysql.svg";
import nestjsLogoImg from "../assets/nestjs.svg";
import nextjsLogoImg from "../assets/nextjs.svg";
import nodejsLogoImg from "../assets/nodejs.svg";
import psLogoImg from "../assets/photoshop.svg";
import phpLogoImg from "../assets/php.svg";
import postgresqlLogoImg from "../assets/postgresql.svg";
import reactjsLogoImg from "../assets/reactjs.svg";
import shadcnuiLogoImg from "../assets/shadcnui.svg";
import tailwindcssLogoImg from "../assets/tailwindcss.svg";
import tsLogoImg from "../assets/typescript.svg";
import vuejsLogoImg from "../assets/vuejs.svg";
import vuetifyLogoImg from "../assets/vuetify.svg";
import zodLogoImg from "../assets/zod.svg";
import zustandLogoImg from "../assets/zustand.svg";
import ToolItem from "./ToolItem";

const mainStack = [
	{ img: tsLogoImg, name: "TypeScript" },
	{ img: jsLogoImg, name: "JavaScript" },
	{ img: reactjsLogoImg, name: "ReactJS" },
	{ img: nextjsLogoImg, name: "NextJS" },
	{ img: nodejsLogoImg, name: "Node.js" },
	{ img: nestjsLogoImg, name: "NestJS" },
	{ img: postgresqlLogoImg, name: "PostgreSQL" },
];

const secondaryStack = [
	{ img: vuejsLogoImg, name: "VueJS" },
	{ img: tailwindcssLogoImg, name: "TailwindCSS" },
	{ img: shadcnuiLogoImg, name: "shadcn/ui" },
	{ img: vuetifyLogoImg, name: "Vuetify" },
	{ img: zustandLogoImg, name: "Zustand" },
	{ img: zodLogoImg, name: "Zod" },
	{ img: mysqlLogoImg, name: "MySQL" },
	{ img: phpLogoImg, name: "PHP" },
	{ img: laravelLogoImg, name: "Laravel" },
];

const supportTools = [
	{ img: gitLogoImg, name: "Git" },
	{ img: linuxLogoImg, name: "Linux" },
	{ img: figmaLogoImg, name: "Figma" },
	{ img: psLogoImg, name: "Photoshop" },
];

function ToolsGroup({ title, tools }) {
	return (
		<div className="flex flex-col gap-3">
			<h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
			<section className="flex flex-wrap gap-2">
				{tools.map((tool, index) => (
					<ToolItem key={index} name={tool.name} img={tool.img} />
				))}
			</section>
		</div>
	);
}

export default function ToolsIconSection() {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col gap-6">
			<ToolsGroup title={t("main.tools.subtitle1")} tools={mainStack} />
			<ToolsGroup title={t("main.tools.subtitle2")} tools={secondaryStack} />
			<ToolsGroup title={t("main.tools.subtitle3")} tools={supportTools} />
		</div>
	);
}
