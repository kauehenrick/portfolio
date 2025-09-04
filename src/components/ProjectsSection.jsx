import { useTranslation } from "react-i18next";
import imgProject1 from '../assets/project-1-image.webp';
import Project from "./Project";
export default function ProjectsSection() {
  const { t } = useTranslation();

  const projectList = t("main.projects.list", { returnObjects: true });

  const images = [imgProject1];

  return (
    <section className="">
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
