"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const primary = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const companies = [
  { href: "/stitch", label: "Stitch", full: "Supreme Stitch Ltd." },
  { href: "/outfit", label: "Outfit", full: "Supreme Outfit Ltd." },
  { href: "/accessories", label: "Accessories", full: "Supreme Accessories Industries Ltd." },
  { href: "/embellishment", label: "Embellishment", full: "Supreme Embellishment Ltd." },
  { href: "/ecobricks", label: "Eco Bricks", full: "Supreme Eco Bricks & Agro Ltd." },
  { href: "/sweets", label: "Sweets", full: "Supreme Sweets" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link href="/" className="nav-logo" aria-label="Supreme Group, home">
          <Logo />
        </Link>

        <div className="desktop-nav">
          {primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link${isActive(item.href) ? " is-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}

          <span className="nav-divider" aria-hidden="true" />

          {companies.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              title={c.full}
              className={`nav-link${isActive(c.href) ? " is-active" : ""}`}
            >
              {c.label}
            </Link>
          ))}

          <span className="nav-divider" aria-hidden="true" />

          <Link
            href="/contact"
            className={`nav-link${isActive("/contact") ? " is-active" : ""}`}
          >
            Contact
          </Link>
          <Link href="/contact" className="btn-gold nav-cta">
            Get in Touch
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {primary.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="mobile-link">
              {item.label}
            </Link>
          ))}
          <div className="mobile-heading">Our Companies</div>
          {companies.map((c) => (
            <Link key={c.href} href={c.href} onClick={() => setMenuOpen(false)} className="mobile-link">
              {c.full}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="mobile-link">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
