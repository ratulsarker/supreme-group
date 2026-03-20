import CompanyPage from "@/components/CompanyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supreme Stitch Ltd.",
  description: "Vertically integrated garment manufacturer with a full supply chain. Trusted by Fanatics, Hanes, and Walmart.",
};

export default function StitchPage() {
  return (
    <CompanyPage
      category="Garment Manufacturing"
      name="Supreme Stitch Ltd."
      tagline="Vertically integrated garment manufacturing — delivering precision, quality, and reliability from yarn to finished product."
      overview="Supreme Stitch Ltd. is a fully vertically integrated garment manufacturer based in Bangladesh. We manage the complete production cycle in-house — from raw knitting and fabric cutting through sewing, printing, finishing, and final quality control. This end-to-end capability means faster lead times, tighter quality control, and competitive pricing for our global clients. Our customers include some of the world's most recognizable retail and sportswear brands: Fanatics, Hanes, and Walmart. We are committed to sustainable manufacturing practices and continuously invest in our facilities, workforce, and environmental standards."
      stats={[
        { number: "100%", label: "Vertical Integration" },
        { number: "3", label: "Global Brand Clients" },
        { number: "Full", label: "Supply Chain" },
        { number: "Sustainable", label: "Operations" },
      ]}
      sections={[
        {
          heading: "Knitting & Fabric",
          body: [
            "Our knitting department operates state-of-the-art circular and flat knitting machines capable of producing a wide range of fabric types — jersey, rib, interlock, and more.",
            "In-house knitting gives us complete control over fabric quality, texture, and composition before any garment is cut.",
          ],
        },
        {
          heading: "Cutting & Sewing",
          body: [
            "Precision cutting technology ensures minimal fabric waste and consistent pattern accuracy across every order.",
            "Our sewing floor is staffed by skilled operators trained to meet the exacting standards of global fashion and sportswear brands.",
          ],
        },
        {
          heading: "Printing & Finishing",
          body: [
            "We offer in-house screen printing, sublimation, and embroidery services — no need to outsource embellishment work.",
            "Our finishing department handles ironing, folding, tagging, bagging, and export packing — ready for direct shipment to retail.",
          ],
        },
        {
          heading: "Quality Assurance",
          body: [
            "Every garment goes through multi-stage QA inspections aligned with buyer AQL standards.",
            "We work closely with our global clients' compliance and QA teams to ensure zero-defect delivery on every shipment.",
          ],
        },
        {
          heading: "Global Clients",
          body: [
            "Our production line is trusted by Fanatics, one of the world's largest licensed sports merchandise companies.",
            "We supply to Hanes and Walmart — two of the world's largest apparel retailers — a testament to our reliability and production quality.",
          ],
        },
        {
          heading: "Sustainability",
          body: [
            "We are actively reducing our carbon footprint through energy-efficient machinery and waste reduction programs.",
            "Sustainable sourcing, fair labor practices, and a safe working environment are non-negotiable principles at Supreme Stitch.",
          ],
        },
      ]}
      highlights={[
        "Fully vertical supply chain from knitting to finished garment",
        "Trusted supplier to Fanatics, Hanes, and Walmart",
        "In-house printing, embroidery, and finishing capabilities",
        "Multi-stage quality assurance aligned with global buyer standards",
        "Committed to sustainable and ethical manufacturing",
        "Experienced workforce with deep expertise in sportswear and casual wear",
        "Fast lead times due to complete in-house production control",
        "Flexible order volumes — from small runs to mass production",
      ]}
    />
  );
}
