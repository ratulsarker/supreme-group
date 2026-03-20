import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supreme Sweets",
  description: "Authentic Bengali confectionery — 6 outlets across Dhaka serving traditional sweets and treats.",
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
      <section className="page-hero" style={{ paddingBottom: "100px" }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
            Food & Retail
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 700, color: "white", marginBottom: "20px" }}>
            Supreme Sweets
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", maxWidth: "560px", lineHeight: 1.8 }}>
            Authentic Bengali confectionery bringing traditional sweets and treats to communities across Dhaka — with 6 outlets and growing.
          </p>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="section-pad">
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, color: "#0A1628", textAlign: "center", marginBottom: "40px" }}>
            Our <span style={{ color: "#C9A84C" }}>Sweets</span> & Shops
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
      <section className="section-pad" style={{ background: "#0A1628" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px" }}>
              Our Locations
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, color: "white" }}>
              6 Outlets Across Dhaka
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {locations.map((loc) => (
              <div key={loc.name} style={{
                background: "#112240",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "4px",
                padding: "28px 24px",
              }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 600, color: "#C9A84C", marginBottom: "12px" }}>
                  {loc.name}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "12px" }}>
                  {loc.address}
                </p>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.7)" }}>
                  📞 {loc.phone}
                </p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.container > div:last-child{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </>
  );
}
