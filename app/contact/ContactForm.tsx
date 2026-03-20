"use client";

export default function ContactForm() {
  return (
    <div style={{ background: "white", borderRadius: "4px", padding: "40px 36px", border: "1px solid #e8e8e0" }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", fontWeight: 700, color: "#0A1628", marginBottom: "8px" }}>
        Send Us a Message
      </h2>
      <div style={{ width: "40px", height: "2px", background: "#C9A84C", marginBottom: "12px" }} />
      <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "32px", lineHeight: 1.7 }}>
        Fill out the form below and we&apos;ll get back to you as soon as possible.
      </p>
      <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#374151", marginBottom: "6px", letterSpacing: "0.5px", textTransform: "uppercase" }}>First Name *</label>
            <input type="text" placeholder="John" className="form-input" />
          </div>
          <div>
            <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#374151", marginBottom: "6px", letterSpacing: "0.5px", textTransform: "uppercase" }}>Last Name *</label>
            <input type="text" placeholder="Doe" className="form-input" />
          </div>
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#374151", marginBottom: "6px", letterSpacing: "0.5px", textTransform: "uppercase" }}>Email *</label>
          <input type="email" placeholder="john@company.com" className="form-input" />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#374151", marginBottom: "6px", letterSpacing: "0.5px", textTransform: "uppercase" }}>Company</label>
          <input type="text" placeholder="Your company name" className="form-input" />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#374151", marginBottom: "6px", letterSpacing: "0.5px", textTransform: "uppercase" }}>Subject *</label>
          <select className="form-input">
            <option value="">Select a topic</option>
            <option value="manufacturing">Manufacturing Partnership</option>
            <option value="sourcing">Sourcing Inquiry</option>
            <option value="compliance">Compliance &amp; Certifications</option>
            <option value="general">General Inquiry</option>
            <option value="careers">Careers</option>
          </select>
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#374151", marginBottom: "6px", letterSpacing: "0.5px", textTransform: "uppercase" }}>Message *</label>
          <textarea rows={5} placeholder="Tell us about your requirements..." className="form-input" style={{ resize: "vertical", fontFamily: "'Inter', sans-serif" }} />
        </div>
        <button type="submit" className="btn-gold" style={{ border: "none", cursor: "pointer", textAlign: "center", width: "100%", fontSize: "0.875rem", letterSpacing: "1px" }}>
          Send Message
        </button>
      </form>

      <style>{`
        .form-input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #e8e8e0;
          border-bottom: 2px solid #e8e8e0;
          border-radius: 3px;
          font-size: 0.9rem;
          background: #fafaf8;
          outline: none;
          color: #0A1628;
          transition: border-color 0.2s, background 0.2s;
          font-family: 'Inter', sans-serif;
          box-sizing: border-box;
        }
        .form-input:focus {
          border-bottom-color: #C9A84C;
          background: white;
        }
        .form-input::placeholder {
          color: #aaa;
        }
        @media(max-width: 600px) {
          .form-input + .form-input { margin-top: 16px; }
        }
      `}</style>
    </div>
  );
}
