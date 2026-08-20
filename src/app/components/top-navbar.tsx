import { Link } from 'next/link';
import { NavigationLink } from '@/app/components/navigation-link'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Über Uns', href: '/about' },
  { label: 'Kontakt', href: '/contact' },
]

export function TopNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <nav className="hidden md:flex items-center space-x-2">
        {navItems.map((item, i) => (
          <NavigationLink key={item.href} href={item.href}>
            {item.label}
          </NavigationLink>
        ))}
      </nav>
    </header>
  )
}
