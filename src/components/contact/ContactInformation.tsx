import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const ContactInformation = () => {
  return (
    <div className="p-4 lg:p-8">
      <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-2">
          <h4 className="text-xl font-medium text-white">Email</h4>
          <Link
            href="mailto:ethan.frost@mail.com"
            className="flex items-center space-x-2 text-xl text-slate-200 hover:text-white"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="inline-block w-6 h-6"
            />
            <span className="text-slate-200 hover:text-white">
              ethan.frost@mail.com
            </span>
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="text-xl font-medium text-white">Socials</h4>
          <div className="flex flex-row space-x-8">
            <Link
              href="https://www.linkedin.com/"
              className="flex items-center space-x-2 text-xl text-slate-200 hover:text-white"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="inline-block w-6 h-6"
              />
              <span>LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/luthda/nextjs-dev-portfolio"
              className="flex items-center space-x-2 text-xl text-slate-200 hover:text-white"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="inline-block w-6 h-6"
              />
              <span className="text-slate-200 hover:text-white">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInformation
