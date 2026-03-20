import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import CountUpStats from "@/components/CountUpStats";

export const metadata: Metadata = {
  title: "Supreme Stitch Ltd. — 100% Export Oriented Garments Manufacturer",
  description: "Supreme Stitch Ltd. is a vertically integrated garment manufacturer in Bangladesh, trusted by Fanatics, Hanes, Walmart & Champion. 60,000 knitwear items per day.",
};

const features = [
  {
    number: "01",
    title: "Sustainable & Solar Powered",
    stat: "468 KW",
    statLabel: "Solar Installation",
    description: "A 468 KW solar installation generates 94% of our energy from renewable sources. Sustainability is embedded in every stage of production.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "High Production Capacity",
    stat: "60,000",
    statLabel: "Items Per Day",
    description: "60,000 knitwear items produced daily with consistent quality. Vertically integrated from yarn to finished product.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Uncompromising Quality",
    stat: "AQL 1.0",
    statLabel: "Quality Standard",
    description: "In-house testing laboratory with AQL 1.0 quality control. Every garment passes multi-stage inspections before shipment.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Trusted by Global Brands",
    stat: "World-Class",
    statLabel: "Partner Network",
    description: "Proud supplier to Fanatics, Hanes, Walmart, and Champion — some of the world's largest sportswear and retail brands.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    number: "05",
    title: "Innovation & Technology",
    stat: "1,064",
    statLabel: "Sewing Machines",
    description: "Operating 1,064 sewing machines, CAD-CAM design software, and automated printing systems for precision and efficiency at scale.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93l-1.41 1.41M18.36 18.36l-1.41-1.41M4.93 4.93l1.41 1.41M5.64 18.36l1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2"/>
      </svg>
    ),
  },
  {
    number: "06",
    title: "Employee Welfare",
    stat: "2,500+",
    statLabel: "Workers",
    description: "On-site medical care, childcare facilities, free worker transport, group insurance, and comprehensive welfare programs for all employees.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
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
  { src: "/images/costco-logo.png", alt: "Costco" },
  { src: "/images/hanes-logo.png", alt: "Hanes" },
  { src: "/images/madengine-logo.png", alt: "Mad Engine" },
];

