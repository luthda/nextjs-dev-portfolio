"use client"
import ProjectFocusCard from "@/components/projects/ProjectFocusCard"
import { Project } from "@/components/projects/projects"
import { useState } from "react"

const ProjectCardsFocusEffect = ({ projects }: { projects: Project[] }) => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mx-auto md:px-8 w-full">
      {projects.map((project, index) => (
        <ProjectFocusCard
          key={project.title}
          card={project}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  )
}

export default ProjectCardsFocusEffect
