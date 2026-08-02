import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supreme Accessories Industries Ltd.",
  description:
    "Garment accessories manufacturer in Bangladesh. Cartons, poly bags, sewing thread, printed labels, elastic, twill tape, drawstrings and interlining across 12 production lines.",
};

// Production capacities as published in the Supreme Stitch company profile.
const products = [
  { item: "Poly bag (PP, PE)", machines: 8, capacity: "3,20,000", unit: "pcs / day", feature: true },
  { item: "Back board, neck board", machines: 2, capacity: "200,000", unit: "pcs / day" },
  { item: "Printed label", machines: 2, capacity: "1,60,000", unit: "pcs / day", feature: true },
  { item: "Offset print", machines: 1, capacity: "1,00,000", unit: "pcs / day" },
  { item: "Drawstring", machines: 8, capacity: "40,000", unit: "yds / day" },
  { item: "Draw cord", machines: 8, capacity: "40,000", unit: "yds / day" },
  { item: "Twill tape", machines: 4, capacity: "30,000", unit: "yds / day" },
  { item: "Elastic", machines: 3, capacity: "20,000", unit: "yds / day" },
  { item: "Sewing thread", machines: 20, capacity: "12,000", unit: "cones / day", feature: true },
  { item: "Carton", machines: 10, capacity: "10,000", unit: "pcs / day", feature: true },
  { item: "Interlining", machines: 3, capacity: "1,000", unit: "rolls / day" },
  { item: "BOPP cutting & sizing", machines: 1, capacity: "1", unit: "ton / day" },
];

const totalMachines = products.reduce((n, p) => n + p.machines, 0);

const headline = [
  { num: "12", label: "Product lines" },
  { num: `${totalMachines}`, label: "Machines in operation" },
  { num: "3,20,000", label: "Poly bags per day" },
  { num: "1,60,000", label: "Printed labels per day" },
];

const strengths = [
  {
    title: "One supplier for the whole bill of materials",
    text: "Trims, packaging and printed matter all come from the same group, so an order does not wait on outside vendors or separate lead times.",
  },
  {
    title: "Feeds the group's own factories",
    text: "Supreme Stitch, Supreme Outfit and Supreme Embellishment draw their accessories from here, which keeps specification and quality consistent end to end.",
  },
  {
    title: "Built for high-volume export",
    text: "Capacities are sized around export runs: over three hundred thousand poly bags and one hundred and sixty thousand labels every day.",
  },
];

