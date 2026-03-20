import CompanyPage from "@/components/CompanyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supreme Outfit Ltd.",
  description: "High-capacity garment manufacturer — 5 buildings, 1,350+ sewing machines, 1.2M pcs/month, powered by 1MW solar.",
};

export default function OutfitPage() {
  return (
    <CompanyPage
      category="Garment Manufacturing"
      name="Supreme Outfit Ltd."
      tagline="Massive-scale garment production powered by green energy — delivering 1.2 million pieces per month with precision and sustainability."
      overview="Supreme Outfit Ltd. is one of Supreme Group's flagship garment manufacturing operations, representing the group's largest production facility by output. Operating across 5 multi-story production buildings, we deploy 1,350+ industrial sewing machines to produce 1.2 million garment pieces every month. What makes Supreme Outfit truly distinctive is our investment in clean energy: a 1 megawatt (MW) solar power installation supplies a significant portion of our energy needs — reducing both our operational costs and our environmental impact. Supreme Outfit is a model for what modern, responsible, high-volume garment manufacturing can look like in Bangladesh."
      stats={[
        { number: "5", label: "Buildings" },
        { number: "1,350+", label: "Sewing Machines" },
        { number: "1.2M", label: "Pcs/Month" },
        { number: "1MW", label: "Solar Power" },
      ]}
      sections={[
        {
          heading: "Production Scale",
          body: [
            "Five production buildings house over 1,350 industrial sewing machines running in organized, efficient production lines.",
            "Monthly output of 1.2 million pieces makes Supreme Outfit one of the highest-capacity garment manufacturers in the group — and one of the most reliable volume suppliers in Bangladesh.",
          ],
        },
        {
          heading: "Solar Power — 1MW",
          body: [
            "We have invested in a 1MW rooftop solar power installation — one of the largest among garment manufacturers in Bangladesh.",
            "This renewable energy infrastructure significantly reduces our grid power dependency, lowers production costs, and demonstrates our commitment to environmental responsibility.",
          ],
        },
        {
          heading: "Sewing & Cutting",
          body: [
            "1,350+ sewing machines across specialized lines — each calibrated for specific garment types and stitch operations.",
            "Computer-assisted cutting systems minimize fabric waste and ensure consistent pattern sizing across all production runs.",
          ],
        },
        {
          heading: "Workforce",
          body: [
            "Hundreds of trained sewing operators, supervisors, quality controllers, and support staff work across our facilities.",
            "We invest in training, workplace safety, and employee welfare — maintaining a productive and loyal workforce.",
          ],
        },
        {
          heading: "Quality & Compliance",
          body: [
            "Inline and end-line quality inspection systems ensure that defect rates are minimized before garments leave our floor.",
            "We comply with international buyer standards for safety, labor, and environmental practices — supporting our clients' compliance requirements.",
          ],
        },
        {
          heading: "Infrastructure",
          body: [
            "Five modern production buildings with proper ventilation, lighting, fire safety systems, and emergency exits.",
            "Dedicated logistics and packing areas allow for efficient order consolidation and shipment preparation.",
          ],
        },
      ]}
      highlights={[
        "1.2 million garment pieces produced every month",
        "1,350+ industrial sewing machines across 5 production buildings",
        "1MW solar power — reducing costs and carbon footprint",
        "Computer-assisted cutting for precision and waste reduction",
        "Inline quality inspection and end-line QA at every stage",
        "Compliant with international labor and environmental standards",
        "Reliable high-volume delivery for global apparel buyers",
        "Modern, safe, and well-equipped production infrastructure",
      ]}
    />
  );
}
