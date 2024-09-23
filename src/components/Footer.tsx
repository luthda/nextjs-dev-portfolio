import Link from "next/link"

const Footer = () => {
  return (
    <footer className="footer z-20 border-t border-white/[0.2]">
      <div className="flex flex-col p-12">
        <p className="text-sm text-center mb-2">© 2024. All rights reserved.</p>
        <Link
          href="/imprint"
          className="text-sm text-center text-slate-200 hover:text-white"
        >
          Imprint
        </Link>
      </div>
    </footer>
  )
}

export default Footer
