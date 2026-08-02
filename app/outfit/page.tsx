import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supreme Outfit Ltd.",
  description:
    "A state-of-the-art knitwear factory in Dhamrai, Dhaka. 15 hectares, four six-storied blocks, 60,000 pieces a day, 1,350 sewing machines and 1.4 MW of rooftop solar.",
};

const heroStats = [
  { num: "15", unit: "Hectares", label: "Total project area" },
  { num: "60,000", unit: "Pcs / Day", label: "Phase 1 knitwear capacity" },
  { num: "1,350", unit: "Machines", label: "Sewing workstations" },
  { num: "1.4", unit: "MW Solar", label: "Rooftop PV, Buildings 1 & 2" },
];

const groupTimeline = [
  { year: "2009", name: "Supreme Accessories Industries Ltd." },
  { year: "2009", name: "Supreme Stitch Ltd." },
  { year: "2015", name: "Supreme Embellishment Ltd." },
  { year: "2019", name: "Supreme Eco Bricks & Agro Ltd." },
  { year: "2025", name: "Supreme Outfit Ltd.", current: true },
];

const buildingOne = [
  { floor: "Ground", use: "Finished Goods Store" },
  { floor: "1st", use: "Finishing & C-TPAT" },
  { floor: "2nd", use: "Sewing Section" },
  { floor: "3rd", use: "Sewing Section" },
  { floor: "4th", use: "Cut Panel Store" },
  { floor: "5th", use: "Office, CAD & Sample" },
];

const buildingTwo = [
  { floor: "Ground", use: "Yarn & Knitting" },
  { floor: "1st", use: "Screen Printing" },
  { floor: "2nd", use: "Auto Printing" },
  { floor: "3rd", use: "Proposed for Outerwear", proposed: true },
  { floor: "4th", use: "Cutting Section" },
  { floor: "5th", use: "Proposed for Outerwear", proposed: true },
];

const sections = [
  {
    eyebrow: "Building 2 · Ground Floor",
    title: "Knitting",
    image: "/images/outfit-knitting.jpg",
    alt: "Circular knitting machines on the knitting floor",
    capacity: "12 tons of fabric per day",
    specs: [
      "26 × circular knitting machines, single jersey (Gong Li)",
      "4 × circular knitting machines, fleece (Gong Li)",
      "2 × circular knitting machines, rib (Gong Li)",
      "2 × fabric inspection machines",
    ],
  },
  {
    eyebrow: "Building 2 · 1st & 2nd Floor",
    title: "Printing",
    image: "/images/outfit-printing.jpg",
    alt: "Automatic oval printing machines",
    capacity: "Screen, automatic and oval printing in-house",
    specs: [
      "18 × 80 ft screen printing tables",
      "3 × automatic oval printing machines",
      "18 × auto-run dryers",
      "2 × curing machines",
      "Well-equipped colour and quality lab",
    ],
  },
  {
    eyebrow: "Building 2 · 4th Floor",
    title: "Cutting",
    image: "/images/hero-building.jpg",
    alt: "Supreme Outfit factory building",
    capacity: "CAD-linked automated cutting",
    specs: [
      "6 × 80 ft cutting tables",
      "6 × automatic fabric spreaders",
      "2 × CAD-linked auto cutters",
      "1 × steam fabric relaxer",
      "2 × fabric inspection machines",
    ],
  },
];

const icon = (d: string) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const layoutFacts = [
  {
    title: "4 × Six-Storied Blocks",
    icon: icon("M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4M9 10h.01M12 10h.01M15 10h.01M9 13h.01M12 13h.01M15 13h.01"),
    items: [
      { label: "Phase 1", text: "Buildings 1 & 2" },
      { label: "Phase 2", text: "Buildings 3 & 4" },
    ],
  },
  {
    title: "Worker Welfare & Support",
    icon: icon("M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M19 8v6M22 11h-6"),
    items: [
      { label: "Building 5, Ground", text: "Childcare & medical services" },
      { label: "Building 5, 1st Floor", text: "Worker's canteen" },
    ],
  },
  {
    title: "Utilities & Compliance",
    icon: icon("M13 2 4.09 12.11a1 1 0 0 0 .77 1.64h6.09l-1.04 8.25 8.9-10.11a1 1 0 0 0-.77-1.64h-6.09L13 2Z"),
    items: [
      { label: "", text: "Effluent treatment plant (ETP)" },
      { label: "", text: "Fire-pump house" },
      { label: "", text: "Dual septic-tank system, hygienic zoning" },
    ],
  },
  {
    title: "Site & Environment",
    icon: icon("M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10ZM2 21c0-3 1.85-5.36 5.08-6"),
    items: [
      { label: "", text: "100-car dedicated parking zone" },
      { label: "", text: "Large pond for rainwater harvesting" },
      { label: "", text: "30% landscaped green buffer" },
    ],
  },
];

