import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
	PiEnvelope,
	PiGithubLogo,
	PiLinkedinLogo,
	PiPhone,
} from "react-icons/pi";
import headerLogoImg from "../assets/header-logo.webp";
import kaueWeberImg from "../assets/kaue-weber-image.webp";
import ContactForm from "../components/ContactForm";
import ProjectsSection from "../components/ProjectsSection";
import ThemeToggle from "../components/ThemeToggle";
import ToolsIconSection from "../components/ToolsIconSection";

export const Route = createFileRoute("/")({
	component: Home,
});

export default function Home() {
	const { t } = useTranslation();

	return (
		<div className="bg-primary-white text-primary-black dark:bg-primary-black dark:text-primary-white">
			<main className="md:w-168 mx-5 md:mx-auto">
				<section
					className="flex flex-col md:flex-row justify-between py-12.5 gap-5"
					id="home"
				>
					<div className="flex flex-col gap-6">
						<img
							src={headerLogoImg}
							className="w-25 h-12.25 in-dark:invert"
							alt=""
						/>

						<ul className="flex gap-2 dark:font-light text-sm">
							<li>{t("main.title1")}</li>
							<li>-</li>
							<li>{t("main.title2")}</li>
						</ul>

						<p className="max-w-73.5">{t("main.description")}</p>

						<ul className="flex dark:font-light text-sm gap-3">
							<li className="flex items-center gap-1.5">
								<PiGithubLogo className="font-normal text-base" />
								<a href="https://github.com/kauehenrick" target="blank">
									<p>Github</p>
								</a>
							</li>
							<li className="flex items-center gap-1.5">
								<PiLinkedinLogo className="font-normal text-base" />
								<a href="https://www.linkedin.com/in/kaueweber/" target="blank">
									<p>LinkedIn</p>
								</a>
							</li>
						</ul>
					</div>

					<img
						src={kaueWeberImg}
						className="md:w-54.75 rounded-b md:rounded-r"
						alt=""
					/>
				</section>

				<section className="pb-20" id="services">
					<p className="text-2-5xl mb-6">{t("main.services.title")}</p>

					<ul className="flex flex-col gap-3 text-lg">
						<li>
							<p className="mb-2.5">{t("main.services.service1")}</p>
							<hr />
						</li>

						<li>
							<p className="mb-2.5">{t("main.services.service2")}</p>
							<hr />
						</li>

						<li>
							<p className="mb-2.5">{t("main.services.service3")}</p>
							<hr />
						</li>
					</ul>
				</section>

				<section className="pb-20" id="tools">
					<p className="text-2-5xl mb-6">{t("main.tools.title")}</p>

					<ToolsIconSection />
				</section>

				<section className="pb-20" id="projects">
					<p className="text-2-5xl mb-6">
						<p className="text-2-5xl mb-6">{t("main.projects.title")}</p>
					</p>

					<ProjectsSection />
				</section>

				<section
					className="flex flex-col md:flex-row pb-12.5 gap-10 md:gap-20"
					id="contact"
				>
					<div className="flex flex-col gap-6">
						<h2 className="text-2-5xl md:max-w-52">
							<p className="text-2-5xl">{t("main.contact.title")}</p>
						</h2>

						<p>
							{t("main.contact.description1")} <br />{" "}
							{t("main.contact.description2")}
						</p>

						<ul className="flex flex-col gap-4">
							<li className="flex items-center gap-1.5">
								<PiPhone />
								<p className="dark:font-light text-sm">+55 (77) 9 9943-4338</p>
							</li>

							<li className="flex items-center gap-1.5">
								<PiEnvelope />
								<p className="dark:font-light text-sm">kauehenrick@proton.me</p>
							</li>
						</ul>
					</div>

					<ContactForm />
				</section>
			</main>

			<footer className="dark:bg-secondary-black flex items-center justify-between px-6 h-12.5 md:px-120 border-y-[0.1px] border-primary-gray">
				<p className="darK:font-light text-xs">© 2025 Kauê Weber.</p>

				<div className="flex gap-10">
					<ThemeToggle />

					<ul className="flex gap-1.5">
						<li>
							<a href="https://github.com/kauehenrick" target="blank">
								<PiGithubLogo size="1rem" />
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/kaueweber/" target="blank">
								<PiLinkedinLogo size="1rem" />
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
}
