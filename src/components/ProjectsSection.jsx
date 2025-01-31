import Project from "./Project";

export default function ProjectsSection() {
  return (
    <section className="bg-primary-gray flex flex-col items-center justify-center py-15 gap-y-8">
      <h2 className="font-extrabold text-4xl">Projetos</h2>

      <Project />

      <Project ProjectRow='flex-row-reverse' />
    </section>
  )
}