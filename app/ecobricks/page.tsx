import CompanyPage from "@/components/CompanyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supreme Eco Bricks & Agro Ltd.",
  description: "Sustainable farm in Dhamrai, Dhaka — 400+ cows, 150 sheep, dairy, eggs, biogas, and 100% natural farming.",
};

export default function EcoBricksPage() {
  return (
    <CompanyPage
      category="Sustainable Agriculture"
      name="Supreme Eco Bricks & Agro Ltd."
      tagline="Where nature meets innovation — a thriving, sustainable farm in Dhamrai built on 100% natural, chemical-free principles."
      overview="Supreme Eco Bricks & Agro Ltd. is Supreme Group's commitment to the land and to sustainable food production. Located in Dhamrai, Dhaka, our farm is home to over 400 cows, 150 sheep, and more than 100 ducks and geese — all raised without the use of synthetic chemicals, hormones, or antibiotics. We believe that the future of food lies in returning to natural, responsible farming methods. Our operation produces fresh dairy, eggs, and meat products while generating biogas from organic waste — creating a near-zero-waste circular farming ecosystem. This is not just a farm; it is a demonstration that profitability and sustainability can coexist beautifully."
      stats={[
        { number: "400+", label: "Cows" },
        { number: "150", label: "Sheep" },
        { number: "100+", label: "Ducks & Geese" },
        { number: "100%", label: "Natural Farming" },
      ]}
      sections={[
        {
          heading: "Dairy Production",
          body: [
            "Our herd of 400+ cows produces fresh, high-quality milk every day under hygienic, stress-free conditions.",
            "Animals are fed natural fodder and raised in open spaces — resulting in superior quality milk with better taste and nutrition.",
          ],
        },
        {
          heading: "Sheep & Small Livestock",
          body: [
            "150 sheep are raised for meat and wool in a natural, free-range environment in Dhamrai.",
            "Our ducks and geese contribute both eggs and meat to our product range, rounding out our full agro offering.",
          ],
        },
        {
          heading: "Biogas Energy",
          body: [
            "Organic waste from our livestock is converted into biogas, providing clean cooking fuel for the farm and reducing waste to near zero.",
            "This circular system reduces our environmental footprint and demonstrates how modern farms can become energy self-sufficient.",
          ],
        },
        {
          heading: "100% Natural Farming",
          body: [
            "No synthetic fertilizers, pesticides, hormones, or antibiotics are used anywhere on our farm.",
            "Our crops and feed are grown naturally, and our animals are cared for with the highest standards of animal welfare.",
          ],
        },
        {
          heading: "Eggs & Poultry",
          body: [
            "Free-range ducks and geese produce eggs rich in nutrients — raised the old-fashioned way, on natural feed and open land.",
            "Our poultry products are increasingly popular among health-conscious consumers in Dhaka.",
          ],
        },
        {
          heading: "Location: Dhamrai",
          body: [
            "Situated in Dhamrai, Dhaka, our farm benefits from fertile land and a dedicated local workforce.",
            "Proximity to Dhaka city allows for fresh delivery of products to consumers and business buyers without compromise on freshness.",
          ],
        },
      ]}
      highlights={[
        "400+ cows producing fresh, natural dairy daily",
        "150 sheep and 100+ ducks and geese on free-range open land",
        "Biogas generation from organic waste — circular zero-waste system",
        "100% natural farming — no chemicals, hormones, or antibiotics",
        "High-welfare animal care standards",
        "Fresh eggs and dairy products available in Dhaka",
        "Sustainable land management and crop rotation practices",
        "Contributing to Bangladesh's food security and rural employment",
      ]}
    />
  );
}
