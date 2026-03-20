import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supreme Stitch Ltd. — 100% Export Oriented Garments Manufacturer",
  description: "Supreme Stitch Ltd. is a vertically integrated garment manufacturer in Bangladesh, trusted by Fanatics, Hanes, Walmart & Champion. 60,000 knitwear items per day.",
};

const features = [
  {
    icon: "☀️",
    title: "Sustainable & Solar Powered",
    stat: "468 KW",
    description: "Powered by a 468 KW solar installation generating 94% renewable energy. Sustainability is embedded in every stage of production.",
  },
  {
    icon: "⚡",
    title: "High Production Capacity",
    stat: "60k/day",
    description: "Producing 60,000 knitwear items per day with consistent quality. Vertically integrated from yarn to finished product.",
  },
  {
    icon: "✅",
    title: "Uncompromising Quality",
    stat: "AQL 1.0",
    description: "In-house testing laboratory with AQL 1.0 quality control. Every garment passes multi-stage inspections before shipment.",
  },
  {
    icon: "⭐",
    title: "Trusted by Global Brands",
    stat: "World-Class",
    description: "Proud supplier to Fanatics, Hanes, Walmart, and Champion — some of the world's largest sportswear and retail brands.",
  },
  {
    icon: "⚙️",
    title: "Innovation & Technology",
    stat: "1,064 Machines",
    description: "Operating 1,064 sewing machines, CAD-CAM design software, and automated printing systems for precision and efficiency at scale.",
  },
  {
    icon: "❤️",
    title: "Employee Support",
    stat: "2,500+ Workers",
    description: "On-site medical care, childcare facilities, free worker transport, group insurance, and comprehensive welfare programs for all employees.",
  },
];

const certifications = [
  { src: "/images/cert-bsci.png", alt: "BSCI / Amfori" },
  { src: "/images/cert-alliance.png", alt: "Alliance" },
  { src: "/images/cert-rsc.png", alt: "RSC" },
  { src: "/images/cert-sedex.png", alt: "Sedex" },
  { src: "/images/cert-accord.png", alt: "Accord" },
  { src: "/images/cert-gots.png", alt: "GOTS" },
  { src: "/images/cert-2.png", alt: "Certification" },
  { src: "/images/cert-3.png", alt: "Certification" },
  { src: "/images/cert-4.png", alt: "Certification" },
  { src: "/images/cert-7.png", alt: "Certification" },
  { src: "/images/cert-8.png", alt: "Certification" },
  { src: "/images/cert-9.png", alt: "Certification" },
];

const clients = [
  { src: "/images/walmart-logo.png", alt: "Walmart" },
  { src: "/images/fanatics-logo.png", alt: "Fanatics" },
  { src: "/images/champion-logo.png", alt: "Champion" },
];

export default function StitchPage() {
  return (
    <>
      {/* HERO with background image */}
      <section style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}>
        <Image
          src="/images/stitch-bg-slideshow.jpg"
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
              Cutting-edge technology, sustainable practices, and expert craftsmanship — delivering high-quality garments that meet international standards.
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
              <a href="#video" className="btn-outline-gold">Watch Video</a>
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

      {/* YOUTUBE VIDEO SECTION */}
      <section id="video" className="section-pad" style={{ background: "#0A1628" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
            See Us In Action
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.4rem", fontWeight: 700, color: "white", marginBottom: "40px" }}>
            Factory Tour
          </h2>
          <div style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            borderRadius: "8px",
            border: "2px solid rgba(201,168,76,0.3)",
            maxWidth: "900px",
            margin: "0 auto",
          }}>
            <iframe
              src="https://www.youtube.com/embed/jY8u0RTi92I"
              title="Supreme Stitch Ltd. Factory Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
              <a
                href="/images/company-profile-thumb.jpg"
                target="_blank"
                className="btn-gold"
                style={{ marginTop: "16px" }}
              >
                📄 Download Company Profile
              </a>
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
                <div style={{ fontSize: "2rem", marginBottom: "8px" }}>{feature.icon}</div>
                <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "1px", marginBottom: "8px" }}>
                  {feature.stat}
                </div>
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
                <Image src="/images/stitch-hero.png" alt="Supreme Stitch" fill style={{ objectFit: "cover" }} sizes="400px" />
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "16px" }}>
            <div style={{ position: "relative", height: "260px", borderRadius: "4px", overflow: "hidden" }}>
              <Image src="/images/stitch-2.png" alt="Production line" fill style={{ objectFit: "cover" }} sizes="600px" />
            </div>
            <div style={{ position: "relative", height: "260px", borderRadius: "4px", overflow: "hidden" }}>
              <Image src="/images/stitch-3.png" alt="Quality control" fill style={{ objectFit: "cover" }} sizes="600px" />
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div:nth-child(2){grid-template-columns:1fr!important;} .container > div:nth-child(2) > div:first-child{height:260px!important;}}`}</style>
      </section>

      {/* CERTIFICATIONS */}
      <section style={{ background: "#112240", padding: "80px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
            Compliance & Certifications
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "white", marginBottom: "48px" }}>
            Internationally Certified
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "24px", maxWidth: "900px", margin: "0 auto" }}>
            {certifications.map((cert, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <div style={{
                  background: "white",
                  borderRadius: "8px",
                  padding: "12px",
                  width: "90px",
                  height: "90px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    width={70}
                    height={70}
                    style={{ maxHeight: "65px", width: "auto", objectFit: "contain" }}
                  />
                </div>
                <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{cert.alt}</span>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div:last-child{grid-template-columns:repeat(3,1fr)!important;}}@media(max-width:480px){.container > div:last-child{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>

      {/* GOOGLE MAPS */}
      <section style={{ background: "#f8f6f1", padding: "60px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#0A1628", marginBottom: "32px" }}>
            Our Location
          </h2>
          <div style={{
            borderRadius: "8px",
            overflow: "hidden",
            border: "2px solid rgba(201,168,76,0.3)",
            maxWidth: "900px",
            margin: "0 auto",
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.8977698763977!2d90.3554741!3d24.0185944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1e5a57e1b1d%3A0x6c4c3e4e0e7b2a0d!2sKashimpur%2C%20Gazipur!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
              width="100%"
              height="400"
              style={{ border: "none" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Supreme Stitch Factory Location"
            />
          </div>
        </div>
      </section>

      {/* CTA with background */}
      <section style={{
        position: "relative",
        padding: "100px 0",
        textAlign: "center",
        overflow: "hidden",
      }}>
        <Image
          src="/images/stitch-cta-bg.jpg"
          alt="CTA Background"
          fill
          style={{ objectFit: "cover" }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(201,168,76,0.92) 0%, rgba(168,131,46,0.92) 100%)",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
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
