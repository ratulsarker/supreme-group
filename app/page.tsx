import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supreme Group Bangladesh | Garments Conglomerate",
};

const flagships = [
  {
    href: "/stitch",
    image: "/images/stitch-building.jpg",
    name: "Supreme Stitch Ltd.",
    category: "Flagship · Garment Manufacturing",
    description:
      "100% export oriented knitwear manufacturer, vertically integrated from fabric to finished product. Trusted by Fanatics, Hanes, Walmart and Champion.",
    highlight: "60,000 knitwear items/day",
  },
  {
    href: "/outfit",
    image: "/images/outfit.jpg",
    name: "Supreme Outfit Ltd.",
    category: "Flagship · Garment Manufacturing",
    description:
      "High-capacity garment manufacturer with 5 buildings, 1,350+ sewing machines and 1 MW of rooftop solar power.",
    highlight: "1.2M pcs/month production",
  },
];

const supporting = [
  {
    href: "/accessories",
    name: "Supreme Accessories",
    category: "Garment Accessories",
    description: "Poly bags, labels, threads, elastic and interlinings at scale.",
    highlight: "3,20,000 poly bags/day",
  },
  {
    href: "/embellishment",
    name: "Supreme Embellishment",
    category: "Printing & Embroidery",
    description: "62,000 sq ft facility with 520 skilled professionals.",
    highlight: "80,000 pcs/day prints",
  },
  {
    href: "/ecobricks",
    name: "Supreme Eco Bricks & Agro",
    category: "Sustainable Agriculture",
    description: "Natural farming in Dhamrai with 400+ cows and biogas generation.",
    highlight: "100% eco-friendly",
  },
  {
    href: "/sweets",
    name: "Supreme Sweets",
    category: "Food & Retail",
    description: "Authentic Bengali confectionery serving communities across Dhaka.",
    highlight: "6 outlets across Dhaka",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "flex-end",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/wa-special.jpg"
          alt="Supreme Group manufacturing campus"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 35%" }}
          sizes="100vw"
        />
        {/* Scrim: readable text over the rendering */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(100deg, rgba(7,22,36,0.92) 0%, rgba(7,22,36,0.68) 42%, rgba(9,40,64,0.22) 100%)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "45%",
          background: "linear-gradient(transparent, rgba(7,22,36,0.85))",
        }} />
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
        }} />

        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "140px", paddingBottom: "72px" }}>
          <div style={{ maxWidth: "780px" }}>
            <div style={{
              display: "inline-block",
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.4)",
              borderRadius: "4px",
              padding: "6px 16px",
              marginBottom: "28px",
              backdropFilter: "blur(4px)",
            }}>
              <span style={{ color: "#D9BC6B", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>
                Bangladesh&apos;s Trusted Garments Conglomerate
              </span>
            </div>

            <h1 style={{
              fontFamily: "var(--font-head)",
              fontSize: "clamp(2.6rem, 6vw, 4.6rem)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.08,
              marginBottom: "26px",
              letterSpacing: "-0.02em",
            }}>
              World-Class Manufacturing,{" "}
              <span style={{ color: "#38B6FF" }}>Made in Bangladesh</span>
            </h1>

            <p style={{
              fontSize: "1.12rem",
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.8,
              marginBottom: "38px",
              maxWidth: "600px",
            }}>
              Supreme Group is a diversified conglomerate of six companies spanning garment
              manufacturing, accessories, embellishment, sustainable agriculture and food retail,
              serving global brands from Bangladesh.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/stitch" className="btn-gold">
                Explore the Group
              </Link>
              <Link href="/contact" className="btn-outline-gold" style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}>
                Partner With Us
              </Link>
            </div>

            {/* Mini stats */}
            <div style={{ display: "flex", gap: "0", marginTop: "56px", flexWrap: "wrap", borderTop: "1px solid rgba(255,255,255,0.14)", paddingTop: "30px" }}>
              {[
                { number: "6", label: "Companies" },
                { number: "4,000+", label: "Employees" },
                { number: "1.2M+", label: "Pcs / Month" },
                { number: "1MW+", label: "Solar Power" },
              ].map((s, i) => (
                <div key={s.label} style={{
                  paddingRight: "40px",
                  marginRight: "40px",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.14)" : "none",
                }}>
                  <div style={{ fontFamily: "var(--font-head)", fontSize: "2rem", fontWeight: 800, color: "#38B6FF", lineHeight: 1 }}>
                    {s.number}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.55)", marginTop: "6px", letterSpacing: "1px", textTransform: "uppercase" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS MARQUEE */}
      <section style={{ background: "#F6F4EE", borderTop: "1px solid #E8E2D4", borderBottom: "1px solid #E8E2D4", padding: "40px 0", overflow: "hidden" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#8A7A55", letterSpacing: "3px", textTransform: "uppercase" }}>Trusted by Global Brands</span>
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
              <p className="section-eyebrow">Who We Are</p>
              <h2 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#0B1D2E", marginBottom: "16px", lineHeight: 1.12 }}>
                Bangladesh&apos;s Trusted<br />Garments Conglomerate
              </h2>
              <div className="gold-divider" />
              <p style={{ color: "#52697C", lineHeight: 1.85, marginBottom: "20px", fontSize: "1rem" }}>
                Supreme Group Bangladesh was founded with a singular vision: to build world-class
                businesses rooted in Bangladesh that create lasting value for the global economy.
              </p>
              <p style={{ color: "#52697C", lineHeight: 1.85, marginBottom: "32px", fontSize: "1rem" }}>
                Starting with garment manufacturing, the group has grown into a diversified
                conglomerate with six sister concerns spanning manufacturing, accessories,
                embellishment, sustainable agriculture and food retail.
              </p>
              <div style={{ display: "flex", gap: "32px" }}>
                {[
                  { number: "6", label: "Companies" },
                  { number: "16+", label: "Years" },
                  { number: "4,000+", label: "Employees" },
                ].map((s) => (
                  <div key={s.label}>
                    <div style={{ fontFamily: "var(--font-head)", fontSize: "2rem", fontWeight: 800, color: "#0E86D4" }}>{s.number}</div>
                    <div style={{ fontSize: "0.72rem", color: "#64748b", letterSpacing: "1px", textTransform: "uppercase", marginTop: "4px" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", height: "500px", borderRadius: "6px", overflow: "hidden" }}>
                <Image src="/images/outfit.jpg" alt="Supreme Group factory" fill style={{ objectFit: "cover" }} sizes="600px" />
              </div>
              {/* Floating badge */}
              <div style={{
                position: "absolute",
                bottom: "-16px",
                left: "-16px",
                background: "#0B1D2E",
                padding: "20px 28px",
                borderRadius: "6px",
                borderTop: "3px solid #C9A84C",
              }}>
                <div style={{ fontFamily: "var(--font-head)", fontSize: "1.6rem", fontWeight: 800, color: "#38B6FF" }}>$70M+</div>
                <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.55)", marginTop: "4px", letterSpacing: "1.5px", textTransform: "uppercase" }}>Annual Revenue</div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* GROUP STRUCTURE TREE */}
      <section className="section-pad" style={{ background: "#0B1D2E" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ fontSize: "0.75rem", color: "#D9BC6B", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
              The Group at a Glance
            </div>
            <h2 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(1.9rem, 4vw, 2.6rem)", fontWeight: 800, color: "white", marginBottom: "16px" }}>
              Six Companies. One Vision.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.8 }}>
              Two flagship manufacturers lead the group, backed by four specialized companies.
              Every entity is united by Supreme Group&apos;s standards of quality and sustainability.
            </p>
          </div>

          {/* Root node */}
          <div style={{ textAlign: "center" }}>
            <div style={{
              display: "inline-block",
              background: "#123049",
              border: "1px solid rgba(56,182,255,0.35)",
              borderBottom: "3px solid #38B6FF",
              borderRadius: "8px",
              padding: "16px 40px",
            }}>
              <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#D9BC6B", marginBottom: "4px" }}>
                The Group
              </div>
              <div style={{ fontFamily: "var(--font-head)", fontSize: "1.25rem", fontWeight: 800, color: "white" }}>
                Supreme Group Bangladesh
              </div>
            </div>
          </div>

          <div className="tree-stem" />
          <div className="tree-rail" />

          {/* Flagship branches */}
          <div className="tree-flagships">
            {flagships.map((company) => (
              <Link key={company.href} href={company.href} className="tree-card flagship">
                <div style={{ position: "relative", width: "100%", height: "210px", overflow: "hidden" }}>
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "60%",
                    background: "linear-gradient(transparent, rgba(18,48,73,0.92))",
                  }} />
                </div>
                <div style={{ padding: "24px 26px 28px" }}>
                  <div style={{ fontSize: "0.68rem", color: "#D9BC6B", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "8px" }}>
                    {company.category}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1.3rem", fontWeight: 700, color: "white", marginBottom: "10px", lineHeight: 1.25 }}>
                    {company.name}
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "16px" }}>
                    {company.description}
                  </p>
                  <div style={{
                    display: "inline-block",
                    background: "rgba(56,182,255,0.1)",
                    border: "1px solid rgba(56,182,255,0.3)",
                    borderRadius: "4px",
                    padding: "5px 12px",
                    fontSize: "0.76rem",
                    color: "#6FCBFF",
                    fontWeight: 600,
                  }}>
                    {company.highlight}
                  </div>
                  <div style={{ marginTop: "16px", color: "#38B6FF", fontSize: "0.82rem", fontWeight: 600 }}>
                    Learn more →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Supporting branches */}
          <div className="tree-others">
            {supporting.map((company) => (
              <Link key={company.href} href={company.href} className="tree-card">
                <div style={{ padding: "20px 20px 22px" }}>
                  <div style={{ fontSize: "0.62rem", color: "#D9BC6B", fontWeight: 700, letterSpacing: "1.4px", textTransform: "uppercase", marginBottom: "8px" }}>
                    {company.category}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1rem", fontWeight: 700, color: "white", marginBottom: "8px", lineHeight: 1.3 }}>
                    {company.name}
                  </h3>
                  <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.65, marginBottom: "12px" }}>
                    {company.description}
                  </p>
                  <div style={{ fontSize: "0.72rem", color: "#38B6FF", fontWeight: 600 }}>
                    {company.highlight} →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        background: "#0E2438",
        padding: "100px 0",
        textAlign: "center",
        borderTop: "1px solid rgba(56,182,255,0.15)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "340px",
          background: "radial-gradient(ellipse, rgba(56,182,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: "0.72rem", color: "#D9BC6B", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
            Work With Us
          </p>
          <h2 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 800, color: "white", marginBottom: "20px", lineHeight: 1.15 }}>
            Partner with a Leader in<br />Garment Manufacturing
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem", maxWidth: "540px", margin: "0 auto 40px", lineHeight: 1.85 }}>
            Join global brands like Fanatics, Hanes and Walmart who trust us for high-quality,
            sustainable apparel from Bangladesh.
          </p>
          <Link href="/contact" className="btn-gold">Get In Touch</Link>
        </div>
      </section>
    </>
  );
}
