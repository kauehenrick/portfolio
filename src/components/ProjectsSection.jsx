import { useTranslation } from "react-i18next";
import imgProject1 from '../assets/project-1-image.webp';
import Project from "./Project";
export default function ProjectsSection() {
  const { t } = useTranslation();

  const projectList = t("main.projects.list", { returnObjects: true });

  const images = [imgProject1];

  return (
    <section className="flex flex-col justify-between py-30 px-4 sm:px-10 md:px-80 gap-5 mx-auto">
      <h2 className="font-extrabold text-4xl mb-5">
        <span className="text-primary-pink">{t("main.projects.title1")}</span> {t("main.projects.title2")}
      </h2>
      <p>{t("main.projects.description")}</p>

      {Object.values(projectList).map((proj, index) => (
        <Project
          key={index}
          ProjectTitle={proj.title}
          ProjectSubtitle={proj.subtitle}
          ProjectDescription={proj.description}
          ProjectImage={images[index]}
          ProjectTools={proj.tools}
          SeeMoreLink={proj.seeMoreLink}
          GithubLink={proj.githubLink}
          ProjectRow={index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
        />
      ))}
    </section>
  );
}
