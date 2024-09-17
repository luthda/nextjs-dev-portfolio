import { skills } from "@/components/skills/skills"
import SkillCardsHoverEffect from "@/components/ui/SkillCardsHoverEffect"

const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="flex flex-col py-8 px-0 sm:py-16 xl:px-16">
        <h2 className="text-4xl font-bold mb-6 font-serif">Skills</h2>
        <div className="max-w-full">
          <SkillCardsHoverEffect skills={skills} />
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
