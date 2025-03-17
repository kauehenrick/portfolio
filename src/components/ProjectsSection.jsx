import Project from "./Project";
import T from "../components/i18n/Translator"

export default function ProjectsSection() {
  return (
    <section className="bg-primary-white dark:bg-primary-black flex flex-col justify-center pb-35 md:px-80">
      <h2 className="font-extrabold text-4xl mb-5"><span className="text-primary-pink"> <T path="main.projects.title1" /> </span> <T path="main.projects.title2" /> </h2>
      <p> <T path="main.projects.description" /> </p>

      <Project GithubLink="/" SeeMoreLink="/" />

      <Project ProjectRow="flex-row-reverse" SeeMoreLink="/" />
    </section>
  )
}