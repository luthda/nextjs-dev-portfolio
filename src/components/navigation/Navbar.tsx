"use client"
import Link from "next/link"
import { useState } from "react"
import { faBars, faOtter, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { navLinks } from "@/components/navigation/nav_links"
import Navlink from "@/components/navigation/Navlink"
import GithubLinkIcon from "@/components/navigation/GithubLinkIcon"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/[0.2]">
      <div className="flex flex-wrap justify-between items-center mx-auto px-4 py-2">
        <Link
          href="/"
          className="text-slate-200 hover:text-white hover:border-white"
        >
          <FontAwesomeIcon icon={faOtter} className="h-6 w-6" />
        </Link>
        <div className="block md:hidden">
          {!isMenuOpen ? (
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center px-3 py-2 text-slate-200 hover:text-white hover:border-white"
            >
              <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center px-3 py-2 text-slate-200 hover:text-white hover:border-white"
            >
              <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((nav) => (
              <Navlink key={nav.title} link={nav.link} title={nav.title} />
            ))}
            <li>
              <GithubLinkIcon />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