export default function AccessoriesPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: "linear-gradient(140deg, #0B1D2E 0%, #0E2438 55%, #123049 100%)",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 78% 28%, rgba(56,182,255,0.18) 0%, transparent 55%), radial-gradient(circle at 12% 88%, rgba(201,168,76,0.12) 0%, transparent 50%)",
          }}
        />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />

        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "130px", paddingBottom: "70px" }}>
          <div style={{ maxWidth: "790px" }}>
            <p style={{ fontSize: "0.72rem", color: "#D9BC6B", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
              Garment Accessories
            </p>
            <h1 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, color: "white", marginBottom: "18px", lineHeight: 1.06, letterSpacing: "-0.02em" }}>
              Supreme Accessories<br />Industries Ltd.
            </h1>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.75)", maxWidth: "620px", lineHeight: 1.85, marginBottom: "34px" }}>
              Every trim, tape and pack a garment order needs, produced in-house across
              twelve product lines and {totalMachines} machines.
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-gold">Request a Quote</Link>
              <Link href="/stitch" className="btn-outline-gold" style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}>
                See Supreme Stitch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FIGURES */}
      <section style={{ background: "#38B6FF", padding: "40px 0" }}>
        <div className="container">
          <div className="outfit-stats">
            {headline.map((s, i) => (
              <div key={s.label} style={{ padding: "6px 22px", borderRight: i < headline.length - 1 ? "1px solid rgba(6,38,60,0.2)" : "none" }}>
                <div style={{ fontFamily: "var(--font-head)", fontSize: "2.1rem", fontWeight: 800, color: "#06263C", lineHeight: 1, textAlign: "center", fontVariantNumeric: "tabular-nums" }}>
                  {s.num}
                </div>
                <div style={{ fontSize: "0.7rem", color: "rgba(6,38,60,0.68)", marginTop: "10px", textAlign: "center", lineHeight: 1.5 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container reveal" style={{ maxWidth: "820px", textAlign: "center" }}>
          <p className="section-eyebrow">A Reliable One-Stop Solution</p>
          <h2 className="section-h2-dark" style={{ marginBottom: "22px" }}>
            The parts that finish a garment
          </h2>
          <p style={{ color: "#52697C", lineHeight: 1.9, fontSize: "1.02rem" }}>
            Supreme Accessories Industries Ltd. supplies the cartons, poly bags, labels,
            threads, elastics, tapes, cords and interlinings that every export order depends
            on. Producing them inside the group means specification, quality and timing stay
            under one roof, from the first sample through to the packed carton.
          </p>
        </div>
      </section>

      {/* PRODUCTION CAPACITY TABLE */}
      <section className="section-pad" style={{ background: "#F6F4EE", borderTop: "1px solid #E8E2D4", borderBottom: "1px solid #E8E2D4" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "46px" }} className="reveal">
            <p className="section-eyebrow">Production Capacity</p>
            <h2 className="section-h2-dark">What we make, and how much</h2>
            <p style={{ color: "#52697C", lineHeight: 1.8, maxWidth: "58ch", margin: "18px auto 0", fontSize: "0.95rem" }}>
              Daily output by product line, as published in the group company profile.
            </p>
          </div>

          <div className="cap-table reveal">
            <div className="cap-head" aria-hidden="true">
              <span>Production item</span>
              <span>Machines</span>
              <span>Capacity per day</span>
            </div>
            {products.map((p) => (
              <div key={p.item} className={`cap-row${p.feature ? " is-feature" : ""}`}>
                <span className="cap-item">{p.item}</span>
                <span className="cap-machines">
                  <span className="cap-machines-num">{p.machines}</span>
                  <span className="cap-machines-lbl">machines</span>
                </span>
                <span className="cap-capacity">
                  <strong>{p.capacity}</strong>
                  <em>{p.unit}</em>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="section-pad" style={{ background: "#0B1D2E" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }} className="reveal">
            <p style={{ fontSize: "0.72rem", color: "#D9BC6B", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
              Why It Matters
            </p>
            <h2 className="section-h2-light">Accessories inside the group</h2>
            <div className="gold-rule" />
          </div>
          <div className="client-grid reveal" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {strengths.map((s) => (
              <div key={s.title} className="client-card">
                <h3 style={{ marginBottom: "12px" }}>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SISTER CONCERNS */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "44px" }} className="reveal">
            <p className="section-eyebrow">Who We Supply</p>
            <h2 className="section-h2-dark">Part of Supreme Group</h2>
            <div className="gold-rule" />
          </div>
          <div className="supply-grid reveal">
            {[
              { href: "/stitch", name: "Supreme Stitch Ltd.", note: "60,000 knitwear pcs/day across 38 sewing lines" },
              { href: "/outfit", name: "Supreme Outfit Ltd.", note: "60,000 pcs/day in Phase 1, Dhamrai" },
              { href: "/embellishment", name: "Supreme Embellishment Ltd.", note: "80,000 pcs/day printing and embroidery" },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="supply-card">
                <span className="supply-name">{c.name}</span>
                <span className="supply-note">{c.note}</span>
                <span className="supply-go">Visit page →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section style={{ background: "#F6F4EE", padding: "70px 0", borderTop: "1px solid #E8E2D4" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow">358 West Shaildube, Kashimpur, Gazipur</p>
          <h2 style={{ fontFamily: "var(--font-head)", fontSize: "1.9rem", fontWeight: 800, color: "#0B1D2E", marginBottom: "32px" }}>
            Our Location
          </h2>
          <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid #E8E2D4", maxWidth: "900px", margin: "0 auto" }}>
            <iframe
              src="https://maps.google.com/maps?q=West%20Shaildubi%2C%20Kashimpur%2C%20Gazipur%2C%20Bangladesh&t=m&z=14&output=embed&iwloc=near"
              width="100%"
              height="400"
              style={{ border: "none", display: "block" }}
              allowFullScreen
              loading="lazy"
              title="Supreme Accessories Industries Ltd. location"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0B1D2E", padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <p style={{ fontSize: "0.72rem", color: "#D9BC6B", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
            Work With Us
          </p>
          <h2 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "white", marginBottom: "18px" }}>
            Need Garment Accessories?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "520px", margin: "0 auto 34px", lineHeight: 1.85 }}>
            Twelve product lines and {totalMachines} machines ready to deliver at export volume.
          </p>
          <Link href="/contact" className="btn-gold">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
