import type { Metadata } from "next";
import MughalConflict from "@/components/MughalConflict";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Conflict with the Mughals | Chhatrapati Shivaji Maharaj",
  description:
    "The night attack on Shaista Khan, the sack of Surat, the Treaty of Purandar, and the legendary escape from Agra — Shivaji's defiance of the Mughal Empire.",
};

export default function MughalConflictPage() {
  return (
    <PageTransition>
      <main>
        <MughalConflict />
      </main>
    </PageTransition>
  );
}
