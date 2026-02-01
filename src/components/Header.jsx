import React, { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'My Work' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <header className="header">
      <a href="#" className="header-logo">RYAN</a>
      <button
        className="header-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? '×' : '☰'}
      </button>
      <nav className={`header-nav ${open ? 'open' : ''}`}>
        {links.map(({ href, label }) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
