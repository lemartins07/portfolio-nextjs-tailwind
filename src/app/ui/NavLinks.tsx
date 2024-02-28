import Link from 'next/link'
import { FaAddressBook, FaBriefcase, FaUser } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'

export default function NavLinks() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex items-end z-50">
      <Link
        href="/"
        className="group p-8 flex items-center justify-center gap-2 text-3xl bg-gray4 flex-1 text-white text-center transition-all hover:bg-primaryColor hover:text-gray3 hover:pb-16"
      >
        <FaHouse
          size={24}
          className="text-primaryColor pr-2 group-hover:text-gray3"
        />
        <span className="md:block hidden">home</span>
      </Link>
      <Link
        href="/about"
        className="group p-8 flex items-center justify-center gap-4 text-3xl bg-gray4 flex-1 text-white text-center transition-all hover:bg-primaryColor hover:text-gray3 hover:pb-16"
      >
        <FaUser
          size={24}
          className="text-primaryColor pr-2 group-hover:text-gray3"
        />
        <span className="md:block hidden">about</span>
      </Link>
      <Link
        href="/portfolio"
        className="group p-8 flex items-center justify-center gap-2 text-3xl bg-gray4 flex-1 text-white text-center transition-all hover:bg-primaryColor hover:text-gray3 hover:pb-16"
      >
        <FaBriefcase
          size={24}
          className="text-primaryColor pr-2 group-hover:text-gray3"
        />
        <span className="md:block hidden">portfolio</span>
      </Link>
      <Link
        href="/contact"
        className="group p-8 flex items-center justify-center gap-2 text-3xl bg-gray4 flex-1 text-white text-center transition-all hover:bg-primaryColor hover:text-gray3 hover:pb-16"
      >
        <FaAddressBook
          size={24}
          className="text-primaryColor pr-2 group-hover:text-gray3"
        />
        <span className="md:block hidden">contact</span>
      </Link>
    </nav>
  )
}
