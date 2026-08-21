import type { Metadata } from "next";
import BijapurConflict from "@/components/BijapurConflict";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Conflict with Bijapur | Chhatrapati Shivaji Maharaj",
  description:
    "From the capture of Torna Fort in 1647 to the duel with Afzal Khan at Pratapgad and the heroic stand of Baji Prabhu Deshpande at Pavan Khind.",
};

export default function BijapurConflictPage() {
  return (
    <PageTransition>
      <main>
        <BijapurConflict />
      </main>
    </PageTransition>
  );
}
