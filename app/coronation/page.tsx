import type { Metadata } from "next";
import CoronationAdmin from "@/components/CoronationAdmin";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Coronation & Administration | Chhatrapati Shivaji Maharaj",
  description:
    "Crowned Chhatrapati at Raigad Fort on 6 June 1674 — the coronation, the Ashta Pradhan Mandal council of eight ministers, and the founding of the Maratha navy.",
};

export default function CoronationPage() {
  return (
    <PageTransition>
      <main>
        <CoronationAdmin />
      </main>
    </PageTransition>
  );
}
