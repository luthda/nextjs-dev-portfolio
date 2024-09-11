import { TypewriterEffect } from "@/components/ui/TypewriterEffect"
import Image from "next/image"

const HeroSection = () => {
  const words = [{ text: "John" }, { text: "Doe" }]

  return (
    <section className="pt-0 pb-16 px-4 sm:py-24 xl:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-left justify-self-start">
          <div className="-mx-3 sm:mx-0">
            <TypewriterEffect words={words} className="font-serif" />
          </div>
          <p className="text-base sm:text-lg mb-6 lg:text-xl">
            Building bridges between code and operations, I craft scalable
            software solutions that deliver seamless user experiences.
          </p>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <Image
            src="/assets/hero.png"
            alt="John Doe hero image"
            priority={true}
            className="rounded-lg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
