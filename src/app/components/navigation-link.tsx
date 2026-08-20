'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavigationLinkProps = {
  href: string,
  children: React.ReactNode
}

export function NavigationLink({href, children}: NavigationLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors 
      ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-black'
        }`}
    >
      {children}
    </Link>
  )
}