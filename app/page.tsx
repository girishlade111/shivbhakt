import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Chhatrapati Shivaji Maharaj | Founder of the Maratha Empire",
  description:
    "A tribute to Chhatrapati Shivaji I (1630–1680), founder of the Maratha Empire — his early life, the conflicts with Bijapur and the Mughals, his coronation at Raigad Fort in 1674, and his enduring legacy.",
};

export default function HomePage() {
  return (
    <PageTransition>
      <main>
        <Hero />
      </main>
    </PageTransition>
  );
}
