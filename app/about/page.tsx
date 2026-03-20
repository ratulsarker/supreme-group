import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Supreme Group Bangladesh — our history, mission, values, and the vision behind one of Bangladesh's most diversified conglomerates.",
};

const values = [
  { icon: "🏆", title: "Excellence", desc: "We hold ourselves to the highest standards in every product, service, and business decision we make." },
  { icon: "🌱", title: "Sustainability", desc: "From 1MW solar installations to ETP plants and organic farming — environmental responsibility is core to who we are." },
  { icon: "🤝", title: "Integrity", desc: "Our partnerships with global brands are built on transparency, reliability, and mutual trust." },
  { icon: "💡", title: "Innovation", desc: "We continuously invest in technology, processes, and our people to stay ahead in every industry we operate in." },
  { icon: "🌍", title: "Impact", desc: "We create livelihoods, support communities, and contribute meaningfully to Bangladesh's economic development." },
  { icon: "👥", title: "People First", desc: "With 3,000+ employees, our greatest asset is our team — and we invest in their growth, safety, and wellbeing." },
];

const milestones = [
  { year: "1990s", event: "Supreme Group founded in Bangladesh with a focus on garment manufacturing." },
  { year: "2000s", event: "Expanded operations with Supreme Accessories Industries, scaling garment support services." },
  { year: "2010", event: "Launched Supreme Embellishment Ltd. — now one of the largest printing & embroidery facilities in the region." },
  { year: "2014", event: "Broke ground on Supreme Eco Bricks & Agro Ltd. in Dhamrai, pioneering sustainable farming in the area." },
  { year: "2017", event: "Supreme Outfit Ltd. commissioned, adding 1,350+ sewing machines and 5 production buildings to the group." },
  { year: "2020", event: "Installed 1MW solar power system at Supreme Outfit — a major step in green manufacturing." },
  { year: "2024", event: "Supreme Sweets expanded to 6 outlets across Dhaka, serving communities in Uttara, Gazipur, Dhamrai, and more." },
];

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
            Our Story
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 700, color: "white", marginBottom: "20px", maxWidth: "700px" }}>
            About Supreme Group Bangladesh
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "560px", lineHeight: 1.8 }}>
            From a single garment operation to a six-company conglomerate — the story of Supreme Group is one of ambition, resilience, and purpose.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad" style={{ background: "#f8f6f1" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
            <div>
              <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
                Who We Are
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.4rem", fontWeight: 700, color: "#0A1628", marginBottom: "20px", lineHeight: 1.2 }}>
                Diversified. Trusted. Bangladeshi.
              </h2>
              <div className="gold-divider" />
              <p style={{ color: "#374151", lineHeight: 1.85, marginBottom: "16px" }}>
                Supreme Group Bangladesh is a privately held conglomerate operating across six distinct industries: garment manufacturing, garment accessories, sustainable agriculture, printing and embroidery, food retail, and large-scale apparel production.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.85, marginBottom: "16px" }}>
                What began as a focused garment business has grown into a group of companies that collectively employ over 3,000 people, produce 1.2 million garment pieces per month, and supply products to some of the world's most recognizable retail brands.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.85 }}>
                We are headquartered in Bangladesh, deeply committed to the country's growth, and proud to be a homegrown success story with global reach.
              </p>
            </div>

            <div>
              <div style={{
                background: "#0A1628",
                borderRadius: "4px",
                padding: "40px",
                marginBottom: "24px",
              }}>
                <div style={{ borderLeft: "3px solid #C9A84C", paddingLeft: "20px", marginBottom: "32px" }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#C9A84C", fontSize: "1.1rem", marginBottom: "10px" }}>Our Mission</h3>
                  <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: "0.95rem" }}>
                    To build exceptional businesses that create sustainable value — for our clients, our employees, our community, and Bangladesh at large.
                  </p>
                </div>
                <div style={{ borderLeft: "3px solid #C9A84C", paddingLeft: "20px" }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#C9A84C", fontSize: "1.1rem", marginBottom: "10px" }}>Our Vision</h3>
                  <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: "0.95rem" }}>
                    To be recognized as Bangladesh's most trusted and innovative diversified business group, setting benchmarks for quality, sustainability, and excellence across every industry we touch.
                  </p>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {[
                  { num: "6", label: "Sister Concerns" },
                  { num: "3,000+", label: "Employees" },
                  { num: "1.2M", label: "Pcs/Month" },
                  { num: "30+", label: "Years" },
                ].map(item => (
                  <div key={item.label} style={{ background: "white", border: "1px solid #e8e8e0", borderRadius: "4px", padding: "20px", textAlign: "center" }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "#C9A84C" }}>{item.num}</div>
                    <div style={{ fontSize: "0.75rem", color: "#6b7280", fontWeight: 600, letterSpacing: "1px", marginTop: "4px" }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
              What Guides Us
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.4rem", fontWeight: 700, color: "#0A1628" }}>
              Our Core Values
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }}>
            {values.map((v) => (
              <div
                key={v.title}
                className="card-hover"
                style={{
                  background: "#f8f6f1",
                  borderRadius: "4px",
                  padding: "32px 28px",
                  borderTop: "3px solid #C9A84C",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "16px" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, color: "#0A1628", marginBottom: "10px" }}>
                  {v.title}
                </h3>
                <p style={{ color: "#374151", fontSize: "0.875rem", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad" style={{ background: "#0A1628" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
              Our Journey
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.4rem", fontWeight: 700, color: "white" }}>
              Milestones &amp; History
            </h2>
          </div>
          <div style={{ maxWidth: "720px", margin: "0 auto", position: "relative" }}>
            {/* Timeline line */}
            <div style={{
              position: "absolute",
              left: "100px",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "rgba(201,168,76,0.25)",
            }} />

            {milestones.map((m, i) => (
              <div key={i} style={{ display: "flex", gap: "32px", marginBottom: "40px", alignItems: "flex-start" }}>
                <div style={{
                  minWidth: "80px",
                  textAlign: "right",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  color: "#C9A84C",
                  fontSize: "1rem",
                  paddingTop: "2px",
                }}>
                  {m.year}
                </div>
                <div style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#C9A84C",
                  flexShrink: 0,
                  marginTop: "4px",
                  position: "relative",
                  zIndex: 1,
                }} />
                <div style={{ paddingBottom: "8px" }}>
                  <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7, fontSize: "0.9rem" }}>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#C9A84C", padding: "64px 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, color: "#0A1628", marginBottom: "16px" }}>
            Interested in Partnering?
          </h2>
          <p style={{ color: "rgba(10,22,40,0.7)", marginBottom: "32px", fontSize: "1rem" }}>
            Let's build something great together.
          </p>
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
        </div>
      </section>
    </>
  );
}