export default function StitchPage() {
  return (
    <>
      {/* HERO */}
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
          background: "linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.75) 50%, rgba(10,22,40,0.45) 100%)",
        }} />
        {/* Subtle horizontal rule at top */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />

        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "100px" }}>
          <div style={{ maxWidth: "700px" }}>
            <div className="hero-eyebrow">
              100% Export Oriented Garments Manufacturer
            </div>
            <h1 className="hero-h1">
              Supreme Stitch Ltd.
            </h1>
            <p style={{
              fontSize: "1.15rem",
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.85,
              marginBottom: "16px",
              maxWidth: "560px",
            }}>
              Cutting-edge technology, sustainable practices, and expert craftsmanship — delivering high-quality garments that meet international standards.
            </p>
            <p style={{
              fontSize: "0.975rem",
              color: "rgba(255,255,255,0.5)",
              fontStyle: "italic",
              fontFamily: "'Playfair Display', serif",
              lineHeight: 1.7,
              marginBottom: "40px",
              maxWidth: "560px",
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
      <CountUpStats />

      {/* OFFICE INFO */}
      <section style={{ background: "#f8f6f1", padding: "56px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
            <div className="info-card-bordered">
              <div className="info-card-label">Head Office</div>
              <p className="info-card-body">
                49/1 Purana Paltan Line, Dhaka-1000, Bangladesh<br />
                Phone: +88-02-9359825 &nbsp;|&nbsp; Fax: 88-02-9350660<br />
                <a href="mailto:office@supremegroupbd.com" className="link-gold">office@supremegroupbd.com</a>
              </p>
            </div>
            <div className="info-card-bordered">
              <div className="info-card-label">Factory</div>
              <p className="info-card-body">
                358 West Shaildube, Kashimpur Gazipur – 1700, Bangladesh<br />
                Phone: +8801678038802<br />
                <a href="mailto:admin@supremegroupbd.com" className="link-gold">admin@supremegroupbd.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section id="video" className="section-pad" style={{ background: "#0A1628" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow">See Us In Action</p>
          <h2 className="section-h2-light">Factory Tour</h2>
          <div style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            borderRadius: "4px",
            border: "1px solid rgba(201,168,76,0.25)",
            maxWidth: "900px",
            margin: "0 auto",
          }}>
            <iframe
              src="https://www.youtube.com/embed/jY8u0RTi92I"
              title="Supreme Stitch Ltd. Factory Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
      </section>

      {/* CLIENTS MARQUEE */}
      <section className="section-pad" style={{ background: "white", overflow: "hidden" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p className="section-eyebrow">Our Clients</p>
          <h2 className="section-h2-dark">Trusted by Global Brands</h2>
        </div>
        <div className="marquee-container">
          <div className="marquee-track">
            {[...Array(3)].map((_, setIdx) => (
              clients.map((logo, i) => (
                <img
                  key={`${setIdx}-${i}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="marquee-logo"
                  style={{ filter: "none", opacity: 0.85 }}
                />
              ))
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section-pad" style={{ background: "#f8f6f1" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center" }}>
            <div>
              <p className="section-eyebrow">About Supreme Stitch</p>
              <h2 className="section-h2-dark" style={{ marginBottom: "16px" }}>
                Vertically Integrated <span style={{ color: "#C9A84C" }}>Excellence</span>
              </h2>
              <div className="gold-divider" />
              <p style={{ color: "#4a5568", lineHeight: 1.85, marginBottom: "20px", fontSize: "1rem" }}>
                At Supreme Stitch Ltd., we combine cutting-edge technology, sustainable practices, and expert craftsmanship to deliver high-quality garments that meet international standards.
              </p>
              <p style={{ color: "#4a5568", lineHeight: 1.85, marginBottom: "32px", fontSize: "1rem" }}>
                As a vertically integrated manufacturer, we oversee the entire supply chain — from fabric production to final packaging. Our state-of-the-art facilities and in-house accessory manufacturing allow us to maintain the highest quality standards while reducing lead times and costs.
              </p>
              <a
                href="mailto:office@supremegroupbd.com?subject=Company%20Profile%20Request"
                className="btn-gold"
              >
                Request Company Profile
              </a>
              <Link href="/contact" className="btn-outline-gold" style={{ marginLeft: "16px" }}>
                Get in Touch
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div style={{ position: "relative", height: "280px", borderRadius: "4px", overflow: "hidden" }}>
                <Image src="/images/stitch-bg-2.jpg" alt="Supreme Stitch production" fill style={{ objectFit: "cover" }} sizes="300px" />
              </div>
              <div style={{ position: "relative", height: "280px", borderRadius: "4px", overflow: "hidden", marginTop: "40px" }}>
                <Image src="/images/stitch-bg-slideshow.jpg" alt="Supreme Stitch quality" fill style={{ objectFit: "cover" }} sizes="300px" />
              </div>
              <div style={{ position: "relative", height: "200px", borderRadius: "4px", overflow: "hidden", gridColumn: "span 2" }}>
                <Image src="/images/stitch-cta-bg.jpg" alt="Supreme Stitch factory floor" fill style={{ objectFit: "cover" }} sizes="600px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT SETS US APART — Premium redesign */}
      <section className="section-pad" style={{ background: "#0A1628" }}>
        <div className="container">
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <p className="section-eyebrow">Why Choose Us</p>
            <h2 className="section-h2-light">What Sets Us Apart</h2>
            <div style={{ width: "40px", height: "1px", background: "#C9A84C", margin: "24px auto 0", opacity: 0.6 }} />
          </div>

          {/* Feature Grid — 2-column with large stat numbers */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="feature-card"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Top row: number + icon */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "28px" }}>
                  <span className="feature-number">{feature.number}</span>
                  <span className="feature-icon">{feature.icon}</span>
                </div>

                {/* Stat */}
                <div className="feature-stat">{feature.stat}</div>
                <div className="feature-stat-label">{feature.statLabel}</div>

                {/* Divider */}
                <div className="feature-divider" />

                {/* Title + description */}
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACTORY IMAGES */}
      <section className="section-pad" style={{ background: "#f8f6f1" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 className="section-h2-dark">Our Factory</h2>
            <div style={{ width: "60px", height: "2px", background: "#C9A84C", margin: "16px auto 0" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "16px" }}>
            <div style={{ position: "relative", height: "420px", borderRadius: "4px", overflow: "hidden" }}>
              <Image src="/images/stitch-building.jpg" alt="Factory overview" fill style={{ objectFit: "cover" }} sizes="800px" />
            </div>
            <div style={{ display: "grid", gap: "16px" }}>
              <div style={{ position: "relative", height: "202px", borderRadius: "4px", overflow: "hidden" }}>
                <Image src="/images/stitch-cta-bg.jpg" alt="Factory sewing floor" fill style={{ objectFit: "cover" }} sizes="400px" />
              </div>
              <div style={{ position: "relative", height: "202px", borderRadius: "4px", overflow: "hidden" }}>
                <Image src="/images/stitch-building.jpg" alt="Supreme Stitch" fill style={{ objectFit: "cover" }} sizes="400px" />
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "16px" }}>
            <div style={{ position: "relative", height: "260px", borderRadius: "4px", overflow: "hidden" }}>
              <Image src="/images/stitch-bg-2.jpg" alt="Production line" fill style={{ objectFit: "cover" }} sizes="600px" />
            </div>
            <div style={{ position: "relative", height: "260px", borderRadius: "4px", overflow: "hidden" }}>
              <Image src="/images/stitch-bg-slideshow.jpg" alt="Quality control" fill style={{ objectFit: "cover" }} sizes="600px" />
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section style={{ background: "#112240", padding: "80px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow">Compliance & Certifications</p>
          <h2 className="section-h2-light" style={{ marginBottom: "56px" }}>Internationally Certified</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "24px", maxWidth: "900px", margin: "0 auto" }}>
            {certifications.map((cert, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <div style={{
                  background: "white",
                  borderRadius: "6px",
                  padding: "12px",
                  width: "88px",
                  height: "88px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    width={64}
                    height={64}
                    style={{ maxHeight: "60px", width: "auto", objectFit: "contain" }}
                  />
                </div>
                <span style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.45)", fontWeight: 500, letterSpacing: "0.5px" }}>{cert.alt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section style={{ background: "#f8f6f1", padding: "60px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-h2-dark" style={{ marginBottom: "32px" }}>Our Location</h2>
          <div style={{
            borderRadius: "4px",
            overflow: "hidden",
            border: "1px solid rgba(201,168,76,0.25)",
            maxWidth: "900px",
            margin: "0 auto",
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.8977698763977!2d90.3554741!3d24.0185944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1e5a57e1b1d%3A0x6c4c3e4e0e7b2a0d!2sKashimpur%2C%20Gazipur!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
              width="100%"
              height="400"
              style={{ border: "none", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Supreme Stitch Factory Location"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        position: "relative",
        padding: "120px 0",
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
          background: "rgba(10,22,40,0.88)",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p className="section-eyebrow">Work With Us</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "white",
            marginBottom: "20px",
            lineHeight: 1.2,
          }}>
            Partner with a Leader in<br />Garment Manufacturing
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", marginBottom: "40px", maxWidth: "560px", margin: "0 auto 40px", lineHeight: 1.8 }}>
            Join global brands like Fanatics, Hanes, and Walmart who trust us for high-quality, sustainable apparel.
          </p>
          <Link href="/contact" className="btn-gold">Get In Touch</Link>
        </div>
      </section>

      <style>{`
        .hero-eyebrow {
          display: inline-block;
          background: rgba(201,168,76,0.12);
          border: 1px solid rgba(201,168,76,0.35);
          border-radius: 2px;
          padding: 6px 16px;
          margin-bottom: 24px;
          color: #C9A84C;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }
        .hero-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5.5vw, 4.5rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 24px;
        }
        .section-eyebrow {
          font-size: 0.72rem;
          color: #C9A84C;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .section-h2-light {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 700;
          color: white;
          line-height: 1.15;
        }
        .section-h2-dark {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 700;
          color: #0A1628;
          line-height: 1.15;
        }
        .info-card-bordered {
          padding: 28px 32px;
          background: white;
          border-radius: 4px;
          border-left: 3px solid #C9A84C;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        }
        .info-card-label {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 600;
          color: #0A1628;
          margin-bottom: 10px;
        }
        .info-card-body {
          font-size: 0.875rem;
          color: #4a5568;
          line-height: 1.75;
        }
        .link-gold {
          color: #C9A84C;
          text-decoration: none;
        }
        .link-gold:hover {
          text-decoration: underline;
        }

        /* ─── Feature Cards ─── */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.08);
          border-radius: 4px;
          overflow: hidden;
        }
        .feature-card {
          background: #0A1628;
          padding: 40px 36px;
          transition: background 0.3s ease;
          position: relative;
        }
        .feature-card:hover {
          background: #112240;
        }
        .feature-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 36px;
          right: 36px;
          height: 1px;
          background: rgba(201,168,76,0.08);
        }
        .feature-number {
          font-family: 'Playfair Display', serif;
          font-size: 0.75rem;
          color: rgba(201,168,76,0.4);
          font-weight: 600;
          letter-spacing: 2px;
        }
        .feature-icon {
          color: rgba(201,168,76,0.7);
          flex-shrink: 0;
        }
        .feature-stat {
          font-family: 'Playfair Display', serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: #C9A84C;
          line-height: 1;
          margin-bottom: 4px;
        }
        .feature-stat-label {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 500;
          margin-bottom: 0;
        }
        .feature-divider {
          width: 32px;
          height: 1px;
          background: rgba(201,168,76,0.3);
          margin: 20px 0;
        }
        .feature-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: white;
          margin-bottom: 10px;
          line-height: 1.35;
        }
        .feature-desc {
          font-size: 0.845rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.75;
        }

        @media(max-width:1024px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media(max-width:768px) {
          .features-grid { grid-template-columns: 1fr; }
          .feature-card { padding: 32px 28px; }
          .info-card-bordered { padding: 24px; }
        }
        @media(max-width:600px) {
          [style*="grid-template-columns: repeat(6"] {
            grid-template-columns: repeat(3,1fr) !important;
          }
        }
        @media(max-width:480px) {
          [style*="grid-template-columns: repeat(6"] {
            grid-template-columns: repeat(2,1fr) !important;
          }
        }
      `}</style>
    </>
  );
}
