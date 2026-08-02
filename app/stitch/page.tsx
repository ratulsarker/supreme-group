import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ExportChart from "@/components/ExportChart";

export const metadata: Metadata = {
  title: "Supreme Stitch Ltd. | 100% Export Oriented Garments Manufacturer",
  description:
    "Established 2008. A leading knitwear exporter in Bangladesh producing 60,000 items a day across 38 sewing lines, with 3,000+ employees and 94% renewable energy.",
};

const keyFigures = [
  { num: "$70M", label: "Annual turnover" },
  { num: "60,000", label: "Knitwear pieces per day" },
  { num: "3,000+", label: "Employees" },
  { num: "94%", label: "Renewable energy" },
];

const overview = [
  {
    group: "Facility",
    rows: [
      { k: "Factory area", v: "201,000 sq ft" },
      { k: "Manufacturing area", v: "90,000 sq ft" },
      { k: "Office area", v: "2,736 sq ft" },
      { k: "Canteen and dining", v: "9,300 sq ft" },
    ],
  },
  {
    group: "Stores",
    rows: [
      { k: "Fabric store", v: "43,600 sq ft" },
      { k: "Finished goods store", v: "17,084 sq ft" },
      { k: "Cut panel store", v: "9,600 sq ft" },
      { k: "Yarn store", v: "5,800 sq ft" },
      { k: "Accessories store", v: "3,600 sq ft" },
    ],
  },
  {
    group: "Operations",
    rows: [
      { k: "Total energy capacity", v: "500 kW" },
      { k: "Solar power capacity", v: "468 kW" },
      { k: "Male to female ratio", v: "60% / 40%" },
      { k: "Lead time", v: "90 to 120 days" },
    ],
  },
];

const clientStories = [
  {
    name: "Fanatics",
    since: "2019",
    text: "A leading retailer of licensed sports merchandise, including apparel, accessories and collectibles. The partnership also covers Mad Engine and Walmart.",
  },
  {
    name: "Hanes",
    since: "2015",
    text: "A leading manufacturer of basic apparel including underwear, t-shirts and socks. The partnership extends to their retail partners Walmart and Champion.",
  },
  {
    name: "Roly",
    since: "2016",
    text: "A prominent European brand specialising in promotional, casual, sports and workwear textiles.",
  },
  {
    name: "Gelmart Industries",
    since: "2023",
    text: "A leading intimate apparel manufacturer founded in 1952 and headquartered in New York.",
  },
];

const production = [
  {
    eyebrow: "Knitting Section",
    title: "Knitting",
    image: "/images/st-knitting.jpg",
    alt: "Circular knitting machine on the knitting floor",
    capacity: "104 tons per month",
    specs: [
      "14 knitting machines",
      "Single jersey and terry",
      "Diameter range 24 in to 42 in",
    ],
  },
  {
    eyebrow: "Fabric Storage",
    title: "Fabric store",
    image: "/images/st-fabric-store.jpg",
    alt: "Racked rolls of fabric in the fabric store",
    capacity: "43,600 sq ft fabric store",
    specs: [
      "Dedicated relaxation racks before cutting",
      "Yarn store of 5,800 sq ft alongside",
      "Cut panel store of 9,600 sq ft feeding the sewing floors",
    ],
  },
  {
    eyebrow: "Sample Section & CAD-CAM",
    title: "Sampling",
    image: "/images/st-cadcam.jpg",
    alt: "CAD-CAM pattern software on screen",
    capacity: "Up to 250 unique items per day",
    specs: [
      "50 highly skilled sample technicians",
      "CAD-CAM software for pattern and marker making",
      "High-speed toolpaths for reduced cycle times",
    ],
  },
  {
    eyebrow: "Cutting Section",
    title: "Cutting",
    image: "/images/st-cutting.jpg",
    alt: "Operator at an Eastman cutting machine",
    capacity: "7 cutting tables with automated spreading",
    specs: [
      "1 auto spreading machine and 3 manual spreaders",
      "14 manual cutting machines",
      "1 fabric inspection machine",
      "20 relaxation racks",
    ],
  },
  {
    eyebrow: "Sewing Section",
    title: "Sewing",
    image: "/images/st-sewing.jpg",
    alt: "Operators working on a sewing line",
    capacity: "1,064 machines across 38 sewing lines",
    specs: [
      "A complete set of machines for any product type",
      "Knit and woven, children's, men's and women's",
      "100% in-line quality control at AQL 1.0",
    ],
  },
  {
    eyebrow: "Pressing Section",
    title: "Pressing",
    image: "/images/st-pressing.jpg",
    alt: "Pressing section with steam irons",
    capacity: "66 steam irons with vacuum tables",
    specs: [
      "15 heat pressing machines for heat transfer",
      "Moisture control room for humidity and temperature",
      "Protects fabric and preserves quality before packing",
    ],
  },
  {
    eyebrow: "Finishing Section",
    title: "Finishing",
    image: "/images/st-metal-detect.jpg",
    alt: "Hashima metal detection machine scanning a garment",
    capacity: "Dedicated C-TPAT packing area",
    specs: [
      "2 double-headed Hashima metal detection machines",
      "Rigorous screening, especially for children's items",
      "Every garment checked free of metal contaminants",
    ],
  },
];

