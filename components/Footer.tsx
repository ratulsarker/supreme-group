import Link from "next/link";
import Image from "next/image";

const companies = [
  { href: "/stitch", label: "Supreme Stitch Ltd." },
  { href: "/accessories", label: "Supreme Accessories Industries Ltd." },
  { href: "/ecobricks", label: "Supreme Eco Bricks & Agro Ltd." },
  { href: "/embellishment", label: "Supreme Embellishment Ltd." },
  { href: "/outfit", label: "Supreme Outfit Ltd." },
  { href: "/sweets", label: "Supreme Sweets" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#060e1a", color: "rgba(255,255,255,0.7)", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
      <div className="container" style={{ padding: "64px 24px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "48px", paddingBottom: "48px" }}>
          
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "16px" }}>
              <Image
                src="/images/logo.png"
                alt="Supreme Group Bangladesh"
                width={160}
                height={54}
                style={{ height: "40px", width: "auto", opacity: 0.9 }}
              />
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: "1.7", color: "rgba(255,255,255,0.55)", maxWidth: "260px", marginTop: "16px" }}>
              A diversified garments conglomerate based in Bangladesh with interests spanning manufacturing, accessories, agro, embellishment, and retail.
            </p>
          </div>

          {/* Our Companies */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#C9A84C", marginBottom: "20px", fontWeight: 600 }}>
              Our Companies
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {companies.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="footer-link" style={{
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color 0.2s",
                  }}>
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
                { href: "/stitch", label: "Supreme Stitch (Flagship)" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-link" style={{
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
              Head Office
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <svg style={{ marginTop: "2px", flexShrink: 0 }} width="14" height="14" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span style={{ fontSize: "0.8rem", lineHeight: "1.6", color: "rgba(255,255,255,0.55)" }}>
                  49/1 Purana Paltan Line, Dhaka-1000, Bangladesh
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <svg style={{ flexShrink: 0 }} width="14" height="14" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.56 2 2 0 0 1 3.58 1.38h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.14a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)" }}>+88-02-9359825</span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <svg style={{ flexShrink: 0 }} width="14" height="14" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:office@supremegroupbd.com" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
                  office@supremegroupbd.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}>
            © 2026 Supreme Group. All rights reserved.
          </p>
          <a href="mailto:office@supremegroupbd.com" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>
            office@supremegroupbd.com
          </a>
        </div>
      </div>
    </footer>
  );
}
