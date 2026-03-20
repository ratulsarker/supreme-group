import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supreme Outfit Ltd.",
  description: "High-capacity garment manufacturer — 5 buildings, 1,350+ sewing machines, 1.2M pcs/month, 1 MW solar power.",
};

export default function OutfitPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", minHeight: "70vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <Image src="/images/stitch-factory-1.png" alt="Supreme Outfit Factory" fill priority style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,22,40,0.9) 0%, rgba(10,22,40,0.6) 100%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "100px" }}>
          <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
            Garment Manufacturing
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 700, color: "white", marginBottom: "20px" }}>
            Supreme Outfit Ltd.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.75)", maxWidth: "560px", lineHeight: 1.8 }}>
            High-capacity garment manufacturing with green energy infrastructure for sustainable large-scale production.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#0A1628", padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px" }}>
            {[
              { num: "5", label: "Buildings" },
              { num: "1,350+", label: "Sewing Machines" },
              { num: "1.2M", label: "PCS / Month" },
              { num: "1 MW", label: "Solar Power" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center", padding: "40px 24px", background: "#112240", borderRadius: "4px", border: "1px solid rgba(201,168,76,0.2)" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", fontWeight: 700, color: "#C9A84C", lineHeight: 1 }}>
                  {s.num}
                </div>
                <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", marginTop: "12px", fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>

      {/* CONTENT */}
      <section className="section-pad">
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, color: "#0A1628", marginBottom: "16px" }}>
            Scale Meets <span style={{ color: "#C9A84C" }}>Sustainability</span>
          </h2>
          <div style={{ width: "60px", height: "3px", background: "#C9A84C", margin: "0 auto 24px" }} />
          <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "20px", fontSize: "1.05rem" }}>
            Supreme Outfit Ltd. operates one of the largest garment manufacturing setups in the Supreme Group portfolio. With 5 purpose-built factory buildings housing over 1,350 sewing machines, we deliver a production capacity of 1.2 million pieces per month.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "32px", fontSize: "1.05rem" }}>
            Our commitment to sustainability is powered by a 1 MW solar installation, reducing our carbon footprint while maintaining the production capacity that global brands demand.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-gold">Partner With Us</Link>
            <Link href="/stitch" className="btn-outline-gold" style={{ borderColor: "#0A1628", color: "#0A1628" }}>See Supreme Stitch →</Link>
          </div>
        </div>
      </section>

      {/* CANVA PRESENTATION */}
      <section className="section-pad" style={{ background: "#f8f6f1" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
            Company Presentation
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, color: "#0A1628", marginBottom: "40px" }}>
            Supreme Outfit Ltd. Overview
          </h2>
          <div style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            borderRadius: "8px",
            border: "2px solid rgba(201,168,76,0.3)",
            maxWidth: "960px",
            margin: "0 auto",
            background: "#0A1628",
          }}>
            <iframe
              src="https://www.canva.com/design/DAGtAg3WIzc/gs9zClswhra_ETd4f1kP5Q/view?embed"
              title="Supreme Outfit Ltd. Presentation"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ background: "#0A1628", padding: "60px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 600, color: "white", marginBottom: "16px" }}>Contact Supreme Outfit</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}>
            Email: <a href="mailto:office@supremegroupbd.com" style={{ color: "#C9A84C", fontWeight: 600 }}>office@supremegroupbd.com</a>
            {" · "}
            Phone: <span style={{ fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>+8801678038802</span>
          </p>
        </div>
      </section>
    </>
  );
}
