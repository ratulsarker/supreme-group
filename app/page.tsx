import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supreme Group Bangladesh | Diversified Business Conglomerate",
};

const companies = [
  {
    href: "/stitch",
    icon: "🧵",
    name: "Supreme Stitch Ltd.",
    category: "Garment Manufacturing",
    description:
      "Vertically integrated garment manufacturer with a full supply chain — from knitting and cutting to sewing, printing, and finishing. Trusted by global brands.",
    highlight: "Clients: Fanatics, Hanes, Walmart",
    color: "#1a3a5c",
  },
  {
    href: "/accessories",
    icon: "📦",
    name: "Supreme Accessories Industries Ltd.",
    category: "Garment Accessories",
    description:
      "Complete garment accessories supplier producing poly bags, labels, threads, elastic, twill tape, draw cords, and interlinings at scale.",
    highlight: "320K poly bags/day across 12 production lines",
    color: "#1e3a2f",
  },
  {
    href: "/ecobricks",
    icon: "🌿",
    name: "Supreme Eco Bricks & Agro Ltd.",
    category: "Sustainable Agriculture",
    description:
      "A thriving sustainable farm in Dhamrai, Dhaka — home to 400+ cows, 150 sheep, and over 100 ducks and geese. 100% natural, chemical-free farming.",
    highlight: "Dairy, eggs, biogas — fully sustainable",
    color: "#1e2d1a",
  },
  {
    href: "/embellishment",
    icon: "🎨",
    name: "Supreme Embellishment Ltd.",
    category: "Printing & Embroidery",
    description:
      "World-class printing and embroidery facility spanning 62,000 sq ft with 520 dedicated employees and an in-house Effluent Treatment Plant (ETP).",
    highlight: "80,000 pcs/day print capacity",
    color: "#2d1a3a",
  },
  {
    href: "/sweets",
    icon: "🍬",
    name: "Supreme Sweets",
    category: "Food & Retail",
    description:
      "A beloved sweet shop chain bringing authentic Bengali confectionery to communities across Dhaka — Uttara, Kalampur, Rajabazar, Ashulia, Gazipur, and Dhamrai.",
    highlight: "6 outlets across Dhaka",
    color: "#3a2410",
  },
  {
    href: "/outfit",
    icon: "👗",
    name: "Supreme Outfit Ltd.",
    category: "Garment Manufacturing",
    description:
      "High-capacity garment manufacturer operating 5 buildings with 1,350+ sewing machines and green energy infrastructure for sustainable large-scale production.",
    highlight: "1.2M pcs/month · 1MW solar power",
    color: "#0a2233",
  },
];

