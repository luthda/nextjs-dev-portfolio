import Footer from "@/components/Footer"
import Navbar from "@/components/navigation/Navbar"
import AboutSection from "@/components/sections/AboutSection"
import HeroSection from "@/components/sections/HeroSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import SkillsSection from "@/components/sections/SkillsSection"

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  )
}
