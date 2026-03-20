"use client";

export default function ContactForm() {
  return (
    <div style={{ background: "#f8f6f1", borderRadius: "4px", padding: "40px 36px" }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "#0A1628", marginBottom: "8px" }}>
        Send Us a Message
      </h2>
      <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "32px" }}>
        Fill out the form below and we&apos;ll get back to you as soon as possible.
      </p>
      <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
  );
}
