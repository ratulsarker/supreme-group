import Image from "next/image";
import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Supreme Group Bangladesh — head office in Dhaka, factory in Gazipur.",
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        position: "relative",
        minHeight: "45vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#0A1628",
      }}>
        <Image
          src="/images/stitch-cta-bg.jpg"
          alt="Contact Supreme Group"
          fill
          priority
          style={{ objectFit: "cover", opacity: 0.15 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,22,40,0.85)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "100px", paddingBottom: "60px" }}>
          <p style={{ fontSize: "0.72rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
            Contact Us
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 700, color: "white", marginBottom: "20px" }}>
            Get in Touch
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", maxWidth: "560px", lineHeight: 1.85 }}>
            Whether you&apos;re a global brand seeking a reliable manufacturing partner or have any inquiries, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "64px" }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#0A1628", marginBottom: "8px" }}>
                Our Offices
              </h2>
              <div style={{ width: "40px", height: "2px", background: "#C9A84C", marginBottom: "36px" }} />

              {/* Head Office */}
              <div style={{ marginBottom: "36px", paddingBottom: "36px", borderBottom: "1px solid #e8e8e0" }}>
                <p style={{ fontSize: "0.7rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>
                  Head Office
                </p>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 600, color: "#0A1628", marginBottom: "12px" }}>
                  Dhaka, Bangladesh
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#4a5568", lineHeight: 1.85 }}>
                  49/1 Purana Paltan Line<br />
                  Dhaka-1000, Bangladesh
                </p>
                <p style={{ fontSize: "0.875rem", color: "#4a5568", lineHeight: 1.85, marginTop: "10px" }}>
                  Phone: +88-02-9359825<br />
                  Fax: 88-02-9350660<br />
                  <a href="mailto:office@supremegroupbd.com" style={{ color: "#C9A84C", textDecoration: "none" }}>office@supremegroupbd.com</a>
                </p>
              </div>

              {/* Factory */}
              <div style={{ marginBottom: "36px", paddingBottom: "36px", borderBottom: "1px solid #e8e8e0" }}>
                <p style={{ fontSize: "0.7rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>
                  Factory
                </p>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 600, color: "#0A1628", marginBottom: "12px" }}>
                  Kashimpur, Gazipur
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#4a5568", lineHeight: 1.85 }}>
                  358 West Shaildube<br />
                  Kashimpur Gazipur – 1700, Bangladesh
                </p>
                <p style={{ fontSize: "0.875rem", color: "#4a5568", lineHeight: 1.85, marginTop: "10px" }}>
                  Phone: +8801678038802<br />
                  <a href="mailto:admin@supremegroupbd.com" style={{ color: "#C9A84C", textDecoration: "none" }}>admin@supremegroupbd.com</a><br />
                  <a href="mailto:compliance@supremegroupbd.com" style={{ color: "#C9A84C", textDecoration: "none" }}>compliance@supremegroupbd.com</a>
                </p>
              </div>

              {/* General */}
              <div>
                <p style={{ fontSize: "0.7rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>
                  General Inquiries
                </p>
                <p style={{ fontSize: "0.875rem", color: "#4a5568", lineHeight: 1.85 }}>
                  Phone: +8801678038802<br />
                  <a href="mailto:office@supremegroupbd.com" style={{ color: "#C9A84C", textDecoration: "none" }}>office@supremegroupbd.com</a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* GOOGLE MAPS - Head Office & Factory */}
      <section style={{ background: "#f8f6f1", padding: "60px 0" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#0A1628", textAlign: "center", marginBottom: "32px" }}>Our Locations</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", maxWidth: "1000px", margin: "0 auto" }}>
            <div style={{ borderRadius: "8px", overflow: "hidden", border: "2px solid rgba(201,168,76,0.3)" }}>
              <iframe src="https://maps.google.com/maps?q=49%2F1%20Purana%20Paltan%20Line%20Dhaka%201000%20Bangladesh&t=m&z=17&output=embed&iwloc=near" width="100%" height="300" style={{ border: "none", display: "block" }} allowFullScreen loading="lazy" title="Supreme Group Head Office" />
              <div style={{ background: "white", padding: "14px 18px" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, color: "#0A1628" }}>Head Office</div>
                <div style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "2px" }}>49/1 Purana Paltan Line, Dhaka-1000</div>
              </div>
            </div>
            <div style={{ borderRadius: "8px", overflow: "hidden", border: "2px solid rgba(201,168,76,0.3)" }}>
              <iframe src="https://maps.google.com/maps?q=Supreme%20Stitch%20Ltd%20358%20West%20Shaildube%20Kashimpur%20Gazipur%20Bangladesh&t=m&z=17&output=embed&iwloc=near" width="100%" height="300" style={{ border: "none", display: "block" }} allowFullScreen loading="lazy" title="Supreme Group Factory" />
              <div style={{ background: "white", padding: "14px 18px" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, color: "#0A1628" }}>Factory Complex</div>
                <div style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "2px" }}>358 West Shaildube, Kashimpur Gazipur – 1700</div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div:nth-child(2){grid-template-columns:1fr!important;}}`}</style>
      </section>
    </>
  );
}
