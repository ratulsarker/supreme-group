import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supreme Stitch Ltd. — 100% Export Oriented Garments Manufacturer",
  description: "Supreme Stitch Ltd. is a vertically integrated garment manufacturer in Bangladesh, trusted by Fanatics, Hanes, Walmart & Champion. 60,000 knitwear items per day.",
};

const features = [
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#C9A84C" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: "Sustainable & Eco-Friendly Manufacturing",
    description: "Powered by a 468 KW solar installation generating 94% renewable energy. Our commitment to sustainability is embedded in every stage of production.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#C9A84C" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: "High Production Capacity",
    description: "Producing 60,000 knitwear items per day with consistent quality. Our vertically integrated facility handles everything from yarn to finished product.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#C9A84C" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Uncompromising Quality Standards",
    description: "In-house testing laboratory with AQL 1.0 quality control. Every garment passes through multi-stage inspections before shipment.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#C9A84C" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "Trusted by Global Brands",
    description: "Proud supplier to Fanatics, Hanes, Walmart, and Champion — some of the world's largest sportswear and retail brands.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#C9A84C" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: "Innovation & Advanced Technology",
    description: "Operating 1,064 sewing machines, CAD-CAM design software, and automated printing systems for precision and efficiency at scale.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#C9A84C" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    ),
    title: "Outstanding Worker Support",
    description: "On-site medical care, childcare facilities, free worker transport, group insurance, and comprehensive welfare programs for all employees.",
  },
];

const certifications = [
  { src: "/images/cert-bsci.png", alt: "BSCI / Amfori" },
  { src: "/images/cert-alliance.png", alt: "Alliance" },
  { src: "/images/cert-rsc.png", alt: "RSC" },
  { src: "/images/cert-sedex.png", alt: "Sedex" },
  { src: "/images/cert-accord.png", alt: "Accord" },
];

const clients = [
  { src: "/images/walmart-logo.png", alt: "Walmart" },
  { src: "/images/fanatics-logo.png", alt: "Fanatics" },
  { src: "/images/champion-logo.png", alt: "Champion" },
];

