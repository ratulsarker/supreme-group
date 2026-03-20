import Link from "next/link";

const companies = [
  { href: "/stitch", label: "Supreme Stitch Ltd." },
  { href: "/accessories", label: "Supreme Accessories Industries Ltd." },
  { href: "/ecobricks", label: "Supreme Eco Bricks & Agro Ltd." },
  { href: "/embellishment", label: "Supreme Embellishment Ltd." },
  { href: "/sweets", label: "Supreme Sweets" },
  { href: "/outfit", label: "Supreme Outfit Ltd." },
];

export default function Footer() {
  return (
    <footer style={{ background: "#060e1a", color: "rgba(255,255,255,0.7)", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
      <div className="container" style={{ padding: "64px 24px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "48px", paddingBottom: "48px" }}>
          
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "16px" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700, color: "#C9A84C" }}>
                SUPREME GROUP
              </div>
              <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", letterSpacing: "2.5px", textTransform: "uppercase", marginTop: "2px" }}>
                BANGLADESH
              </div>
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: "1.7", color: "rgba(255,255,255,0.55)", maxWidth: "260px" }}>
              A diversified conglomerate driving growth across garments, agro, food, and retail in Bangladesh since our founding.
            </p>
            <div style={{ marginTop: "24px", display: "flex", gap: "12px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <svg width="16" height="16" fill="#C9A84C" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </div>
              <div style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <svg width="16" height="16" fill="#C9A84C" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
            </div>
          </div>

          {/* Our Companies */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#C9A84C", marginBottom: "20px", fontWeight: 600 }}>
              Our Companies
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {companies.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} style={{
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color 0.2s",
                  }}
                  className="footer-link"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#C9A84C", marginBottom: "20px", fontWeight: 600 }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} style={{
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color 0.2s",
                  }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#C9A84C", marginBottom: "20px", fontWeight: 600 }}>
              Contact Us
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <svg style={{ marginTop: "2px", flexShrink: 0 }} width="14" height="14" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span style={{ fontSize: "0.8rem", lineHeight: "1.6", color: "rgba(255,255,255,0.55)" }}>
                  Dhamrai, Dhaka, Bangladesh
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <svg style={{ flexShrink: 0 }} width="14" height="14" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.56 2 2 0 0 1 3.58 1.38h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.14a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)" }}>+880 1XXXXXXXXX</span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <svg style={{ flexShrink: 0 }} width="14" height="14" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)" }}>info@supremegroupbd.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} Supreme Group Bangladesh. All rights reserved.
          </p>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)" }}>
            supremegroupbd.com
          </p>
        </div>
      </div>
    </footer>
  );
}
