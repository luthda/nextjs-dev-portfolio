import { Skill } from "@/components/skills/skills"
import Image from "next/image"

export const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
      <div className="relative z-50">
        <div className="p-4">
          <div className="flex justify-between items-center text-zinc-100 font-bold tracking-wide mt-4">
            <h4>{skill.title}</h4>
            <Image
              src={skill.src}
              alt={skill.alt}
              width={40}
              height={40}
              className="ml-4 rounded-full"
            />
          </div>
          <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
            {skill.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
