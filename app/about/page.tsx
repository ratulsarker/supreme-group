import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Supreme Group Bangladesh — a diversified garments conglomerate driving growth across manufacturing, agriculture, and retail.",
};

const companies = [
  { href: "/stitch", name: "Supreme Stitch Ltd.", desc: "Flagship — 100% export oriented garment manufacturer. Vertically integrated from fabric to finished product. Trusted by Fanatics, Hanes, Walmart & Champion." },
  { href: "/accessories", name: "Supreme Accessories Industries Ltd.", desc: "Complete garment accessories manufacturer — poly bags, labels, threads, elastic, twill tape across 12 production lines." },
  { href: "/embellishment", name: "Supreme Embellishment Ltd.", desc: "62,000 sq ft printing and embroidery facility with 520 professionals and 80,000 pcs/day capacity." },
  { href: "/outfit", name: "Supreme Outfit Ltd.", desc: "High-capacity manufacturing with 5 buildings, 1,350+ sewing machines, and 1 MW solar power." },
  { href: "/ecobricks", name: "Supreme Eco Bricks & Agro Ltd.", desc: "Sustainable farm in Dhamrai — 400+ cows, 150 sheep, biogas generation, 100% natural farming." },
  { href: "/sweets", name: "Supreme Sweets", desc: "Authentic Bengali confectionery chain with 6 outlets across Dhaka." },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
            About Supreme Group
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 700, color: "white", marginBottom: "20px" }}>
            A Diversified Garments Conglomerate
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", maxWidth: "620px", lineHeight: 1.8 }}>
            Supreme Group Bangladesh operates six distinct companies spanning garment manufacturing, accessories, embellishment, sustainable agriculture, and food retail — united by shared values of quality, innovation, and integrity.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.4rem", fontWeight: 700, color: "#0A1628", marginBottom: "16px", lineHeight: 1.15 }}>
                Our <span style={{ color: "#C9A84C" }}>Story</span>
              </h2>
              <div className="gold-divider" />
              <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "20px" }}>
                Supreme Group Bangladesh was founded with a singular vision: to build world-class businesses rooted in Bangladesh that create lasting value for the global economy. Starting with garment manufacturing, the group has grown into a diversified conglomerate with six sister concerns.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "20px" }}>
                Our flagship, Supreme Stitch Ltd., is a 100% export oriented garment manufacturer trusted by global brands including Fanatics, Hanes, Walmart, and Champion. From there, we&apos;ve expanded into garment accessories, embellishment services, large-scale garment production, sustainable agriculture, and food retail.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.8 }}>
                Every company in the group operates with the same commitment to quality, sustainability, and innovation — principles that have earned us the trust of international clients and made us a leading name in Bangladesh&apos;s garment industry.
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", height: "400px", borderRadius: "4px", overflow: "hidden" }}>
                <Image src="/images/stitch-hero.png" alt="Supreme Group operations" fill style={{ objectFit: "cover" }} sizes="600px" />
              </div>
              <div style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                background: "#0A1628",
                padding: "24px 32px",
                borderRadius: "4px",
                borderLeft: "4px solid #C9A84C",
              }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#C9A84C" }}>6</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>Sister Concerns</div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* COMPANIES */}
      <section className="section-pad" style={{ background: "#0A1628" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ fontSize: "0.72rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
              The Group
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "white" }}>
              Our Sister Concerns
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
            {companies.map((c, i) => (
              <Link key={c.href} href={c.href} className="card-hover concern-card" style={{
                background: "#112240",
                border: "1px solid rgba(201,168,76,0.12)",
                borderRadius: "4px",
                padding: "36px 32px",
                textDecoration: "none",
                display: "block",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute",
                  top: "36px",
                  right: "32px",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "0.7rem",
                  color: "rgba(201,168,76,0.3)",
                  letterSpacing: "2px",
                  fontWeight: 600,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 600, color: "white", marginBottom: "4px" }}>
                  {c.name}
                </h3>
                <div style={{ width: "28px", height: "1px", background: "#C9A84C", marginBottom: "14px", opacity: 0.5 }} />
                <p style={{ fontSize: "0.865rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.78 }}>
                  {c.desc}
                </p>
                <span style={{ display: "inline-block", marginTop: "16px", color: "#C9A84C", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.5px" }}>View Company →</span>
              </Link>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div:last-child{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* VALUES */}
      <section className="section-pad" style={{ background: "#f8f6f1" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ fontSize: "0.72rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
            What We Stand For
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#0A1628", marginBottom: "56px" }}>
            Our Core Values
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
            {[
              { number: "I", title: "Quality", desc: "AQL 1.0 standards, in-house testing, and multi-stage inspections across all operations." },
              { number: "II", title: "Sustainability", desc: "1.5 MW+ combined solar power, biogas generation, ETP systems, and 94% renewable energy." },
              { number: "III", title: "Innovation", desc: "CAD-CAM systems, automated printing, and continuous investment in cutting-edge technology." },
              { number: "IV", title: "People", desc: "Medical care, childcare, transport, insurance, and welfare programs for 4,000+ employees." },
            ].map((v) => (
              <div key={v.title} className="card-hover" style={{
                background: "white",
                border: "1px solid #e8e8e0",
                borderRadius: "4px",
                padding: "36px 28px",
                textAlign: "left",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.75rem", color: "#C9A84C", fontWeight: 600, letterSpacing: "2px", marginBottom: "16px" }}>
                  {v.number}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 600, color: "#0A1628", marginBottom: "12px" }}>{v.title}</h3>
                <div style={{ width: "32px", height: "1px", background: "#C9A84C", marginBottom: "14px", opacity: 0.5 }} />
                <p style={{ fontSize: "0.855rem", color: "#6b7280", lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div:last-child{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:500px){.container > div:last-child{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* CTA */}
      <section style={{ background: "#0A1628", padding: "80px 0", textAlign: "center", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
        <div className="container">
          <p style={{ fontSize: "0.72rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
            Let&apos;s Build Together
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "white", marginBottom: "24px" }}>
            Ready to Work With Us?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", marginBottom: "36px", maxWidth: "480px", margin: "0 auto 36px", lineHeight: 1.8 }}>
            Trusted by global brands across sportswear, retail, and fashion. Let&apos;s start a conversation.
          </p>
          <Link href="/contact" className="btn-gold">Get In Touch</Link>
        </div>
      </section>
    </>
  );
}
