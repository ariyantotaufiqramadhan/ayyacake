'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X, Menu } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Prevent body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Detect scroll for navbar style
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#menu', label: 'Menu' },
    { href: '#cara-order', label: 'Cara Order' },
    { href: '#kontak', label: 'Kontak' },
  ]

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream/80 shadow-md backdrop-blur-md'
            : 'bg-cream shadow-sm'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:h-20">
            {/* Logo */}
            <Link href="/" className="block flex-shrink-0">
              <Image
                src="/images/logo-ayya.png"
                alt="AYYA Cake"
                width={120}
                height={60}
                className="h-12 w-auto sm:h-14 md:h-16"
                priority
              />
            </Link>

            {/* Desktop Navigation - Right aligned */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative font-body text-base font-semibold text-dark-raspberry transition-colors hover:text-raspberry"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-raspberry transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full text-raspberry transition-colors hover:bg-soft-pink/50 md:hidden"
              onClick={() => setIsOpen(true)}
              aria-label="Buka menu"
              aria-expanded={isOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col bg-cream transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Overlay Header */}
        <div className="flex items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/images/logo-ayya.png"
              alt="AYYA Cake"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-soft-pink/40 text-raspberry transition-colors hover:bg-soft-pink"
            onClick={() => setIsOpen(false)}
            aria-label="Tutup menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Centered Nav Links */}
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="w-56 rounded-2xl px-8 py-4 text-center font-body text-2xl font-bold text-dark-raspberry transition-all duration-200 hover:bg-soft-pink/40 hover:text-raspberry"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom tagline */}
        <p className="pb-10 text-center font-body text-sm text-raspberry/50">
          Dibuat khusus, spesial untukmu
        </p>
      </div>
    </>
  )
}
