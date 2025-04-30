'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import logo from '../assets/pokeball.png'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* <Link href="/">
          <Image src={logo} alt="Logo" width={40} height={40} />
        </Link> */}
        <Link href="/" className="text-logo">
          <h1>Bim Rai</h1>
        </Link>
      </div>
      <div className="navbar-right">
        <ul>
          <li><Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link href="/projects" className={pathname === "/projects" ? "active" : ""}>Projects</Link></li>
          <li><Link href="/about" className={pathname === "/about" ? "active" : ""}>About</Link></li>
          <li><Link href="/contacts" className={pathname === "/contacts" ? "active" : ""}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
