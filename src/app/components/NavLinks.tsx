import { FaAddressBook, FaBriefcase, FaUser } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'
import NavLinkItem from './NavLinkItem'

export default function NavLinks() {
  const menuLinks = [
    { href: '/', label: 'home', icon: <FaHouse size={24} /> },
    { href: '/about', label: 'about', icon: <FaUser size={24} /> },
    { href: '/portfolio', label: 'portfolio', icon: <FaBriefcase size={24} /> },
    { href: '/contact', label: 'contact', icon: <FaAddressBook size={24} /> },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 flex items-end z-50">
      {menuLinks.map((link) => (
        <NavLinkItem
          key={link.href}
          href={link.href}
          label={link.label}
          icon={link.icon}
        />
      ))}
    </nav>
  )
}
