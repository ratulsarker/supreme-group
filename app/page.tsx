import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supreme Group Bangladesh | Garments Conglomerate",
};

const companies = [
  {
    href: "/stitch",
    image: "/images/stitch-building.jpg",
    name: "Supreme Stitch Ltd.",
    category: "Garment Manufacturing",
    description: "100% export oriented garment manufacturer. Vertically integrated — from fabric to finished product. Trusted by Fanatics, Hanes, Walmart & Champion.",
    highlight: "60,000 knitwear items/day",
  },
  {
    href: "/accessories",
    image: "/images/accessories-front.jpg",
    name: "Supreme Accessories Industries Ltd.",
    category: "Garment Accessories",
    description: "Complete garment accessories manufacturer — poly bags, labels, threads, elastic, twill tape, draw cords, and interlinings at scale.",
    highlight: "3,20,000 poly bags/day · 12 production lines",
  },
  {
    href: "/ecobricks",
    image: "/images/eco-wide.jpg",
    name: "Supreme Eco Bricks & Agro Ltd.",
    category: "Sustainable Agriculture",
    description: "Sustainable farm in Dhamrai with 400+ cows, 150 sheep, 100+ ducks & geese. 100% natural farming with biogas generation.",
    highlight: "100% sustainable & eco-friendly",
  },
  {
    href: "/embellishment",
    image: "/images/embellishment-hero.jpg",
    name: "Supreme Embellishment Ltd.",
    category: "Printing & Embroidery",
    description: "62,000 sq ft embellishment facility with 520 skilled professionals. Advanced printing & multi-head embroidery machines.",
    highlight: "80,000 pcs/day print capacity",
  },
  {
    href: "/outfit",
    image: "/images/outfit.jpg",
    name: "Supreme Outfit Ltd.",
    category: "Garment Manufacturing",
    description: "High-capacity garment manufacturer with 5 buildings, 1,350+ sewing machines, and 1 MW solar power infrastructure.",
    highlight: "1.2M pcs/month production",
  },
  {
    href: "/sweets",
    image: "/images/sweets-1.jpg",
    name: "Supreme Sweets",
    category: "Food & Retail",
    description: "Authentic Bengali confectionery chain serving communities across Dhaka — Uttara, Kalampur, Rajabazar, Ashulia, Gazipur & Dhamrai.",
    highlight: "6 outlets across Dhaka",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #0e1e35 60%, #112240 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "72px",
        }}
      >
        {/* Subtle background texture overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/stitch-building.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.07,
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          top: "15%",
          right: "-5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
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
                Bangladesh&apos;s Trusted Garments Conglomerate
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
              Building Tomorrow&apos;s{" "}
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
              Supreme Group Bangladesh is a diversified garments conglomerate operating across garment manufacturing, sustainable agriculture, accessories, embellishment, and food retail — driving growth and innovation from Bangladesh to the world.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/stitch" className="btn-gold">
                Our Flagship — Supreme Stitch
              </Link>
              <Link href="/contact" className="btn-outline-gold">
                Partner With Us
              </Link>
            </div>

            {/* Mini stats */}
            <div style={{ display: "flex", gap: "0", marginTop: "64px", flexWrap: "wrap", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "32px" }}>
              {[
                { number: "6", label: "Sister Concerns" },
                { number: "4,000+", label: "Employees" },
                { number: "1.2M+", label: "Pcs / Month" },
                { number: "1MW+", label: "Solar Power" },
              ].map((s, i) => (
                <div key={s.label} style={{
                  paddingRight: "40px",
                  marginRight: "40px",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#C9A84C", lineHeight: 1 }}>
                    {s.number}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", marginTop: "6px", letterSpacing: "1px", textTransform: "uppercase" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS MARQUEE */}
      <section style={{ background: "#f8f6f1", borderTop: "1px solid #e8e8e0", borderBottom: "1px solid #e8e8e0", padding: "40px 0", overflow: "hidden" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#9a8a6a", letterSpacing: "3px", textTransform: "uppercase" }}>Trusted by Global Brands</span>
        </div>
        <div className="marquee-container">
          <div className="marquee-track">
            {[...Array(3)].map((_, setIdx) => (
              [
                { src: "/images/walmart-logo.png", alt: "Walmart" },
                { src: "/images/fanatics-logo.png", alt: "Fanatics" },
                { src: "/images/champion-logo.png", alt: "Champion" },
                { src: "/images/costco-logo.png", alt: "Costco" },
                { src: "/images/hanes-logo.png", alt: "Hanes" },
                { src: "/images/madengine-logo.png", alt: "Mad Engine" },
              ].map((logo, i) => (
                <img
                  key={`${setIdx}-${i}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="marquee-logo"
                  style={{ filter: "grayscale(100%) opacity(0.5)" }}
                />
              ))
            ))}
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: "0.72rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
                Who We Are
              </p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#0A1628", marginBottom: "16px", lineHeight: 1.15 }}>
                Bangladesh&apos;s Trusted<br />Garments Conglomerate
              </h2>
              <div className="gold-divider" />
              <p style={{ color: "#4a5568", lineHeight: 1.85, marginBottom: "20px", fontSize: "1rem" }}>
                Supreme Group Bangladesh was founded with a singular vision: to build world-class businesses rooted in Bangladesh that create lasting value for the global economy.
              </p>
              <p style={{ color: "#4a5568", lineHeight: 1.85, marginBottom: "32px", fontSize: "1rem" }}>
                Starting with garment manufacturing, the group has grown into a diversified conglomerate with six sister concerns spanning manufacturing, accessories, embellishment, sustainable agriculture, and food retail.
              </p>
              <div style={{ display: "flex", gap: "32px" }}>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#C9A84C" }}>6</div>
                  <div style={{ fontSize: "0.72rem", color: "#6b7280", letterSpacing: "1px", textTransform: "uppercase", marginTop: "4px" }}>Companies</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#C9A84C" }}>16+</div>
                  <div style={{ fontSize: "0.72rem", color: "#6b7280", letterSpacing: "1px", textTransform: "uppercase", marginTop: "4px" }}>Years</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#C9A84C" }}>4,000+</div>
                  <div style={{ fontSize: "0.72rem", color: "#6b7280", letterSpacing: "1px", textTransform: "uppercase", marginTop: "4px" }}>Employees</div>
                </div>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", height: "500px", borderRadius: "4px", overflow: "hidden" }}>
                <Image src="/images/outfit.jpg" alt="Supreme Group factory" fill style={{ objectFit: "cover" }} sizes="600px" />
              </div>
              {/* Floating badge */}
              <div style={{
                position: "absolute",
                bottom: "-16px",
                left: "-16px",
                background: "#0A1628",
                padding: "20px 28px",
                borderRadius: "4px",
                borderTop: "3px solid #C9A84C",
              }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700, color: "#C9A84C" }}>$70M+</div>
                <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.55)", marginTop: "4px", letterSpacing: "1.5px", textTransform: "uppercase" }}>Annual Revenue</div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div{grid-template-columns:1fr!important;}}`}</style>
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
              Each entity in our group operates with specialized expertise, united by Supreme Group&apos;s unwavering standards of quality and sustainability.
            </p>
          </div>

          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {companies.map((company) => (
              <Link
                key={company.href}
                href={company.href}
                className="card-hover concern-card"
                style={{
                  background: "#112240",
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: "4px",
                  textDecoration: "none",
                  display: "block",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "200px", overflow: "hidden" }}>
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "60%",
                    background: "linear-gradient(transparent, rgba(17,34,64,0.9))",
                  }} />
                </div>
                <div style={{ padding: "24px 24px 28px" }}>
                  <div style={{ fontSize: "0.7rem", color: "#C9A84C", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "8px" }}>
                    {company.category}
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 600, color: "white", marginBottom: "12px", lineHeight: 1.3 }}>
                    {company.name}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "16px" }}>
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
                    marginTop: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#C9A84C",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                  }}>
                    Learn more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:1024px){.container > div:last-child{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:600px){.container > div:last-child{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* CTA SECTION */}
      <section style={{
        background: "#0A1628",
        padding: "100px 0",
        textAlign: "center",
        borderTop: "1px solid rgba(201,168,76,0.15)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Subtle radial glow */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: "0.72rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
            Work With Us
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 700, color: "white", marginBottom: "20px", lineHeight: 1.2 }}>
            Partner with a Leader in<br />Garment Manufacturing
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.05rem", marginBottom: "40px", maxWidth: "520px", margin: "0 auto 40px", lineHeight: 1.85 }}>
            Join global brands like Fanatics, Hanes, and Walmart who trust us for high-quality, sustainable apparel from Bangladesh.
          </p>
          <Link href="/contact" className="btn-gold">Get In Touch</Link>
        </div>
      </section>
    </>
  );
}