export default function StitchPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <Image
          src="/images/stitch-hero.png"
          alt="Supreme Stitch Factory"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.7) 50%, rgba(10,22,40,0.5) 100%)",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "100px" }}>
          <div style={{ maxWidth: "700px" }}>
            <div style={{
              display: "inline-block",
              background: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.4)",
              borderRadius: "2px",
              padding: "6px 16px",
              marginBottom: "24px",
            }}>
              <span style={{ color: "#C9A84C", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>
                100% Export Oriented Garments Manufacturer
              </span>
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "24px",
            }}>
              Supreme Stitch Ltd.
            </h1>
            <p style={{
              fontSize: "1.15rem",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.8,
              marginBottom: "16px",
              maxWidth: "580px",
            }}>
              At Supreme Stitch Ltd., we combine cutting-edge technology, sustainable practices, and expert craftsmanship to deliver high-quality garments that meet international standards.
            </p>
            <p style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.6)",
              fontStyle: "italic",
              lineHeight: 1.7,
              marginBottom: "36px",
              maxWidth: "580px",
            }}>
              &ldquo;To be a globally recognized leader in the garment industry, setting new standards for quality, innovation, and sustainability.&rdquo;
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-gold">Partner With Us</Link>
              <a href="#about" className="btn-outline-gold">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: "#C9A84C", padding: "28px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {[
              { num: "$50M+", label: "ANNUAL REVENUE" },
              { num: "2,500+", label: "SKILLED WORKERS" },
              { num: "60,000+", label: "DAILY PRODUCTION" },
              { num: "20+", label: "YEARS ON MARKET" },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#0A1628" }}>
                  {item.num}
                </div>
                <div style={{ fontSize: "0.7rem", color: "#0A1628", fontWeight: 700, letterSpacing: "2px", marginTop: "2px" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:600px){section > .container > div{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>

      {/* OFFICE INFO */}
      <section style={{ background: "#f8f6f1", padding: "48px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            <div style={{ padding: "24px", background: "white", borderRadius: "4px", borderLeft: "4px solid #C9A84C" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#0A1628", marginBottom: "12px" }}>Head Office</h3>
              <p style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.7 }}>
                49/1 Purana Paltan Line, Dhaka-1000, Bangladesh<br />
                Phone: +88-02-9359825 | Fax: 88-02-9350660<br />
                Email: <a href="mailto:office@supremegroupbd.com" style={{ color: "#C9A84C" }}>office@supremegroupbd.com</a>
              </p>
            </div>
            <div style={{ padding: "24px", background: "white", borderRadius: "4px", borderLeft: "4px solid #C9A84C" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#0A1628", marginBottom: "12px" }}>Factory</h3>
              <p style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.7 }}>
                358 West Shaildube, Kashimpur Gazipur – 1700, Bangladesh<br />
                Phone: +8801678038802<br />
                Email: <a href="mailto:admin@supremegroupbd.com" style={{ color: "#C9A84C" }}>admin@supremegroupbd.com</a>, <a href="mailto:compliance@supremegroupbd.com" style={{ color: "#C9A84C" }}>compliance@supremegroupbd.com</a>
              </p>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section-pad">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
                About Supreme Stitch
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.4rem", fontWeight: 700, color: "#0A1628", marginBottom: "16px", lineHeight: 1.15 }}>
                Vertically Integrated <span style={{ color: "#C9A84C" }}>Excellence</span>
              </h2>
              <div className="gold-divider" />
              <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "20px" }}>
                At Supreme Stitch Ltd., we combine cutting-edge technology, sustainable practices, and expert craftsmanship to deliver high-quality garments that meet international standards.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "20px" }}>
                As a vertically integrated manufacturer, Supreme Stitch Ltd. oversees the entire supply chain, from fabric production to final packaging. Our state-of-the-art knitting, cutting, sewing, printing, and finishing facilities, combined with in-house accessory manufacturing, allow us to maintain the highest quality standards while reducing lead times and costs.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div style={{ position: "relative", height: "280px", borderRadius: "4px", overflow: "hidden" }}>
                <Image src="/images/stitch-2.png" alt="Supreme Stitch production" fill style={{ objectFit: "cover" }} sizes="300px" />
              </div>
              <div style={{ position: "relative", height: "280px", borderRadius: "4px", overflow: "hidden", marginTop: "40px" }}>
                <Image src="/images/stitch-3.png" alt="Supreme Stitch quality" fill style={{ objectFit: "cover" }} sizes="300px" />
              </div>
              <div style={{ position: "relative", height: "280px", borderRadius: "4px", overflow: "hidden", gridColumn: "span 2" }}>
                <Image src="/images/stitch-factory-2.png" alt="Supreme Stitch factory floor" fill style={{ objectFit: "cover" }} sizes="600px" />
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){#about .container > div{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* KEY FEATURES */}
      <section className="section-pad" style={{ background: "#0A1628" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
              Why Choose Us
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.6rem", fontWeight: 700, color: "white", marginBottom: "16px" }}>
              What Sets Us Apart
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card-hover"
                style={{
                  background: "#112240",
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: "4px",
                  padding: "32px 28px",
                }}
              >
                <div style={{ marginBottom: "16px" }}>{feature.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 600, color: "white", marginBottom: "12px", lineHeight: 1.3 }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:1024px){.container > div:last-child{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:600px){.container > div:last-child{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* FACTORY IMAGES */}
      <section className="section-pad" style={{ background: "#f8f6f1" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.4rem", fontWeight: 700, color: "#0A1628" }}>
              Our Factory
            </h2>
            <div style={{ width: "60px", height: "3px", background: "#C9A84C", margin: "16px auto 0" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "16px" }}>
            <div style={{ position: "relative", height: "400px", borderRadius: "4px", overflow: "hidden" }}>
              <Image src="/images/stitch-factory-1.png" alt="Factory overview" fill style={{ objectFit: "cover" }} sizes="800px" />
            </div>
            <div style={{ display: "grid", gap: "16px" }}>
              <div style={{ position: "relative", height: "192px", borderRadius: "4px", overflow: "hidden" }}>
                <Image src="/images/stitch-factory-2.png" alt="Factory sewing floor" fill style={{ objectFit: "cover" }} sizes="400px" />
              </div>
              <div style={{ position: "relative", height: "192px", borderRadius: "4px", overflow: "hidden" }}>
                <Image src="/images/stitch-2.png" alt="Factory production" fill style={{ objectFit: "cover" }} sizes="400px" />
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div:last-child{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* CLIENTS */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
            Our Clients
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.4rem", fontWeight: 700, color: "#0A1628", marginBottom: "48px" }}>
            Trusted by Global Brands
          </h2>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "80px", flexWrap: "wrap" }}>
            {clients.map((logo) => (
              <div key={logo.alt} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={80}
                  style={{ height: "60px", width: "auto", objectFit: "contain" }}
                />
                <span style={{ fontSize: "0.8rem", color: "#6b7280", fontWeight: 500 }}>{logo.alt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section style={{ background: "#112240", padding: "60px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
            Compliance & Certifications
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "white", marginBottom: "40px" }}>
            Internationally Certified
          </h2>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "48px", flexWrap: "wrap" }}>
            {certifications.map((cert) => (
              <div key={cert.alt} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <div style={{
                  background: "white",
                  borderRadius: "8px",
                  padding: "16px",
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    width={80}
                    height={80}
                    style={{ maxHeight: "70px", width: "auto", objectFit: "contain" }}
                  />
                </div>
                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{cert.alt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "linear-gradient(135deg, #C9A84C 0%, #a8832e 100%)",
        padding: "80px 0",
        textAlign: "center",
      }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.4rem", fontWeight: 700, color: "#0A1628", marginBottom: "16px" }}>
            Partner with a Leader in Garment Manufacturing
          </h2>
          <p style={{ color: "rgba(10,22,40,0.72)", fontSize: "1.05rem", marginBottom: "36px", maxWidth: "600px", margin: "0 auto 36px" }}>
            Join global brands like Fanatics, Hanes, and Walmart who trust us for high-quality, sustainable apparel. Experience vertically integrated excellence.
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