const labEquipment = [
  "Light box",
  "Button pull test",
  "Hand needle detector",
  "Crock master",
  "Neck stretch measuring fixture",
  "Fusing bond strength",
  "Washing machines (2)",
  "Dryers (2)",
  "Gray scale",
  "Relaxation tray",
  "Dark room",
];

const facilities = [
  "Medical facility",
  "Childcare facility",
  "Free transportation",
  "Group insurance",
  "Prayer room",
  "Workers welfare activities",
  "Canteen facility",
  "Training and awareness programmes",
  "Fair price shop",
];

const fireProtection = [
  "Diesel pump, 1250 GPM positive suction",
  "Electric pump, 1250 GPM",
  "Fire alarm system",
  "Smoke detectors",
  "Emergency exits",
  "Fire safety training",
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

const clientLogos = [
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
      <section style={{ position: "relative", minHeight: "88vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <Image
          src="/images/st-building.jpg"
          alt="The Supreme Stitch Ltd. factory building"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 62%" }}
          sizes="100vw"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(7,22,36,0.88) 0%, rgba(7,22,36,0.55) 48%, rgba(9,40,64,0.2) 100%)" }} />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "46%", background: "linear-gradient(transparent, rgba(7,22,36,0.82))" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />

        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "150px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "790px" }}>
            <p style={{ fontSize: "0.72rem", color: "#D9BC6B", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>
              Company Profile · Established 2008
            </p>
            <h1 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)", fontWeight: 800, color: "white", marginBottom: "18px", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Supreme Stitch Ltd.
            </h1>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.78)", maxWidth: "630px", lineHeight: 1.85, marginBottom: "34px" }}>
              One of the leading and most cost-effective garment exporters in Bangladesh.
              Knit and woven apparel for children, men and women, produced across 38 sewing
              lines and shipped to brands around the world.
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a href="/supreme-stitch-company-profile.pdf" download className="btn-gold">
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
            {keyFigures.map((s, i) => (
              <div key={s.label} style={{ padding: "6px 22px", borderRight: i < keyFigures.length - 1 ? "1px solid rgba(6,38,60,0.2)" : "none" }}>
                <div style={{ fontFamily: "var(--font-head)", fontSize: "2.3rem", fontWeight: 800, color: "#06263C", lineHeight: 1, textAlign: "center", fontVariantNumeric: "tabular-nums" }}>
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

      {/* ABOUT */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container">
          <div className="outfit-split reveal">
            <div>
              <p className="section-eyebrow">About Us</p>
              <h2 className="section-h2-dark" style={{ marginBottom: "22px" }}>
                Sixteen years of<br />export manufacturing
              </h2>
              <p style={{ color: "#52697C", lineHeight: 1.9, marginBottom: "18px" }}>
                Supreme Stitch Ltd., established in 2008, is one of the leading and most
                cost-effective garment exporters in Bangladesh. Modern machinery lets us
                produce up to 60,000 knitwear items per day.
              </p>
              <p style={{ color: "#52697C", lineHeight: 1.9, marginBottom: "18px" }}>
                We employ over 3,000 people, led by a team of professionals considered
                pioneers in the country&apos;s garment industry.
              </p>
              <p style={{ color: "#52697C", lineHeight: 1.9 }}>
                We specialise in knit and woven items across children&apos;s, men&apos;s and
                women&apos;s clothing. In-house testing facilities ensure strict quality
                control, on-time delivery and reasonable prices.
              </p>
            </div>
            <div style={{ position: "relative", width: "100%", minHeight: "420px", borderRadius: "8px", overflow: "hidden" }}>
              <Image src="/images/st-management.jpg" alt="Supreme Stitch management team in a meeting" fill style={{ objectFit: "cover" }} sizes="(max-width: 900px) 100vw, 560px" />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section-pad" style={{ background: "#0B1D2E" }}>
        <div className="container">
          <div className="mv-grid reveal">
            <div className="mv-card">
              <p style={{ fontSize: "0.7rem", color: "#D9BC6B", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "16px" }}>
                Our Vision
              </p>
              <p style={{ fontFamily: "var(--font-head)", fontSize: "1.28rem", fontWeight: 600, color: "white", lineHeight: 1.55 }}>
                To be a globally recognised leader in the garment industry, setting new
                standards for quality, innovation and sustainability.
              </p>
              <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.85, marginTop: "18px", fontSize: "0.93rem" }}>
                We aspire to drive meaningful change by creating sustainable solutions and
                fostering positive impacts on society and the environment.
              </p>
            </div>
            <div className="mv-card">
              <p style={{ fontSize: "0.7rem", color: "#D9BC6B", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "16px" }}>
                Our Mission
              </p>
              <p style={{ fontFamily: "var(--font-head)", fontSize: "1.28rem", fontWeight: 600, color: "white", lineHeight: 1.55 }}>
                To partner with global apparel brands, delivering high-quality, innovative
                and sustainable garment solutions.
              </p>
              <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.85, marginTop: "18px", fontSize: "0.93rem" }}>
                While maintaining a strong commitment to social and environmental
                responsibility at every stage of production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPORT GROWTH */}
      <section className="section-pad" style={{ background: "#F6F4EE", borderTop: "1px solid #E8E2D4", borderBottom: "1px solid #E8E2D4" }}>
        <div className="container reveal" style={{ maxWidth: "960px" }}>
          <ExportChart />
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }} className="reveal">
            <p className="section-eyebrow">Company Overview</p>
            <h2 className="section-h2-dark">The facility in numbers</h2>
            <div className="gold-rule" />
          </div>
          <div className="spec-table-grid reveal">
            {overview.map((g) => (
              <div key={g.group} className="spec-table">
                <h3>{g.group}</h3>
                <dl>
                  {g.rows.map((r) => (
                    <div key={r.k}>
                      <dt>{r.k}</dt>
                      <dd>{r.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="section-pad" style={{ background: "#0E2438" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }} className="reveal">
            <p style={{ fontSize: "0.72rem", color: "#D9BC6B", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
              Our Loyal Clients
            </p>
            <h2 className="section-h2-light">Long-running partnerships</h2>
            <div className="gold-rule" />
          </div>
          <div className="client-grid reveal">
            {clientStories.map((c) => (
              <div key={c.name} className="client-card">
                <div className="client-since">Since {c.since}</div>
                <h3>{c.name}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section style={{ background: "#F6F4EE", borderTop: "1px solid #E8E2D4", borderBottom: "1px solid #E8E2D4", padding: "40px 0", overflow: "hidden" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#8A7A55", letterSpacing: "3px", textTransform: "uppercase" }}>
            Trusted by Global Brands
          </span>
        </div>
        <div className="marquee-container">
          <div className="marquee-track">
            {[...Array(3)].map((_, setIdx) =>
              clientLogos.map((logo, i) => (
                <img key={`${setIdx}-${i}`} src={logo.src} alt={logo.alt} className="marquee-logo" />
              ))
            )}
          </div>
        </div>
      </section>

      {/* PRODUCTION */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "54px" }} className="reveal">
            <p className="section-eyebrow">Production Overview</p>
            <h2 className="section-h2-dark">From yarn to finished garment</h2>
            <div className="gold-rule" />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
            {production.map((s, i) => (
              <div key={s.title} className={`spec-block reveal${i % 2 === 1 ? " is-flipped" : ""}`} style={{ background: "#F6F4EE" }}>
                <div style={{ position: "relative", minHeight: "320px" }}>
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

      {/* QUALITY & LAB */}
      <section className="section-pad" style={{ background: "#0B1D2E" }}>
        <div className="container">
          <div className="outfit-split reveal">
            <div>
              <p style={{ fontSize: "0.72rem", color: "#D9BC6B", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
                In-Line Quality Control
              </p>
              <h2 className="section-h2-light" style={{ marginBottom: "20px" }}>
                Perfection in every stitch
              </h2>
              <p style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.9, marginBottom: "30px" }}>
                A 100% in-line quality control system with random checks at AQL 1.0 confirms
                quality at every stage, backed by an in-house testing lab.
              </p>
              <p style={{ fontSize: "0.68rem", color: "#6FCBFF", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>
                Lab Equipment
              </p>
              <div className="lab-grid">
                {labEquipment.map((e) => (
                  <div key={e} className="lab-item">{e}</div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", width: "100%", minHeight: "440px", borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(56,182,255,0.22)" }}>
              <Image src="/images/st-quality.jpg" alt="Needle detection check on a finished garment" fill style={{ objectFit: "cover" }} sizes="(max-width: 900px) 100vw, 560px" />
            </div>
          </div>
        </div>
      </section>

      {/* SISTER CONCERNS */}
      <section className="section-pad" style={{ background: "#F6F4EE", borderTop: "1px solid #E8E2D4" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }} className="reveal">
            <p className="section-eyebrow">In-House Across the Group</p>
            <h2 className="section-h2-dark">Printing, embroidery and accessories</h2>
            <p style={{ color: "#52697C", lineHeight: 1.8, maxWidth: "62ch", margin: "18px auto 0", fontSize: "0.95rem" }}>
              Sister concerns keep embellishment and trims inside the group, so an order
              never depends on subcontracting.
            </p>
          </div>

          <div className="sister-grid reveal">
            <Link href="/embellishment" className="sister-card">
              <div className="sister-img">
                <Image src="/images/st-embroidery.jpg" alt="Multi-head embroidery machines" fill style={{ objectFit: "cover" }} sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <div className="sister-body">
                <h3>Supreme Embellishment Ltd.</h3>
                <p>62,000 sq ft printing and embroidery floor with an ETP at 3 m³/hour. 140 embroidery staff across two shifts on Barudan and Tajima machines.</p>
                <span className="sister-stat">80,000 pcs/day printing →</span>
              </div>
            </Link>
            <Link href="/accessories" className="sister-card">
              {/* No photography exists for Accessories yet, so this card uses a
                  typographic panel rather than borrowing another company's factory. */}
              <div className="sister-img sister-panel">
                <span className="sister-panel-num">12</span>
                <span className="sister-panel-lbl">Product lines</span>
              </div>
              <div className="sister-body">
                <h3>Supreme Accessories Industries Ltd.</h3>
                <p>Cartons, elastic, poly bags, sewing thread, printed labels, twill tape, interlining, drawstrings and neck boards, all produced in-house.</p>
                <span className="sister-stat">3,20,000 poly bags/day →</span>
              </div>
            </Link>
            <Link href="/outfit" className="sister-card">
              <div className="sister-img">
                <Image src="/images/hero-building.jpg" alt="Supreme Outfit factory" fill style={{ objectFit: "cover" }} sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <div className="sister-body">
                <h3>Supreme Outfit Ltd.</h3>
                <p>Our newest facility, dedicated to knit garments and outerwear, with in-house printing tables and oval machines for full production independence.</p>
                <span className="sister-stat">60,000 pcs/day, Phase 1 →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section-pad" style={{ background: "#123049" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "44px" }} className="reveal">
            <p style={{ fontSize: "0.72rem", color: "#D9BC6B", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
              Compliance Strength
            </p>
            <h2 className="section-h2-light">Internationally Certified</h2>
            <div className="gold-rule" />
          </div>
          <div className="cert-grid reveal">
            {certifications.map((c, i) => (
              <div key={`${c.src}-${i}`} className="cert-tile">
                <Image src={c.src} alt={c.alt} width={110} height={70} style={{ objectFit: "contain", width: "auto", height: "46px" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WELFARE, SAFETY, ENERGY */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }} className="reveal">
            <p className="section-eyebrow">People, Safety and Energy</p>
            <h2 className="section-h2-dark">Beyond the production floor</h2>
            <div className="gold-rule" />
          </div>

          <div className="care-grid reveal">
            <div className="care-card">
              <div className="care-img">
                <Image src="/images/st-childcare.jpg" alt="Childcare facility at the factory" fill style={{ objectFit: "cover" }} sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <div className="care-body">
                <h3>Supreme Facilities</h3>
                <ul className="care-list">
                  {facilities.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </div>
            </div>

            <div className="care-card">
              <div className="care-img">
                <Image src="/images/st-fire.jpg" alt="Fire protection pump house" fill style={{ objectFit: "cover" }} sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <div className="care-body">
                <h3>Fire Protection System</h3>
                <ul className="care-list">
                  {fireProtection.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </div>
            </div>

            <div className="care-card">
              <div className="care-img">
                <Image src="/images/st-solar.jpg" alt="Rooftop solar array" fill style={{ objectFit: "cover" }} sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <div className="care-body">
                <h3>Renewable Energy</h3>
                <div className="energy-rows">
                  <div>
                    <span className="energy-name">Supreme Stitch Ltd.</span>
                    <span className="energy-bar"><span style={{ width: "94%" }} /></span>
                    <span className="energy-val">468 kW of 500 kW · 94% renewable</span>
                  </div>
                  <div>
                    <span className="energy-name">Supreme Embellishment Ltd.</span>
                    <span className="energy-bar"><span style={{ width: "73%" }} /></span>
                    <span className="energy-val">1,100 kW of 1,500 kW · 73% renewable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD BAND */}
      <section className="section-pad" style={{ background: "#F6F4EE", borderTop: "1px solid #E8E2D4" }}>
        <div className="container reveal">
          <div className="download-band" style={{ background: "white" }}>
            <div>
              <p className="section-eyebrow" style={{ marginBottom: "10px" }}>Company Profile</p>
              <h2 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(1.5rem, 3vw, 2.1rem)", fontWeight: 800, color: "#0B1D2E", marginBottom: "12px" }}>
                Take the full profile with you
              </h2>
              <p style={{ color: "#52697C", lineHeight: 1.8, maxWidth: "480px" }}>
                Machinery lists, section-by-section capacity, compliance certifications and
                export figures in one PDF. We also warmly invite you to visit the factory.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
              <a href="/supreme-stitch-company-profile.pdf" download className="btn-gold">
                Download PDF
              </a>
              <Link href="/contact" className="btn-outline-gold" style={{ borderColor: "#A8832E", color: "#A8832E" }}>
                Arrange a visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section style={{ background: "white", padding: "70px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow">West Shaildubi, Kashimpur, Gazipur</p>
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
              title="Supreme Stitch Ltd. location, Kashimpur, Gazipur"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ background: "#0B1D2E", padding: "60px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1.5rem", fontWeight: 700, color: "white", marginBottom: "16px" }}>
            Contact Supreme Stitch
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}>
            Email: <a href="mailto:admin@supremegroupbd.com" style={{ color: "#38B6FF", fontWeight: 600 }}>admin@supremegroupbd.com</a>
            {" · "}
            Phone: <span style={{ fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>01678038801-04</span>
          </p>
        </div>
      </section>
    </>
  );
}
