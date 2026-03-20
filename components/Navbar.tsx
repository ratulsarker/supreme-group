"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const concerns = [
  { href: "/stitch", label: "Supreme Stitch Ltd." },
  { href: "/accessories", label: "Supreme Accessories Industries Ltd." },
  { href: "/ecobricks", label: "Supreme Eco Bricks & Agro Ltd." },
  { href: "/embellishment", label: "Supreme Embellishment Ltd." },
  { href: "/outfit", label: "Supreme Outfit Ltd." },
  { href: "/sweets", label: "Supreme Sweets" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <Image
              src="/images/logo.png"
              alt="Supreme Group Bangladesh"
              width={160}
              height={54}
              priority
              style={{ height: "42px", width: "auto" }}
            />
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>

            {/* Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}
            >
              <button
                className="nav-link"
                style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}
              >
                Our Companies
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" style={{ marginTop: "1px", transition: "transform 0.2s", transform: dropOpen ? "rotate(180deg)" : "rotate(0)" }}>
                  <path d="M6 8L1 3h10z" />
                </svg>
              </button>

              {dropOpen && (
                <div style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  marginTop: "8px",
                  background: "#0A1628",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: "4px",
                  minWidth: "280px",
                  padding: "8px 0",
                  zIndex: 100,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                }}>
                  {concerns.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      style={{
                        display: "block",
                        padding: "10px 20px",
                        color: "rgba(255,255,255,0.8)",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        transition: "color 0.2s, padding-left 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.color = "#C9A84C";
                        (e.target as HTMLElement).style.paddingLeft = "26px";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.color = "rgba(255,255,255,0.8)";
                        (e.target as HTMLElement).style.paddingLeft = "20px";
                      }}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/contact" className="btn-gold" style={{ padding: "10px 22px", fontSize: "0.8rem" }}>
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "white", display: "none" }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            background: "#112240",
            borderTop: "1px solid rgba(201,168,76,0.2)",
            padding: "16px 0 24px",
          }}>
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              ...concerns,
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 24px",
                  color: "rgba(255,255,255,0.85)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
