import Link from "next/link"

const Navlink = ({ link, title }: { link: string; title: string }) => {
  return (
    <Link
      href={link}
      className="block py-2 pl-3 pr-4 text-slate-200 text-lg sm:text-xl rounded hover:text-white"
    >
      {title}
    </Link>
  )
}

export default Navlink
