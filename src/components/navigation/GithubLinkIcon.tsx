import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const GithubLinkIcon = () => {
  return (
    <Link
      href="https://github.com/luthda/nextjs-dev-portfolio"
      className="flex items-center px-2 py-2 text-slate-200 hover:text-white hover:border-white"
      target="_blank"
    >
      <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
    </Link>
  )
}

export default GithubLinkIcon
