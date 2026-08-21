import type { Metadata } from "next";
import EarlyLife from "@/components/EarlyLife";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Early Life & Heritage | Chhatrapati Shivaji Maharaj",
  description:
    "Born at Shivneri Fort on 19 February 1630 and named after Goddess Shivai Devi — the early years of Shivaji Bhonsle and the dream of Swarajya instilled by Jijabai.",
};

export default function EarlyLifePage() {
  return (
    <PageTransition>
      <main>
        <EarlyLife />
      </main>
    </PageTransition>
  );
}
