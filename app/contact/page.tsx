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
      <section className="page-hero">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
            Contact Us
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 700, color: "white", marginBottom: "20px" }}>
            Get in Touch
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", maxWidth: "560px", lineHeight: 1.8 }}>
            Whether you&apos;re a global brand seeking a reliable manufacturing partner or have any inquiries, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "60px" }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#0A1628", marginBottom: "32px" }}>
                Our Offices
              </h2>

              {/* Head Office */}
              <div style={{ marginBottom: "32px", paddingBottom: "32px", borderBottom: "1px solid #e8e8e0" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 600, color: "#C9A84C", marginBottom: "12px" }}>
                  Head Office
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.8 }}>
                  49/1 Purana Paltan Line<br />
                  Dhaka-1000, Bangladesh
                </p>
                <p style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.8, marginTop: "8px" }}>
                  Phone: +88-02-9359825<br />
                  Fax: 88-02-9350660<br />
                  Email: <a href="mailto:office@supremegroupbd.com" style={{ color: "#C9A84C" }}>office@supremegroupbd.com</a>
                </p>
              </div>

              {/* Factory */}
              <div style={{ marginBottom: "32px", paddingBottom: "32px", borderBottom: "1px solid #e8e8e0" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 600, color: "#C9A84C", marginBottom: "12px" }}>
                  Factory
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.8 }}>
                  358 West Shaildube<br />
                  Kashimpur Gazipur – 1700, Bangladesh
                </p>
                <p style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.8, marginTop: "8px" }}>
                  Phone: +8801678038802<br />
                  Email: <a href="mailto:admin@supremegroupbd.com" style={{ color: "#C9A84C" }}>admin@supremegroupbd.com</a><br />
                  Compliance: <a href="mailto:compliance@supremegroupbd.com" style={{ color: "#C9A84C" }}>compliance@supremegroupbd.com</a>
                </p>
              </div>

              {/* General */}
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 600, color: "#C9A84C", marginBottom: "12px" }}>
                  General Inquiry
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.8 }}>
                  Phone: +8801678038802<br />
                  Email: <a href="mailto:office@supremegroupbd.com" style={{ color: "#C9A84C" }}>office@supremegroupbd.com</a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ background: "#f8f6f1", borderRadius: "4px", padding: "40px 36px" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "#0A1628", marginBottom: "8px" }}>
                Send Us a Message
              </h2>
              <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "32px" }}>
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
              <form action="#" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#0A1628", marginBottom: "6px" }}>First Name *</label>
                    <input type="text" placeholder="John" style={{
                      width: "100%", padding: "12px 16px", border: "1px solid #e8e8e0", borderRadius: "4px",
                      fontSize: "0.9rem", background: "white", outline: "none",
                    }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#0A1628", marginBottom: "6px" }}>Last Name *</label>
                    <input type="text" placeholder="Doe" style={{
                      width: "100%", padding: "12px 16px", border: "1px solid #e8e8e0", borderRadius: "4px",
                      fontSize: "0.9rem", background: "white", outline: "none",
                    }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#0A1628", marginBottom: "6px" }}>Email *</label>
                  <input type="email" placeholder="john@company.com" style={{
                    width: "100%", padding: "12px 16px", border: "1px solid #e8e8e0", borderRadius: "4px",
                    fontSize: "0.9rem", background: "white", outline: "none",
                  }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#0A1628", marginBottom: "6px" }}>Company</label>
                  <input type="text" placeholder="Your company name" style={{
                    width: "100%", padding: "12px 16px", border: "1px solid #e8e8e0", borderRadius: "4px",
                    fontSize: "0.9rem", background: "white", outline: "none",
                  }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#0A1628", marginBottom: "6px" }}>Subject *</label>
                  <select style={{
                    width: "100%", padding: "12px 16px", border: "1px solid #e8e8e0", borderRadius: "4px",
                    fontSize: "0.9rem", background: "white", outline: "none", color: "#374151",
                  }}>
                    <option value="">Select a topic</option>
                    <option value="manufacturing">Manufacturing Partnership</option>
                    <option value="sourcing">Sourcing Inquiry</option>
                    <option value="compliance">Compliance & Certifications</option>
                    <option value="general">General Inquiry</option>
                    <option value="careers">Careers</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#0A1628", marginBottom: "6px" }}>Message *</label>
                  <textarea rows={5} placeholder="Tell us about your requirements..." style={{
                    width: "100%", padding: "12px 16px", border: "1px solid #e8e8e0", borderRadius: "4px",
                    fontSize: "0.9rem", background: "white", outline: "none", resize: "vertical",
                    fontFamily: "'Inter', sans-serif",
                  }} />
                </div>
                <button type="submit" className="btn-gold" style={{ border: "none", cursor: "pointer", textAlign: "center", width: "100%" }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </>
  );
}
