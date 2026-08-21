import Hero from "@/components/Hero";
import EarlyLife from "@/components/EarlyLife";
import BijapurConflict from "@/components/BijapurConflict";
import MughalConflict from "@/components/MughalConflict";

interface TimelineFact {
  readonly period: string;
  readonly title: string;
  readonly detail: string;
}

const TIMELINE_FACTS: readonly TimelineFact[] = [
  {
    period: "19 February 1630",
    title: "The Birth",
    detail:
      "Shivaji was born at Shivneri Fort to Shahaji Bhonsle and Jijabai, into the Bhonsle clan of the Marathas.",
  },
  {
    period: "1645 – 1664",
    title: "Rise Against Bijapur",
    detail:
      "He carved out an independent realm from the declining Adilshahi Sultanate of Bijapur — the genesis of the Maratha Kingdom.",
  },
  {
    period: "6 June 1674",
    title: "The Coronation",
    detail:
      "Shivaji was formally crowned Chhatrapati of his realm at Raigad Fort, establishing a sovereign Maratha state.",
  },
  {
    period: "3 April 1680",
    title: "The Legacy",
    detail:
      "He passed away at Raigad Fort, leaving behind the Maratha Empire that would shape the destiny of India.",
  },
];

export default function HomePage() {
  return (
    <main>
      <Hero />

      <EarlyLife />

      <BijapurConflict />

      {/* Scroll-triggered timeline strip (AOS) */}
      <section
        aria-labelledby="timeline-heading"
        className="relative border-y border-gold/10 bg-night py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <header data-aos="fade-up" className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-kesari">
              Chronicles
            </p>
            <h2
              id="timeline-heading"
              className="font-display text-3xl font-bold text-white sm:text-4xl"
            >
              Milestones of a <span className="text-brightgold">Legend</span>
            </h2>
          </header>

          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE_FACTS.map((fact, index) => (
              <li
                key={fact.title}
                data-aos="fade-up"
                data-aos-delay={(index * 120).toString()}
                className="group rounded-2xl border border-gold/15 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)]"
              >
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-kesari">
                  {fact.period}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold text-white">
                  {fact.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{fact.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
