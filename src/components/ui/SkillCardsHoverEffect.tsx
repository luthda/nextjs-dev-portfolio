"use client"
import { cn } from "@/utils/cn"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Skill } from "@/components/skills/skills_data"

export const SkillCardsHoverEffect = ({
  skills,
  className,
}: {
  skills: Skill[]
  className?: string
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3",
        className
      )}
    >
      {skills.map((skill, idx) => (
        <Link
          href={skill.href}
          key={skill.href}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle image={skill.image} alt={skill.alt}>
              {skill.title}
            </CardTitle>
            <CardDescription>{skill.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

export const CardTitle = ({
  className,
  children,
  image,
  alt,
}: {
  className?: string
  children: React.ReactNode
  image: string
  alt: string
}) => {
  return (
    <div
      className={cn(
        "flex justify-between items-center text-zinc-100 font-bold tracking-wide mt-4",
        className
      )}
    >
      <h4>{children}</h4>
      <Image
        src={image}
        alt={alt}
        width={40}
        height={40}
        className="ml-4 rounded-full"
      />
    </div>
  )
}

export const CardDescription = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  )
}
