import Image from "next/image";
import Link from "next/link";

interface LegacyPillar {
  readonly title: string;
  readonly lead?: string;
  readonly text: string;
}

interface FooterLink {
  readonly label: string;
  readonly href: string;
}

const SOUTHERN_CAMPAIGN_TEXT: string =
  "In 1677, Shivaji undertook a massive expedition into Southern India, capturing the strategic forts of Vellore and Gingee. These conquests expanded the Maratha influence vastly across the Madras Carnatic. In late March 1680, Shivaji fell ill and passed away on 3-5 April 1680 at Raigad Fort, leaving behind a fully sovereign and powerful Maratha Empire.";

const LEGACY_PILLARS: readonly LegacyPillar[] = [
  {
    title: "Ganimi Kawa",
    lead: "Master of Guerrilla Warfare",
    text: "He utilized the local terrain, hill forts, and superior mobility of his light cavalry to outsmart massive, slow-moving enemy armies.",
  },
  {
    title: "Chivalry & Morality",
    text: "Renowned for his strict enforcement of morality, secular values, and chivalrous treatment of women and captured enemies, which extorted admiration even from his critics.",
  },
  {
    title: "The Eternal Icon",
    text: "An enduring national hero whose legacy of 'Hindavi Swarajya' inspired generations of freedom fighters and continues to be the pride of India.",
  },
];

const FOOTER_LINKS: readonly FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Early Life", href: "/early-life" },
  { label: "Bijapur Conflict", href: "/bijapur-conflict" },
  { label: "Mughal Conflict", href: "/mughal-conflict" },
  { label: "Coronation", href: "/coronation" },
  { label: "Legacy", href: "/legacy" },
];

export default function LegacyFooter() {
  return (
    <div className="bg-gradient-to-b from-night via-[#170a05] to-[#45190a]">
      {/* Part 1 & 2 — tribute sections */}
      <section
        id="legacy"
        aria-labelledby="legacy-heading"
        className="relative overflow-hidden pb-24 pt-24 sm:pt-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* Part 1 — Southern Campaigns & Final Years */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              className="max-w-xl"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-gold">
                Chapter 05 · The Final March
              </p>
              <h2
                id="legacy-heading"
                className="font-display text-3xl font-bold uppercase tracking-wide text-brightgold drop-shadow-[0_0_24px_rgba(255,215,0,0.35)] sm:text-4xl"
              >
                The Southern Conquest &amp; Final Years
              </h2>
              <span
                aria-hidden
                className="mt-5 block h-[3px] w-16 rounded-full bg-gradient-to-r from-brightgold to-transparent"
              />
              <p className="mt-6 text-base leading-relaxed text-gray-300">
                {SOUTHERN_CAMPAIGN_TEXT}
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              className="group relative w-full"
            >
              {/* Offset gold frame */}
              <div
                aria-hidden
                className="absolute -inset-3 rounded-2xl border border-gold/25 transition-all duration-500 group-hover:border-gold/60 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.28)]"
              />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-gold/30">
                <Image
                  src="/images/raigad-statue.jpg"
                  alt="Statue of Chhatrapati Shivaji Maharaj at Raigad Fort"
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                />
              </div>
            </div>
          </div>

          {/* Part 2 — Pillars of Legacy */}
          <div className="mt-24 sm:mt-28">
            <header
              data-aos="fade-in"
              data-aos-duration="1200"
              className="mx-auto mb-14 max-w-xl text-center"
            >
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-kesari drop-shadow-[0_0_22px_rgba(255,103,31,0.45)] sm:text-3xl">
                Pillars of Legacy
              </h3>
              <span
                aria-hidden
                className="mx-auto mt-4 block h-[3px] w-20 rounded-full bg-gradient-to-r from-transparent via-brightgold to-transparent"
              />
            </header>

            <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {LEGACY_PILLARS.map((pillar, index) => (
                <li
                  key={pillar.title}
                  data-aos="fade-up"
                  data-aos-delay={(index * 150).toString()}
                  data-aos-duration="1200"
                  className="flex min-h-[300px] flex-col rounded-3xl border border-gold/15 bg-white/[0.04] p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.22)]"
                >
                  <span
                    aria-hidden
                    className="block h-[3px] w-12 rounded-full bg-gradient-to-r from-kesari to-brightgold"
                  />
                  <h4 className="mt-6 font-display text-xl font-bold text-brightgold">
                    {pillar.title}
                  </h4>
                  {pillar.lead ? (
                    <p className="mt-2 text-sm font-semibold italic text-kesari">
                      {pillar.lead}
                    </p>
                  ) : null}
                  <p className="mt-4 text-sm leading-relaxed text-gray-300">
                    {pillar.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Part 3 — Global footer */}
      <footer className="relative border-t border-yellow-500/30 bg-black/20 px-6 py-16 text-center shadow-[0_-12px_60px_-18px_rgba(255,103,31,0.35)]">
        <Image
          src="/images/royal-seal-rajmudra.png"
          alt="Rajmudra — royal seal of Chhatrapati Shivaji Maharaj"
          width={76}
          height={76}
          className="mx-auto rounded-full p-1 ring-1 ring-gold/40 transition-shadow duration-300 hover:shadow-[0_0_26px_rgba(212,175,55,0.5)]"
        />

        <blockquote className="mx-auto mt-7 max-w-xl font-display text-lg italic leading-relaxed text-white sm:text-xl">
          “A legacy of valor, justice, and Swarajya that echoes through eternity.”
        </blockquote>

        <nav
          aria-label="Footer navigation"
          className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-3"
        >
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 transition-colors duration-200 hover:text-brightgold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-9 text-xs text-gray-500">
          © 2026 Chhatrapati Shivaji Maharaj Tribute. Designed with respect and pride.
        </p>
      </footer>
    </div>
  );
}
