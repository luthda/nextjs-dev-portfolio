import Footer from "@/components/Footer"
import Navbar from "@/components/navigation/Navbar"
import AboutSection from "@/components/sections/AboutSection"
import HeroSection from "@/components/sections/HeroSection"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
      </div>
      <Footer />
    </main>
  )
}