const sustainability = [
  { stat: "1.4 MW", label: "Rooftop PV across Buildings 1 & 2" },
  { stat: "≈ 70%", label: "Of the Phase 1 electricity load supplied by solar" },
  { stat: "2.2 GWh", label: "Generated per year" },
  { stat: "1,700 t", label: "CO₂e offset per year" },
];

export default function OutfitPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", minHeight: "88vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <Image
          src="/images/hero-building.jpg"
          alt="Supreme Outfit factory campus"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 45%" }}
          sizes="100vw"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(7,22,36,0.94) 0%, rgba(7,22,36,0.7) 45%, rgba(9,40,64,0.25) 100%)" }} />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "50%", background: "linear-gradient(transparent, rgba(7,22,36,0.88))" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />

        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "150px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "780px" }}>
            <p style={{ fontSize: "0.72rem", color: "#D9BC6B", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
              Company Profile · Garment Manufacturing
            </p>
            <h1 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)", fontWeight: 800, color: "white", marginBottom: "18px", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Supreme Outfit Ltd.
            </h1>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.75)", maxWidth: "620px", lineHeight: 1.85, marginBottom: "34px" }}>
              A state-of-the-art knitwear factory in Dhamrai, Dhaka. Fifteen hectares, four
              six-storied production blocks and a dedicated welfare building, purpose-built for
              high-volume export manufacturing.
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a href="/supreme-outfit-company-profile.pdf" download className="btn-gold">
                Download Company Profile
              </a>
              <Link href="/contact" className="btn-outline-gold" style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}>
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FIGURES */}
      <section style={{ background: "#38B6FF", padding: "40px 0" }}>
        <div className="container">
          <div className="outfit-stats">
            {heroStats.map((s, i) => (
              <div key={s.unit} style={{ padding: "6px 22px", borderRight: i < heroStats.length - 1 ? "1px solid rgba(6,38,60,0.2)" : "none" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "7px", justifyContent: "center" }}>
                  <span style={{ fontFamily: "var(--font-head)", fontSize: "2.3rem", fontWeight: 800, color: "#06263C", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
                    {s.num}
                  </span>
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "rgba(6,38,60,0.75)", textTransform: "uppercase", letterSpacing: "1px" }}>
                    {s.unit}
                  </span>
                </div>
                <div style={{ fontSize: "0.7rem", color: "rgba(6,38,60,0.68)", marginTop: "8px", textAlign: "center", lineHeight: 1.5 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container reveal" style={{ maxWidth: "860px", textAlign: "center" }}>
          <p className="section-eyebrow">Corporate Vision</p>
          <blockquote style={{ fontFamily: "var(--font-head)", fontSize: "clamp(1.3rem, 2.6vw, 1.85rem)", fontWeight: 600, color: "#0B1D2E", lineHeight: 1.5, letterSpacing: "-0.01em", margin: 0 }}>
            To become a leading global apparel manufacturer, recognised for our commitment to
            quality, sustainability and ethical business practices.
          </blockquote>
          <div className="gold-rule" />
          <p style={{ color: "#52697C", lineHeight: 1.9, marginTop: "26px", fontSize: "1.02rem" }}>
            We strive to build long-lasting relationships with our customers, partners and employees,
            while creating a positive impact on the communities in which we operate.
          </p>
        </div>
      </section>

      {/* INTRODUCTION + GROUP TIMELINE */}
      <section className="section-pad" style={{ background: "#F6F4EE", borderTop: "1px solid #E8E2D4", borderBottom: "1px solid #E8E2D4" }}>
        <div className="container">
          <div className="outfit-split reveal">
            <div>
              <p className="section-eyebrow">Introduction</p>
              <h2 className="section-h2-dark" style={{ marginBottom: "22px" }}>
                The group&apos;s newest<br />manufacturing venture
              </h2>
              <p style={{ color: "#52697C", lineHeight: 1.9, marginBottom: "18px" }}>
                Supreme Outfit Ltd. is a state-of-the-art garment factory specialising in knitwear
                production, owned by Supreme Stitch Ltd., a leading garment exporter with years of
                experience in high-quality apparel.
              </p>
              <p style={{ color: "#52697C", lineHeight: 1.9, marginBottom: "26px" }}>
                Built on a 15-hectare site in Dhamrai, the project brings knitting, printing, cutting,
                sewing and finishing onto a single campus, so an order can move from yarn to finished
                garment without leaving the site.
              </p>
              <Link href="/stitch" style={{ color: "#0E86D4", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
                Visit Supreme Stitch, our parent company →
              </Link>
            </div>

            <div>
              <p className="section-eyebrow">Group Timeline</p>
              <div className="outfit-timeline">
                {groupTimeline.map((c) => (
                  <div key={c.name} className={`timeline-row${c.current ? " is-current" : ""}`}>
                    <span className="timeline-year">{c.year}</span>
                    <span className="timeline-name">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACTORY LAYOUT */}
      <section className="section-pad" style={{ background: "#0B1D2E" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "54px" }} className="reveal">
            <p style={{ fontSize: "0.72rem", color: "#D9BC6B", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
              Factory Layout
            </p>
            <h2 className="section-h2-light">Building Overview</h2>
            <div className="gold-rule" />
          </div>

          {/* Site imagery: the CAD render leads, supporting views beside it */}
          <div className="layout-media reveal">
            <figure className="layout-media-main">
              <Image
                src="/images/wa-factory-0005.jpg"
                alt="Proposed CAD model of the Supreme Outfit campus"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 900px) 100vw, 66vw"
              />
              <figcaption>Proposed CAD model of Supreme Outfit Ltd.</figcaption>
            </figure>
            <div className="layout-media-side">
              {[
                { src: "/images/outfit-welfare.jpg", cap: "Welfare block, Building 5" },
                { src: "/images/outfit-pond.jpg", cap: "Rainwater harvesting pond" },
              ].map((im) => (
                <figure key={im.src}>
                  <Image src={im.src} alt={im.cap} fill style={{ objectFit: "cover" }} sizes="(max-width: 900px) 50vw, 33vw" />
                  <figcaption>{im.cap}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* Site facts, one row, equal height */}
          <div className="layout-cards reveal">
            {layoutFacts.map((f) => (
              <div key={f.title} className="layout-card">
                <span className="layout-icon" aria-hidden="true">{f.icon}</span>
                <h3>{f.title}</h3>
                <ul>
                  {f.items.map((it) => (
                    <li key={it.label}>
                      {it.label ? <strong>{it.label}</strong> : null}
                      {it.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOOR PLANS */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }} className="reveal">
            <p className="section-eyebrow">Phase 1</p>
            <h2 className="section-h2-dark">What sits on every floor</h2>
            <div className="gold-rule" />
          </div>

          <div className="floorplan-grid reveal">
            {[
              { name: "Building 1", sub: "Sewing, finishing & dispatch", floors: buildingOne },
              { name: "Building 2", sub: "Fabric, print & cutting", floors: buildingTwo },
            ].map((b) => (
              <div key={b.name} className="floorplan">
                <div className="floorplan-head">
                  <h3>{b.name}</h3>
                  <span>{b.sub}</span>
                </div>
                {[...b.floors].reverse().map((f) => (
                  <div key={f.floor} className={`floor-row${"proposed" in f && f.proposed ? " is-proposed" : ""}`}>
                    <span className="floor-label">{f.floor}</span>
                    <span className="floor-use">{f.use}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHASE 1 TARGETS */}
      <section className="section-pad" style={{ background: "#0E2438" }}>
        <div className="container">
          <div className="outfit-split reveal">
            <div>
              <p style={{ fontSize: "0.72rem", color: "#D9BC6B", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
                Targets &amp; Timeline · Buildings 1 &amp; 2
              </p>
              <h2 className="section-h2-light" style={{ marginBottom: "26px" }}>Phase 1 capacity</h2>

              <div className="target-list">
                <div className="target-row">
                  <span className="target-num">60,000</span>
                  <span className="target-txt">Knitwear pieces per day</span>
                </div>
                <div className="target-row">
                  <span className="target-num">30</span>
                  <span className="target-txt">Production lines, two sewing floors of 15 lines each</span>
                </div>
                <div className="target-row">
                  <span className="target-num">45</span>
                  <span className="target-txt">Sewing workstations per line, 1,350 machines in total</span>
                </div>
                <div className="target-row">
                  <span className="target-num">3</span>
                  <span className="target-txt">Double-headed needle detectors</span>
                </div>
              </div>

              <div style={{ marginTop: "34px", padding: "20px 24px", background: "rgba(56,182,255,0.08)", border: "1px solid rgba(56,182,255,0.28)", borderRadius: "6px" }}>
                <div style={{ fontSize: "0.68rem", color: "#6FCBFF", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px" }}>
                  Trial Production Start Target
                </div>
                <div style={{ fontFamily: "var(--font-head)", fontSize: "1.5rem", fontWeight: 800, color: "white" }}>
                  September 2025
                </div>
              </div>
            </div>

            <div style={{ position: "relative", width: "100%", minHeight: "420px", borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(56,182,255,0.25)" }}>
              <Image src="/images/wa-factory-0011.jpg" alt="Supreme Outfit production blocks and skybridges" fill style={{ objectFit: "cover" }} sizes="(max-width: 900px) 100vw, 560px" />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTION SECTIONS */}
      <section className="section-pad" style={{ background: "#F6F4EE", borderTop: "1px solid #E8E2D4" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "54px" }} className="reveal">
            <p className="section-eyebrow">Inside Phase 1</p>
            <h2 className="section-h2-dark">Production sections</h2>
            <div className="gold-rule" />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
            {sections.map((s, i) => (
              <div key={s.title} className={`spec-block reveal${i % 2 === 1 ? " is-flipped" : ""}`}>
                <div style={{ position: "relative", minHeight: "300px" }}>
                  <Image src={s.image} alt={s.alt} fill style={{ objectFit: "cover" }} sizes="(max-width: 900px) 100vw, 520px" />
                </div>
                <div className="spec-body">
                  <p style={{ fontSize: "0.68rem", color: "#A8832E", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>
                    {s.eyebrow}
                  </p>
                  <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1.75rem", fontWeight: 800, color: "#0B1D2E", marginBottom: "8px" }}>
                    {s.title}
                  </h3>
                  <p style={{ color: "#0E86D4", fontWeight: 600, fontSize: "0.92rem", marginBottom: "20px" }}>
                    {s.capacity}
                  </p>
                  <ul className="spec-list">
                    {s.specs.map((sp) => <li key={sp}>{sp}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLAR & SUSTAINABILITY */}
      <section style={{ position: "relative", padding: "110px 0", overflow: "hidden" }}>
        <Image src="/images/outfit-solar.jpg" alt="Rooftop solar array at sunset" fill style={{ objectFit: "cover" }} sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(7,22,36,0.95) 0%, rgba(7,22,36,0.8) 55%, rgba(7,22,36,0.55) 100%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="reveal" style={{ maxWidth: "760px" }}>
            <p style={{ fontSize: "0.72rem", color: "#D9BC6B", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
              Solar Power &amp; Sustainability · Buildings 1 &amp; 2
            </p>
            <h2 className="section-h2-light" style={{ marginBottom: "20px" }}>
              Powered mostly by the roof above it
            </h2>
            <p style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.9, maxWidth: "620px", marginBottom: "44px" }}>
              Phase 1 runs largely on its own rooftop generation, with a zero-discharge water system
              handling every wastewater stream on site.
            </p>

            <div className="sustain-grid">
              {sustainability.map((s) => (
                <div key={s.stat} className="sustain-card">
                  <div className="sustain-stat">{s.stat}</div>
                  <div className="sustain-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "28px", display: "inline-flex", alignItems: "center", gap: "12px", padding: "14px 22px", background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.4)", borderRadius: "6px" }}>
              <span style={{ color: "#D9BC6B", fontWeight: 700, fontSize: "0.9rem" }}>Zero discharge</span>
              <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.88rem" }}>
                15 m³/h ETP + HTP for all wastewater streams
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD + CTA */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container reveal">
          <div className="download-band">
            <div>
              <p className="section-eyebrow" style={{ marginBottom: "10px" }}>Company Profile</p>
              <h2 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(1.5rem, 3vw, 2.1rem)", fontWeight: 800, color: "#0B1D2E", marginBottom: "12px" }}>
                Take the full profile with you
              </h2>
              <p style={{ color: "#52697C", lineHeight: 1.8, maxWidth: "480px" }}>
                Layout, floor plans, machinery lists, capacity targets and sustainability figures,
                in a print-ready PDF.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
              <a href="/supreme-outfit-company-profile.pdf" download className="btn-gold">
                Download PDF
              </a>
              <Link href="/contact" className="btn-outline-gold" style={{ borderColor: "#A8832E", color: "#A8832E" }}>
                Talk to our team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section style={{ background: "#F6F4EE", padding: "70px 0", borderTop: "1px solid #E8E2D4" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow">Dhamrai, Dhaka, Bangladesh</p>
          <h2 style={{ fontFamily: "var(--font-head)", fontSize: "1.9rem", fontWeight: 800, color: "#0B1D2E", marginBottom: "32px" }}>
            Our Location
          </h2>
          <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid #E8E2D4", maxWidth: "900px", margin: "0 auto" }}>
            <iframe
              src="https://maps.google.com/maps?q=Dhamrai%2C%20Dhaka%2C%20Bangladesh&t=m&z=13&output=embed&iwloc=near"
              width="100%"
              height="400"
              style={{ border: "none", display: "block" }}
              allowFullScreen
              loading="lazy"
              title="Supreme Outfit Ltd. location, Dhamrai, Dhaka"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ background: "#0B1D2E", padding: "60px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1.5rem", fontWeight: 700, color: "white", marginBottom: "16px" }}>
            Contact Supreme Outfit
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}>
            Email: <a href="mailto:office@supremegroupbd.com" style={{ color: "#38B6FF", fontWeight: 600 }}>office@supremegroupbd.com</a>
            {" · "}
            Phone: <span style={{ fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>+8801678038802</span>
          </p>
        </div>
      </section>
    </>
  );
}
