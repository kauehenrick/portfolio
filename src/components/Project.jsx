import { FaArrowRight, FaGithub } from "react-icons/fa6";

import PropTypes from 'prop-types';

export default function Project({ ProjectTitle, ProjectSubtitle, ProjectDescription, ProjectImage, ProjectRow, ProjectTools, SeeMoreLink, GithubLink }) {
  return (
    <section className={`flex ${ProjectRow} rounded-lg p-5 drop-shadow-lg gap-2 w-8/12`}>

      <img src={ProjectImage} alt="Imagem referente ao projeto" className='border-[0.25px] border-gray-300/10 rounded-lg object-cover w-96' />

      <main className='flex flex-col gap-2 border-[0.25px] border-gray-300/10 rounded-lg px-5 py-3'>
        <p className='text-lg font-semibold'>{ProjectTitle}</p>
        <p className='text-sm'>{ProjectSubtitle}</p>
        <p className='text-xs'>{ProjectDescription}</p>

        <div className='flex gap-2'>
          {ProjectTools.map((skill => {
            return (
              <div key={skill} className="bg-primary-pink flex justify-center items-center rounded-xl py-1 px-2 text-[10px]">
                <p><span>&lt;/&gt;</span> {skill}</p>
              </div>
            )
          }))}
        </div>

        <footer className="flex flex-row-reverse justify-between items-center text-sm mt-9">
          {SeeMoreLink
            ? <a className="flex items-center gap-2 cursor-pointer" href={SeeMoreLink} target="blank">
              <p>Ver mais</p>
              <FaArrowRight />
            </a>
            : null}

          {GithubLink
            ? <a className="flex items-center gap-2 cursor-pointer" href={GithubLink} target="blank">
              <FaGithub />
              <p>Github</p>
            </a>
            : null}
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
  ProjectRow: PropTypes.string,
  ProjectTools: PropTypes.arrayOf(PropTypes.string),
  SeeMoreLink: PropTypes.string,
  GithubLink: PropTypes.string,
}

Project.defaultProps = {
  ProjectTitle: "Projeto Teste",
  ProjectSubtitle: "Lorem Ipsum",
  ProjectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  ProjectImage: "https://etzq49yfnmd.exactdn.com/wp-content/uploads/2022/03/cicero_gradient.png?strip=all&lossy=1&ssl=1",
  ProjectRow: "flex-row",
  ProjectTools: [
    "Visual Studio Code",
    "Git",
    "Node.js",
    "Webpack",
    "Postman",
    "Docker"
  ]
}