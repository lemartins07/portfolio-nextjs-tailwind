import Link from 'next/link'
import React from 'react'

type NavLinkItemProps = {
  href: string
  label: string
  icon: React.ReactNode
}

export default function NavLinkItem({ href, icon, label }: NavLinkItemProps) {
  const classColor = 'text-primaryColor pr-2 group-hover:text-gray3'
  return (
    <Link
      href={href}
      className="group p-8 flex items-center justify-center gap-2 text-3xl bg-gray4 flex-1 text-white text-center transition-all hover:bg-primaryColor hover:text-gray3 hover:pb-16"
    >
      {React.cloneElement(icon as React.ReactElement, {
        className: classColor,
      })}
      <span className="md:block hidden">{label}</span>
    </Link>
  )
}
