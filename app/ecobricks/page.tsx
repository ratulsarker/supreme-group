import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supreme Eco Bricks & Agro Ltd.",
  description: "Sustainable agricultural enterprise in Dhamrai, Dhaka — eco-friendly livestock, dairy, and egg production with biogas generation.",
};

export default function EcoBricksPage() {
  return (
    <>
      {/* HERO with background image */}
      <section style={{ position: "relative", minHeight: "70vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <Image src="/images/eco-wide.jpg" alt="Supreme Eco Bricks & Agro Farm" fill priority style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,22,40,0.88) 0%, rgba(10,22,40,0.5) 100%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "100px" }}>
          <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
            Sustainable Agriculture
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 700, color: "white", marginBottom: "20px" }}>
            Supreme Eco Bricks & Agro Ltd.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.75)", maxWidth: "560px", lineHeight: 1.8 }}>
            A sustainable agricultural enterprise based in Dhamrai, Dhaka — practicing 100% natural and sustainable farming.
          </p>
        </div>
      </section>

      {/* INFO BAR */}
      <section style={{ background: "#C9A84C", padding: "20px 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", fontSize: "0.85rem", color: "#0A1628", fontWeight: 600 }}>
          <span>📍 Khagail, Berosh, Dhamrai, Dhaka - 1345</span>
          <span>📞 01678-038802</span>
          <span>🕐 Open 24 Hours</span>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, color: "#0A1628", marginBottom: "16px" }}>
                100% Natural & <span style={{ color: "#C9A84C" }}>Sustainable</span> Farming
              </h2>
              <div className="gold-divider" />
              <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "20px" }}>
                Supreme Eco Bricks and Agro Ltd. is a sustainable agricultural enterprise based in Dhamrai, Dhaka. The farm specializes in eco-friendly livestock and agricultural production, currently raising over 400 cows, 150 sheep, and 100 ducks and geese.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "20px" }}>
                In addition to animal husbandry, the company is actively involved in dairy and egg production, while practicing 100% natural and sustainable farming. All cattle are fed from naturally grown field crops, and the farm incorporates eco-friendly systems like biogas generation to minimize environmental impact and promote a fully integrated, self-sustaining agricultural model.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div style={{ position: "relative", height: "220px", borderRadius: "4px", overflow: "hidden" }}>
                <Image src="/images/eco-bhuri.jpg" alt="Farm animal" fill style={{ objectFit: "cover" }} sizes="300px" />
              </div>
              <div style={{ position: "relative", height: "220px", borderRadius: "4px", overflow: "hidden" }}>
                <Image src="/images/eco-cow.jpg" alt="Cows" fill style={{ objectFit: "cover" }} sizes="300px" />
              </div>
              <div style={{ position: "relative", height: "220px", borderRadius: "4px", overflow: "hidden" }}>
                <Image src="/images/eco-grass.png" alt="Farm fields" fill style={{ objectFit: "cover" }} sizes="300px" />
              </div>
              <div style={{ position: "relative", height: "220px", borderRadius: "4px", overflow: "hidden" }}>
                <Image src="/images/eco-shed.jpg" alt="Farm shed" fill style={{ objectFit: "cover" }} sizes="300px" />
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* VIDEO */}
      <section className="section-pad" style={{ background: "#0A1628" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
            Watch
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, color: "white", marginBottom: "32px" }}>
            Life at the Farm
          </h2>
          <div style={{ position: "relative", width: "100%", maxWidth: "800px", margin: "0 auto", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              src="https://www.youtube.com/embed/YXaeAF1uvhE"
              title="Supreme Eco Bricks & Agro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none", borderRadius: "4px" }}
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#0A1628", padding: "60px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
            {[
              { num: "400+", label: "Cows" },
              { num: "150", label: "Sheep" },
              { num: "100+", label: "Ducks & Geese" },
              { num: "100%", label: "Natural Farming" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center", padding: "24px", background: "#112240", borderRadius: "4px", border: "1px solid rgba(201,168,76,0.15)" }}>
                <div className="stat-number">{s.num}</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginTop: "8px", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>

      {/* MORE IMAGES */}
      <section className="section-pad" style={{ background: "#f8f6f1" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#0A1628", textAlign: "center", marginBottom: "40px" }}>
            Life at the Farm
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
            {["/images/eco-1.jpg", "/images/eco-2.jpg", "/images/eco-wide.jpg"].map((src, i) => (
              <div key={i} style={{ position: "relative", height: "260px", borderRadius: "4px", overflow: "hidden" }}>
                <Image src={src} alt={`Farm photo ${i + 1}`} fill style={{ objectFit: "cover" }} sizes="400px" />
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div:last-child{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #C9A84C 0%, #a8832e 100%)", padding: "60px 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#0A1628", marginBottom: "16px" }}>
            Interested in Sustainable Agriculture?
          </h2>
          <Link href="/contact" style={{ display: "inline-block", background: "#0A1628", color: "#C9A84C", fontWeight: 700, padding: "14px 36px", borderRadius: "2px", textDecoration: "none", fontSize: "0.95rem" }}>
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
