import type { Metadata } from "next";
import LegacyFooter from "@/components/LegacyFooter";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Legacy | Chhatrapati Shivaji Maharaj",
  description:
    "The southern conquests of 1677, the final years at Raigad, and the enduring pillars of Shivaji's legacy — guerrilla warfare, chivalry, and Hindavi Swarajya.",
};

export default function LegacyPage() {
  return (
    <PageTransition>
      <main>
        <LegacyFooter />
      </main>
    </PageTransition>
  );
}
