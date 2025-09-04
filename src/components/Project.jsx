import { FaArrowRight, FaGithub } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

import PropTypes from 'prop-types';

export default function Project({ ProjectTitle, ProjectSubtitle, ProjectDescription, ProjectImage, ProjectTools, SeeMoreLink, GithubLink }) {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row gap-6 rounded-lg drop-shadow-lg w-full" >
      <img
        src={ProjectImage}
        alt="Imagem referente ao projeto"
        className="border-[0.25px] border-gray-300/10 rounded-lg md:rounded-l-lg object-cover md:w-75 h-auto"
      />

      <main className="flex flex-col justify-between h-[auto] min-h-full">
        <div>
          <p className="text-xl font-semibold">{ProjectTitle}</p>
          <p className="text-xs font-light mt-2 mb-3 ">{ProjectSubtitle}</p>
          <p className="text-sm">{ProjectDescription}</p>

          <div className="flex gap-3 mt-3 flex-wrap">
            {ProjectTools.map((skill) => (
              <div
                key={skill}
                className="flex justify-center items-center text-[0.625rem] font-light"
              >
                <p>
                  #{skill}
                </p>
              </div>
            ))}
          </div>
        </div>

        <footer className="flex justify-between items-center text-sm mt-auto mb-2 pt-2">
          {SeeMoreLink && (
            <a
              className="flex items-center gap-2 cursor-pointer"
              href={SeeMoreLink}
              target="blank"
            >
              <p className="font-light">{t("main.projects.button")}</p>
              <FaArrowRight />
            </a>
          )}
          {GithubLink && (
            <a
              className="flex items-center gap-2 cursor-pointer"
              href={GithubLink}
              target="blank"
            >
              <FaGithub />
              <p>Github</p>
            </a>
          )}
        </footer>
      </main>
    </section>
  )
}

Project.propTypes = {
  ProjectTitle: PropTypes.string.isRequired,
  ProjectSubtitle: PropTypes.string.isRequired,
  ProjectDescription: PropTypes.string.isRequired,
  ProjectImage: PropTypes.string.isRequired,
  ProjectTools: PropTypes.arrayOf(PropTypes.string),
  SeeMoreLink: PropTypes.string,
  GithubLink: PropTypes.string,
}

Project.defaultProps = {
  ProjectTitle: "Projeto Teste",
  ProjectSubtitle: "Lorem Ipsum",
  ProjectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  ProjectImage: "https://etzq49yfnmd.exactdn.com/wp-content/uploads/2022/03/cicero_gradient.png?strip=all&lossy=1&ssl=1",
  ProjectTools: [
    "Visual Studio Code",
    "Git",
    "Node.js",
    "Webpack",
    "Postman",
    "Docker"
  ]
}