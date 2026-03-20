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
    image: "/images/stitch-cta-bg.jpg",
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
          background: "linear-gradient(135deg, #0A1628 0%, #1a3a5c 60%, #112240 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "72px",
        }}
      >
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
            <div style={{ display: "flex", gap: "40px", marginTop: "64px", flexWrap: "wrap" }}>
              {[
                { number: "6", label: "Sister Concerns" },
                { number: "3,000+", label: "Employees" },
                { number: "1.2M+", label: "Pcs / Month" },
                { number: "1MW+", label: "Solar Power" },
              ].map((s) => (
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
      </section>

      {/* CLIENTS MARQUEE */}
      <section style={{ background: "#C9A84C", padding: "32px 0", overflow: "hidden" }}>
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0A1628", letterSpacing: "3px", textTransform: "uppercase" }}>Trusted by Global Brands</span>
        </div>
        <div className="marquee-container">
          <div className="marquee-track">
            {[...Array(6)].map((_, setIdx) => (
              [
                { src: "/images/walmart-logo.png", alt: "Walmart" },
                { src: "/images/fanatics-logo.png", alt: "Fanatics" },
                { src: "/images/champion-logo.png", alt: "Champion" },
              ].map((logo, i) => (
                <img
                  key={`${setIdx}-${i}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="marquee-logo"
                />
              ))
            ))}
          </div>
        </div>
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
        background: "linear-gradient(135deg, #C9A84C 0%, #a8832e 100%)",
        padding: "80px 0",
        textAlign: "center",
      }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.6rem", fontWeight: 700, color: "#0A1628", marginBottom: "16px" }}>
            Partner with a Leader in Garment Manufacturing
          </h2>
          <p style={{ color: "rgba(10,22,40,0.72)", fontSize: "1.05rem", marginBottom: "36px", maxWidth: "560px", margin: "0 auto 36px" }}>
            Join global brands like Fanatics, Hanes, and Walmart who trust us for high-quality, sustainable apparel. Let&apos;s build something together.
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
          }}>
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
