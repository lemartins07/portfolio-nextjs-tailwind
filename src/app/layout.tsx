import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import NavLinks from './ui/NavLinks'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'lemartins07 Porfolio',
  description: 'Leandro Martins developer portfolio made in Nextjs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavLinks />
        {children}
      </body>
    </html>
  )
}
