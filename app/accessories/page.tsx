import CompanyPage from "@/components/CompanyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supreme Accessories Industries Ltd.",
  description: "Bangladesh's leading garment accessories manufacturer — poly bags, labels, threads, elastic, twill tape, and more.",
};

export default function AccessoriesPage() {
  return (
    <CompanyPage
      category="Garment Accessories"
      name="Supreme Accessories Industries Ltd."
      tagline="Your complete source for high-quality garment accessories — delivering scale, consistency, and reliability to Bangladesh's RMG sector."
      overview="Supreme Accessories Industries Ltd. is one of Bangladesh's premier garment accessories manufacturers, serving the ready-made garments (RMG) sector with the full range of accessories needed to take garments from production floor to retail shelves. Our state-of-the-art facility operates 80+ machines across 12 dedicated production lines, enabling us to deliver exceptional volume without compromising on quality. We produce poly bags, woven and printed labels, sewing threads, elastic, twill tape, draw cords, and interlinings — all under one roof. Our daily production capacity is staggering: 320,000 poly bags, 160,000 labels, and 100,000 offset prints every single day."
      stats={[
        { number: "80+", label: "Machines" },
        { number: "12", label: "Production Lines" },
        { number: "320K", label: "Poly Bags/Day" },
        { number: "160K", label: "Labels/Day" },
      ]}
      sections={[
        {
          heading: "Poly Bags",
          body: [
            "We produce 320,000 poly bags daily in a variety of sizes, thicknesses, and print configurations.",
            "Available in LDPE, HDPE, and biodegradable options — meeting both buyer specifications and sustainability requirements.",
          ],
        },
        {
          heading: "Labels & Printing",
          body: [
            "160,000 woven, printed, and heat-transfer labels per day — available in custom sizes, materials, and finishes.",
            "Our offset printing department produces 100,000 high-quality prints daily for hangtags, care labels, and branded packaging.",
          ],
        },
        {
          heading: "Threads & Elastic",
          body: [
            "A wide range of sewing threads in various colors, counts, and compositions for all garment applications.",
            "Elastic in multiple widths and stretch specifications — jacquard, plain, knitted, and woven options available.",
          ],
        },
        {
          heading: "Twill Tape & Draw Cords",
          body: [
            "Custom twill tape in cotton, polyester, and blended compositions — available in any width or color.",
            "Draw cords in braided, flat, and tubular forms, used in hoodies, shorts, bags, and activewear.",
          ],
        },
        {
          heading: "Interlinings",
          body: [
            "Fusible and non-fusible interlinings for collars, cuffs, waistbands, and structural garment components.",
            "Available in woven, knitted, and non-woven constructions to suit all fabric and end-use requirements.",
          ],
        },
        {
          heading: "Production Scale",
          body: [
            "12 dedicated production lines allow us to run simultaneous orders across multiple product categories without delay.",
            "80+ specialized machines ensure maximum uptime and consistent output — our clients never miss a deadline.",
          ],
        },
      ]}
      highlights={[
        "320,000 poly bags produced every day",
        "160,000 labels and 100,000 offset prints daily",
        "80+ machines across 12 dedicated production lines",
        "Complete accessories range — from threads to interlinings",
        "Custom specifications available for all product types",
        "Reliable delivery timelines with high-volume capacity",
        "Quality checks at every production stage",
        "Serving Bangladesh's top garment exporters",
      ]}
    />
  );
}
