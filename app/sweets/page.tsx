import CompanyPage from "@/components/CompanyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supreme Sweets",
  description: "Authentic Bengali sweets and confectionery across Dhaka — Uttara, Kalampur, Rajabazar, Ashulia, Gazipur, and Dhamrai.",
};

export default function SweetsPage() {
  return (
    <CompanyPage
      category="Food & Retail"
      name="Supreme Sweets"
      tagline="Authentic Bengali confectionery crafted with tradition — delighting communities across Dhaka since our founding."
      overview="Supreme Sweets is Supreme Group's venture into the hearts and homes of Bangladesh's communities. A cherished sweet shop chain, we specialize in authentic Bengali mishti (sweets) and confectionery — made fresh daily using traditional recipes and the finest natural ingredients. From the creamy richness of Roshogolla and Chomchom to the delicate sweetness of Mishti Doi and Sandesh, our products celebrate the centuries-old confectionery heritage of Bengal. We now operate six outlets across Dhaka, strategically located to serve communities in Uttara, Kalampur, Rajabazar, Ashulia, Gazipur, and Dhamrai — bringing authentic sweetness to every neighborhood."
      stats={[
        { number: "6", label: "Outlets" },
        { number: "Fresh", label: "Daily Made" },
        { number: "Dhaka", label: "Wide Reach" },
        { number: "100%", label: "Natural Ingredients" },
      ]}
      sections={[
        {
          heading: "Traditional Bengali Sweets",
          body: [
            "Our core range celebrates the classics — Roshogolla, Chomchom, Kalojam, Sandesh, Pantua, and more.",
            "Every sweet is crafted fresh daily using traditional techniques passed down through generations of Bengali confectionery masters.",
          ],
        },
        {
          heading: "Mishti Doi & Dairy",
          body: [
            "Our Mishti Doi (sweetened yogurt) is made from fresh chhana and thickened milk — one of our bestselling products.",
            "We source fresh dairy from trusted suppliers — and increasingly from our own Supreme Eco Bricks & Agro farm.",
          ],
        },
        {
          heading: "Seasonal Specials",
          body: [
            "We create special sweets for Eid, Puja, weddings, and national occasions — custom orders available for large events.",
            "Seasonal offerings rotate to keep our menus exciting and relevant to the traditions of our customers.",
          ],
        },
        {
          heading: "Our Outlets",
          body: [
            "Six conveniently located outlets across Dhaka: Uttara, Kalampur, Rajabazar, Ashulia, Gazipur, and Dhamrai.",
            "Each outlet is clean, inviting, and staffed by friendly team members who take pride in the Supreme Sweets name.",
          ],
        },
        {
          heading: "Gifting & Catering",
          body: [
            "Supreme Sweets gift boxes are a popular choice for corporate gifting, weddings, and festival gifts.",
            "We cater to events and ceremonies with bulk orders — contact us for custom packaging and event quantities.",
          ],
        },
        {
          heading: "Quality & Freshness",
          body: [
            "No artificial preservatives — everything is made fresh on the day it is sold.",
            "We use high-quality chhana, sugar, milk, and natural flavors to maintain the authentic taste our customers love.",
          ],
        },
      ]}
      highlights={[
        "6 outlets across Dhaka — Uttara, Kalampur, Rajabazar, Ashulia, Gazipur, Dhamrai",
        "Fresh sweets made daily — no artificial preservatives",
        "Authentic Bengali mishti using traditional recipes",
        "Custom gift boxes for corporate and personal gifting",
        "Event and wedding catering available",
        "Mishti Doi, Roshogolla, Sandesh, Chomchom, and more",
        "Friendly neighborhood stores with welcoming atmosphere",
        "Seasonal and festival special offerings",
      ]}
      ctaText="Find a Store Near You"
    />
  );
}
