import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supreme Accessories Industries Ltd.",
  description: "Leading garment accessories manufacturer in Bangladesh — poly bags, labels, threads, elastic, twill tape, and more.",
};

export default function AccessoriesPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", minHeight: "70vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <Image src="/images/accessories-front.jpg" alt="Supreme Accessories Industries" fill priority style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.55) 60%, rgba(10,22,40,0.2) 100%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "100px" }}>
          <p style={{ fontSize: "0.72rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
            Garment Accessories
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 700, color: "white", marginBottom: "20px", lineHeight: 1.1 }}>
            Supreme Accessories Industries Ltd.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.72)", maxWidth: "560px", lineHeight: 1.85 }}>
            Your one-stop solution for garment accessories — equipped with advanced machinery and a commitment to quality and efficiency.
          </p>
        </div>
      </section>

      {/* CONTACT BAR */}
      <section style={{ background: "#112240", borderBottom: "1px solid rgba(201,168,76,0.15)", padding: "18px 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", fontWeight: 500, letterSpacing: "0.3px" }}>
          <span>358 West Shaildube, Kashimpur Gazipur – 1700</span>
          <span style={{ color: "rgba(201,168,76,0.4)" }}>|</span>
          <span>+8801678-038802</span>
          <span style={{ color: "rgba(201,168,76,0.4)" }}>|</span>
          <span><a href="mailto:admin@supremegroupbd.com" style={{ color: "#C9A84C", textDecoration: "none" }}>admin@supremegroupbd.com</a></span>
          <span style={{ color: "rgba(201,168,76,0.4)" }}>|</span>
          <span>Mon–Thu, Sat–Sun: 8:30 AM – 5:30 PM</span>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, color: "#0A1628", marginBottom: "16px" }}>
                A Reliable <span style={{ color: "#C9A84C" }}>One-Stop Solution</span>
              </h2>
              <div className="gold-divider" />
              <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "20px" }}>
                Supreme Accessories Industries Ltd. is a leading garment accessories manufacturer based in Bangladesh, equipped with advanced machinery and a commitment to quality and efficiency. With specialized production units for items such as poly bags, printed labels, offset prints, sewing threads, elastic, and twill tape, we cater to the diverse needs of the apparel industry.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "20px" }}>
                Our daily production capacity includes 3,20,000 poly bags, 1,60,000 printed labels, 1,00,000 offset prints, and much more. Backed by over 80 machines across 12 production lines, we ensure high-volume output while maintaining top-tier standards.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.8 }}>
                Our integrated facilities also include BOPP cutting, draw cords, drawstrings, interlinings, and neck boards — making us a reliable one-stop solution for garment accessories.
              </p>
            </div>
            <div style={{ display: "grid", gap: "16px" }}>
              <div style={{ position: "relative", height: "300px", borderRadius: "4px", overflow: "hidden" }}>
                <Image src="/images/accessories-front.jpg" alt="Accessories facility" fill style={{ objectFit: "cover" }} sizes="600px" />
              </div>
              <div style={{ position: "relative", height: "250px", borderRadius: "4px", overflow: "hidden" }}>
                <Image src="/images/accessories-table.jpg" alt="Accessories production" fill style={{ objectFit: "cover" }} sizes="600px" />
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* PRODUCTION STATS */}
      <section style={{ background: "#C9A84C", padding: "36px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }}>
            {[
              { num: "3,20,000", label: "Poly Bags / Day" },
              { num: "1,60,000", label: "Labels / Day" },
              { num: "1,00,000", label: "Offset Prints / Day" },
              { num: "80+", label: "Machines" },
            ].map((s, i) => (
              <div key={s.label} style={{
                textAlign: "center",
                padding: "8px 24px",
                borderRight: i < 3 ? "1px solid rgba(10,22,40,0.15)" : "none",
              }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#0A1628", lineHeight: 1 }}>
                  {s.num}
                </div>
                <div style={{ fontSize: "0.65rem", color: "rgba(10,22,40,0.65)", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", marginTop: "6px" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:600px){.container > div{grid-template-columns:repeat(2,1fr)!important;} .container > div > div{border-right:none!important; padding:16px!important;}}`}</style>
      </section>

      {/* PRODUCTS LIST */}
      <section className="section-pad" style={{ background: "#f8f6f1" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ fontSize: "0.72rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
            What We Make
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#0A1628", marginBottom: "48px" }}>
            Our Products
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", maxWidth: "860px", margin: "0 auto" }}>
            {["Poly Bags", "Printed Labels", "Offset Prints", "Sewing Threads", "Elastic", "Twill Tape", "BOPP Cutting", "Draw Cords", "Drawstrings", "Interlinings", "Neck Boards", "Cartons"].map((product) => (
              <div key={product} className="product-tag">
                {product}
              </div>
            ))}
          </div>
          <style>{`
            .product-tag {
              background: white;
              border: 1px solid #e8e8e0;
              border-top: 2px solid transparent;
              border-radius: 3px;
              padding: 18px 16px;
              font-size: 0.845rem;
              font-weight: 500;
              color: #0A1628;
              letter-spacing: 0.3px;
              transition: border-top-color 0.2s;
            }
            .product-tag:hover {
              border-top-color: #C9A84C;
            }
          `}</style>
        </div>
        <style>{`@media(max-width:600px){.container > div:last-child{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>

      {/* GOOGLE MAP */}
      <section style={{ background: "#f8f6f1", padding: "60px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#0A1628", marginBottom: "32px" }}>Our Location</h2>
          <div style={{ borderRadius: "8px", overflow: "hidden", border: "2px solid rgba(201,168,76,0.3)", maxWidth: "900px", margin: "0 auto" }}>
            <iframe src="https://maps.google.com/maps?q=Supreme%20Accessories%20Industries%20Ltd%20Kashimpur%20Gazipur%20Bangladesh&t=m&z=17&output=embed&iwloc=near" width="100%" height="400" style={{ border: "none" }} allowFullScreen loading="lazy" title="Supreme Accessories Industries Ltd. Location" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0A1628", padding: "80px 0", textAlign: "center", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
        <div className="container">
          <p style={{ fontSize: "0.72rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
            Work With Us
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "white", marginBottom: "16px" }}>
            Need Garment Accessories?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", marginBottom: "36px", maxWidth: "480px", margin: "0 auto 36px", lineHeight: 1.8 }}>
            12 production lines, 80+ machines, and the capacity to deliver at scale. Get in touch today.
          </p>
          <Link href="/contact" className="btn-gold">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
