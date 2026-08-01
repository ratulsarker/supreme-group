import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supreme Sweets",
  description: "Authentic Bengali confectionery with 6 outlets across Dhaka serving traditional sweets and treats.",
};

const locations = [
  { name: "Uttara", address: "House-12 Shah Makhdum Ave (Taj Food Park), Dhaka 1230", phone: "01678077160" },
  { name: "Kalampur", address: "Kalampur Bazar Rd, Kalampur 1351", phone: "01678038883" },
  { name: "Rajabazar", address: "107/1, East Rajabazar, Tejgaon, Dhaka-1215", phone: "01678077163" },
  { name: "Ashulia", address: "Newmarket, Zirani Bazar, Ashulia, Dhaka", phone: "01678077153" },
  { name: "Gazipur", address: "Shorupaitoli, Kashimpur, Gazipur – 1700", phone: "01678038897" },
  { name: "Dhamrai", address: "Dhantara bazar, Bus Stand, Dhamrai, Dhaka-1345", phone: "01618038958" },
];

export default function SweetsPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        position: "relative",
        minHeight: "55vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}>
        <Image
          src="/images/sweets-1.jpg"
          alt="Supreme Sweets"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.6) 60%, transparent 100%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "100px", paddingBottom: "80px" }}>
          <p style={{ fontSize: "0.72rem", color: "#D9BC6B", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
            Food &amp; Retail
          </p>
          <h1 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 700, color: "white", marginBottom: "20px", lineHeight: 1.1 }}>
            Supreme Sweets
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.75)", maxWidth: "560px", lineHeight: 1.85 }}>
            Authentic Bengali confectionery bringing traditional sweets and treats to communities across Dhaka, with 6 outlets and growing.
          </p>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="section-pad">
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-head)", fontSize: "2.2rem", fontWeight: 700, color: "#0B1D2E", textAlign: "center", marginBottom: "40px" }}>
            Our <span style={{ color: "#0E86D4" }}>Sweets</span> & Shops
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} style={{ position: "relative", height: "220px", borderRadius: "4px", overflow: "hidden" }}>
                <Image
                  src={`/images/sweets-${n}.jpg`}
                  alt={`Supreme Sweets photo ${n}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div:last-child{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>

      {/* LOCATIONS */}
      <section className="section-pad" style={{ background: "#0B1D2E" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ fontSize: "0.75rem", color: "#D9BC6B", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
              Our Locations
            </div>
            <h2 style={{ fontFamily: "var(--font-head)", fontSize: "2.2rem", fontWeight: 700, color: "white" }}>
              6 Outlets Across Dhaka
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {locations.map((loc) => (
              <div key={loc.name} style={{
                background: "#123049",
                border: "1px solid rgba(56,182,255,0.15)",
                borderRadius: "4px",
                padding: "28px 24px",
              }}>
                <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1.2rem", fontWeight: 600, color: "#38B6FF", marginBottom: "12px" }}>
                  {loc.name}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "12px" }}>
                  {loc.address}
                </p>
                <a href={`tel:${loc.phone}`} style={{ fontSize: "0.845rem", color: "#38B6FF", textDecoration: "none" }}>
                  {loc.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div:last-child{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* GOOGLE MAPS - All Outlets */}
      <section style={{ background: "#F6F4EE", padding: "60px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-head)", fontSize: "2rem", fontWeight: 700, color: "#0B1D2E", marginBottom: "32px" }}>Find Us</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", maxWidth: "1000px", margin: "0 auto" }}>
            {locations.map((loc) => (
              <div key={loc.name} style={{ borderRadius: "8px", overflow: "hidden", border: "2px solid rgba(56,182,255,0.3)" }}>
                <iframe
                  src={`https://maps.google.com/maps?q=Supreme%20Sweets%20${encodeURIComponent(loc.name)}%20${encodeURIComponent(loc.address)}&t=m&z=16&output=embed&iwloc=near`}
                  width="100%"
                  height="250"
                  style={{ border: "none", display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  title={`Supreme Sweets ${loc.name}`}
                />
                <div style={{ background: "white", padding: "12px 16px", textAlign: "left" }}>
                  <div style={{ fontFamily: "var(--font-head)", fontWeight: 600, color: "#0B1D2E", fontSize: "0.95rem" }}>
                    {loc.name}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "2px" }}>{loc.address}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div:nth-child(2){grid-template-columns:1fr!important;}}`}</style>
      </section>
    </>
  );
}