const stats = [
  { number: "6", label: "Sister Concerns" },
  { number: "3,000+", label: "Employees" },
  { number: "30+", label: "Years of Legacy" },
  { number: "3", label: "Global Clients" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #1a3a5c 60%, #112240 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "72px",
        }}
      >
        {/* Decorative elements */}
        <div style={{
          position: "absolute",
          top: "20%",
          right: "5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        {/* Gold line accent */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
        }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "760px" }}>
            <div style={{
              display: "inline-block",
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "2px",
              padding: "6px 16px",
              marginBottom: "28px",
            }}>
              <span style={{ color: "#C9A84C", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>
                Bangladesh's Trusted Conglomerate
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "28px",
            }}>
              Building Tomorrow's{" "}
              <span style={{ color: "#C9A84C" }}>Industries</span>{" "}
              Today
            </h1>

            <p style={{
              fontSize: "1.15rem",
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.8,
              marginBottom: "40px",
              maxWidth: "600px",
            }}>
              Supreme Group Bangladesh is a diversified conglomerate operating across garment manufacturing, sustainable agriculture, accessories, embellishment, and food retail — driving growth and innovation in Bangladesh.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/about" className="btn-gold">
                Discover Our Story
              </Link>
              <Link href="/contact" className="btn-outline-gold">
                Partner With Us
              </Link>
            </div>

            {/* Mini stats */}
            <div style={{ display: "flex", gap: "40px", marginTop: "64px", flexWrap: "wrap" }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, color: "#C9A84C", lineHeight: 1 }}>
                    {s.number}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginTop: "4px", letterSpacing: "0.5px" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: 0.5,
        }}>
          <span style={{ fontSize: "0.7rem", color: "white", letterSpacing: "2px", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)" }} />
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: "#C9A84C", padding: "28px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {[
              { num: "6", label: "COMPANIES" },
              { num: "3,000+", label: "EMPLOYEES" },
              { num: "1.2M", label: "PCS/MONTH" },
              { num: "1MW", label: "SOLAR POWER" },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#0A1628" }}>
                  {item.num}
                </div>
                <div style={{ fontSize: "0.7rem", color: "#0A1628", fontWeight: 700, letterSpacing: "2px", marginTop: "2px" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:600px){.container > div{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>

      {/* ABOUT TEASER */}
      <section className="section-pad" style={{ background: "#f8f6f1" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
                About Supreme Group
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.6rem", fontWeight: 700, color: "#0A1628", marginBottom: "16px", lineHeight: 1.15 }}>
                A Legacy of <span style={{ color: "#C9A84C" }}>Excellence</span> in Bangladesh
              </h2>
              <div className="gold-divider" />
              <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "20px" }}>
                Supreme Group Bangladesh was founded with a singular vision: to build world-class businesses that create lasting value for Bangladesh, its people, and its economy. Today, we operate six distinct sister concerns spanning garment manufacturing, sustainable agro, printing, accessories, and food retail.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "32px" }}>
                Our group is united by shared values — integrity, innovation, sustainability, and a commitment to quality that has earned the trust of global brands including Fanatics, Hanes, and Walmart.
              </p>
              <Link href="/about" className="btn-gold">Learn More About Us</Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              {[
                { icon: "🤝", title: "Trusted by Globals", desc: "Supplying to Fanatics, Hanes, Walmart and more multinational brands" },
                { icon: "♻️", title: "Sustainability First", desc: "1MW solar power, ETP systems, and 100% natural farming practices" },
                { icon: "🏭", title: "Scale & Capacity", desc: "5 buildings, 80+ machines, 62,000 sq ft of production space" },
                { icon: "🌱", title: "Agro & Innovation", desc: "400+ cows, biogas energy, and fully organic Dhamrai farm operations" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="card-hover"
                  style={{
                    background: "white",
                    border: "1px solid #e8e8e0",
                    borderRadius: "4px",
                    padding: "24px 20px",
                  }}
                >
                  <div style={{ fontSize: "1.8rem", marginBottom: "12px" }}>{item.icon}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, color: "#0A1628", marginBottom: "8px", fontSize: "0.95rem" }}>{item.title}</div>
                  <div style={{ fontSize: "0.8rem", color: "#6b7280", lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
      </section>

      {/* SISTER CONCERNS */}
      <section className="section-pad" style={{ background: "#0A1628" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
              Our Sister Concerns
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.6rem", fontWeight: 700, color: "white", marginBottom: "16px" }}>
              Six Companies. One Vision.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.8 }}>
              Each entity in our group operates with its own expertise, united by Supreme Group's unwavering standards.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {companies.map((company) => (
              <Link
                key={company.href}
                href={company.href}
                className="card-hover concern-card"
                style={{
                  background: "#112240",
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: "4px",
                  padding: "32px 28px",
                  textDecoration: "none",
                  display: "block",
                  transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>{company.icon}</div>
                <div style={{ fontSize: "0.7rem", color: "#C9A84C", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "8px" }}>
                  {company.category}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 600, color: "white", marginBottom: "12px", lineHeight: 1.3 }}>
                  {company.name}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "20px" }}>
                  {company.description}
                </p>
                <div style={{
                  display: "inline-block",
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  borderRadius: "2px",
                  padding: "5px 12px",
                  fontSize: "0.75rem",
                  color: "#C9A84C",
                  fontWeight: 500,
                }}>
                  {company.highlight}
                </div>
                <div style={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#C9A84C",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                }}>
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:1024px){.container > div:last-child{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:600px){.container > div:last-child{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* CTA SECTION */}
      <section style={{
        background: "linear-gradient(135deg, #C9A84C 0%, #a8832e 100%)",
        padding: "80px 0",
        textAlign: "center",
      }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.6rem", fontWeight: 700, color: "#0A1628", marginBottom: "16px" }}>
            Ready to Work With Us?
          </h2>
          <p style={{ color: "rgba(10,22,40,0.72)", fontSize: "1.05rem", marginBottom: "36px", maxWidth: "480px", margin: "0 auto 36px" }}>
            Whether you're a global brand seeking a reliable manufacturing partner or a local business looking to grow, Supreme Group is here for you.
          </p>
          <Link href="/contact" style={{
            display: "inline-block",
            background: "#0A1628",
            color: "#C9A84C",
            fontWeight: 700,
            fontFamily: "'Inter', sans-serif",
            padding: "16px 40px",
            borderRadius: "2px",
            textDecoration: "none",
            fontSize: "0.95rem",
            letterSpacing: "0.5px",
            transition: "transform 0.2s ease",
          }}>
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
