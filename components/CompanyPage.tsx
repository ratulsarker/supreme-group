import Link from "next/link";

interface Stat {
  number: string;
  label: string;
}

interface Section {
  heading: string;
  body: string[];
}

interface CompanyPageProps {
  category: string;
  name: string;
  tagline: string;
  overview: string;
  accentColor?: string;
  stats: Stat[];
  sections: Section[];
  highlights: string[];
  ctaText?: string;
  ctaLink?: string;
}

export default function CompanyPage({
  category,
  name,
  tagline,
  overview,
  stats,
  sections,
  highlights,
  ctaText = "Get in Touch",
  ctaLink = "/contact",
}: CompanyPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
            {category}
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            fontWeight: 700,
            color: "white",
            marginBottom: "20px",
            maxWidth: "700px",
            lineHeight: 1.15,
          }}>
            {name}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "560px", lineHeight: 1.8, marginBottom: "32px" }}>
            {tagline}
          </p>
          <Link href={ctaLink} className="btn-gold">{ctaText}</Link>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#C9A84C", padding: "28px 0" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
            gap: "16px",
          }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#0A1628" }}>
                  {s.number}
                </div>
                <div style={{ fontSize: "0.7rem", color: "#0A1628", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginTop: "2px" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-pad" style={{ background: "#f8f6f1" }}>
        <div className="container" style={{ maxWidth: "880px" }}>
          <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
            Overview
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, color: "#0A1628", marginBottom: "16px" }}>
            About {name}
          </h2>
          <div className="gold-divider" />
          <p style={{ color: "#374151", lineHeight: 1.9, fontSize: "1.05rem" }}>{overview}</p>
        </div>
      </section>

      {/* Sections */}
      {sections.length > 0 && (
        <section className="section-pad" style={{ background: "white" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "36px" }}>
              {sections.map((sec) => (
                <div key={sec.heading} style={{
                  background: "#f8f6f1",
                  borderRadius: "4px",
                  padding: "32px 28px",
                  borderTop: "3px solid #C9A84C",
                }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#0A1628",
                    marginBottom: "16px",
                  }}>
                    {sec.heading}
                  </h3>
                  {sec.body.map((para, i) => (
                    <p key={i} style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: i < sec.body.length - 1 ? "12px" : 0 }}>
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Highlights */}
      <section className="section-pad" style={{ background: "#0A1628" }}>
        <div className="container" style={{ maxWidth: "880px" }}>
          <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
            Key Highlights
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, color: "white", marginBottom: "36px" }}>
            Why Choose Us
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {highlights.map((h, i) => (
              <div key={i} style={{
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
                background: "#112240",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "4px",
                padding: "18px 20px",
              }}>
                <div style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "rgba(201,168,76,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "1px",
                }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="#C9A84C">
                    <path d="M10 3L5 8.5 2 5.5" stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.875rem", lineHeight: 1.6 }}>{h}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:600px){.container > div:last-child{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* CTA */}
      <section style={{ background: "#C9A84C", padding: "64px 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, color: "#0A1628", marginBottom: "16px" }}>
            Let's Work Together
          </h2>
          <p style={{ color: "rgba(10,22,40,0.7)", marginBottom: "32px", fontSize: "1rem" }}>
            Contact us to discuss your requirements with our team.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{
              display: "inline-block",
              background: "#0A1628",
              color: "#C9A84C",
              fontWeight: 700,
              fontFamily: "'Inter', sans-serif",
              padding: "14px 36px",
              borderRadius: "2px",
              textDecoration: "none",
            }}>
              Contact Us
            </Link>
            <Link href="/" style={{
              display: "inline-block",
              border: "2px solid #0A1628",
              color: "#0A1628",
              fontWeight: 700,
              fontFamily: "'Inter', sans-serif",
              padding: "12px 34px",
              borderRadius: "2px",
              textDecoration: "none",
            }}>
              View All Companies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
