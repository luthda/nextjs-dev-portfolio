import { projects } from "@/components/projects/projects"
import ProjectCardsFocusEffect from "@/components/ui/ProjectCardsFocusEffect"

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="flex flex-col py-8 px-0 sm:py-16 xl:px-16">
        <h2 className="text-4xl font-bold mb-6 font-serif">Projects</h2>
        <div className="max-w-full">
          <ProjectCardsFocusEffect projects={projects} />
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
