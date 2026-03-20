import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supreme Embellishment Ltd.",
  description: "High-capacity embellishment facility specializing in advanced printing and embroidery — 62,000 sq ft, 520 professionals, 80,000 pcs/day.",
};

export default function EmbellishmentPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", minHeight: "70vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <Image src="/images/embellishment-hero.jpg" alt="Supreme Embellishment Facility" fill priority style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,22,40,0.88) 0%, rgba(10,22,40,0.5) 100%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "100px" }}>
          <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
            Printing & Embroidery
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 700, color: "white", marginBottom: "20px" }}>
            Supreme Embellishment Ltd.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.75)", maxWidth: "580px", lineHeight: 1.8 }}>
            A sister concern of Supreme Stitch Ltd. — a fully integrated, high-capacity embellishment facility specializing in advanced printing and embroidery services.
          </p>
        </div>
      </section>

      {/* INFO BAR */}
      <section style={{ background: "#112240", borderBottom: "1px solid rgba(201,168,76,0.15)", padding: "18px 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", fontWeight: 500, letterSpacing: "0.3px" }}>
          <span>140/1, East Baghbari, Kashimpur, Gazipur</span>
          <span style={{ color: "rgba(201,168,76,0.4)" }}>|</span>
          <span>+8801678-038802</span>
          <span style={{ color: "rgba(201,168,76,0.4)" }}>|</span>
          <span><a href="mailto:admin@supremegroupbd.com" style={{ color: "#C9A84C", textDecoration: "none" }}>admin@supremegroupbd.com</a></span>
          <span style={{ color: "rgba(201,168,76,0.4)" }}>|</span>
          <span>Mon–Thu, Sat–Sun: 8:30 AM – 5:30 PM</span>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#C9A84C", padding: "36px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }}>
            {[
              { num: "62,000", label: "Sq Ft Floor" },
              { num: "80,000", label: "Print Pcs / Day" },
              { num: "520", label: "Professionals" },
              { num: "3 m³/hr", label: "ETP Capacity" },
            ].map((s, i) => (
              <div key={s.label} style={{
                textAlign: "center",
                padding: "8px 24px",
                borderRight: i < 3 ? "1px solid rgba(10,22,40,0.15)" : "none",
              }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, color: "#0A1628", lineHeight: 1 }}>
                  {s.num}
                </div>
                <div style={{ fontSize: "0.68rem", color: "rgba(10,22,40,0.65)", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginTop: "6px" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:600px){.container > div{grid-template-columns:repeat(2,1fr)!important;} .container > div > div{border-right:none!important; padding:16px!important;}}`}</style>
      </section>

      {/* CONTENT */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, color: "#0A1628", marginBottom: "16px" }}>
                We Don&apos;t Just Embellish Garments — <span style={{ color: "#C9A84C" }}>We Elevate Them</span>
              </h2>
              <div className="gold-divider" />
              <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "20px" }}>
                Supreme Embellishment Ltd., a sister concern of Supreme Stitch Ltd., is a fully integrated, high-capacity embellishment facility specializing in both advanced printing and embroidery services. Located in a 62,000 square feet modern production floor, our facility is designed to meet the ever-evolving demands of the global apparel industry.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "20px" }}>
                Our printing section boasts a daily capacity of 80,000 pieces, powered by cutting-edge technology and supported by a robust Effluent Treatment Plant (ETP) with a capacity of 3 m³/hour, ensuring our commitment to sustainable and eco-friendly operations.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "20px" }}>
                On the embroidery side, we are equipped with a comprehensive range of multi-head embroidery machines, capable of producing intricate and high-quality designs across a wide variety of garments. Our advanced setups allow for speed, precision, and consistency, catering to diverse client needs including fashion, promotional, and industrial applications.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "20px" }}>
                Our workforce is our greatest strength — a team of 520 highly skilled professionals trained to maintain top-tier quality standards and optimize production efficiency. Whether it&apos;s a complex embroidery pattern or a large-scale print run, we combine craftsmanship and technology to deliver excellence at every stage.
              </p>
              <div className="highlight-block">
                <p style={{ color: "#0A1628", fontStyle: "italic", fontWeight: 500, lineHeight: 1.7 }}>
                  &ldquo;At Supreme Embellishment Ltd., we don&apos;t just embellish garments; we elevate them.&rdquo;
                </p>
              </div>
            </div>
            <div style={{ display: "grid", gap: "16px" }}>
              <div style={{ position: "relative", height: "300px", borderRadius: "4px", overflow: "hidden" }}>
                <Image src="/images/embellishment-printing.jpg" alt="Printing section" fill style={{ objectFit: "cover" }} sizes="600px" />
              </div>
              <div style={{ position: "relative", height: "300px", borderRadius: "4px", overflow: "hidden" }}>
                <Image src="/images/embellishment-embroidery.jpg" alt="Embroidery section" fill style={{ objectFit: "cover" }} sizes="600px" />
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* SERVICES */}
      <section className="section-pad" style={{ background: "#f8f6f1" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ fontSize: "0.72rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
              What We Do
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#0A1628" }}>
              Our Capabilities
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { num: "01", title: "Screen Printing", desc: "High-volume screen printing with precision color matching for large production runs." },
              { num: "02", title: "Embroidery", desc: "Multi-head machines for intricate designs on all garment types with precise reproduction." },
              { num: "03", title: "Heat Transfer", desc: "Advanced heat transfer printing for detailed, photo-quality graphics on any fabric." },
              { num: "04", title: "Sublimation", desc: "Full-color sublimation for vibrant, wash-permanent prints on synthetic fabrics." },
              { num: "05", title: "Fashion Applications", desc: "Custom embellishments for fashion, promotional, and industrial applications." },
              { num: "06", title: "Sustainable ETP", desc: "In-house Effluent Treatment Plant at 3 m³/hr ensuring fully eco-friendly operations." },
            ].map((s) => (
              <div key={s.title} className="card-hover" style={{
                background: "white",
                border: "1px solid #e8e8e0",
                borderRadius: "4px",
                padding: "32px 28px",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.7rem", color: "#C9A84C", letterSpacing: "2px", marginBottom: "16px", fontWeight: 600 }}>
                  {s.num}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 600, color: "#0A1628", marginBottom: "10px" }}>{s.title}</h3>
                <div style={{ width: "24px", height: "1px", background: "#C9A84C", marginBottom: "12px", opacity: 0.5 }} />
                <p style={{ fontSize: "0.845rem", color: "#6b7280", lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div:last-child{grid-template-columns:1fr!important;}}@media(min-width:769px) and (max-width:1023px){.container > div:last-child{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>

      {/* CTA */}
      <section style={{ background: "#0A1628", padding: "80px 0", textAlign: "center", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
        <div className="container">
          <p style={{ fontSize: "0.72rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
            Work With Us
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "white", marginBottom: "16px" }}>
            Need Printing or Embroidery Services?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", marginBottom: "36px", maxWidth: "480px", margin: "0 auto 36px", lineHeight: 1.8 }}>
            80,000 pcs/day capacity with 520 skilled professionals ready to deliver excellence.
          </p>
          <Link href="/contact" className="btn-gold">Get In Touch</Link>
        </div>
      </section>
    </>
  );
}
