"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TimelineEvent {
  readonly period: string;
  readonly title: string;
  readonly text: string;
  readonly image: string;
  readonly alt: string;
}

const TIMELINE_EVENTS: readonly TimelineEvent[] = [
  {
    period: "1647 – 1656",
    title: "Early Conquests & Javali",
    text: "In 1647, a 16-year-old Shivaji captured the Torna Fort and used the treasure to build Rajgad. He later seized the strategic Javali valley in 1656 from Chandrarao More, extending his influence into southwest Maharashtra.",
    image: "/images/torna-rajgad.jpg",
    alt: "Torna and Rajgad forts, the first conquests of Shivaji",
  },
  {
    period: "10 November 1659",
    title: "The Duel at Pratapgad",
    text: "Bijapur sent the veteran general Afzal Khan to arrest Shivaji. Meeting at the foothills of Pratapgad, Khan attempted a betrayal, but Shivaji, wearing hidden armor and wielding a 'bagh nakh' (tiger claw), struck him down. The ensuing battle was a decisive victory for the Marathas.",
    image: "/images/pratapgad-duel.jpg",
    alt: "The duel between Shivaji Maharaj and Afzal Khan at Pratapgad",
  },
  {
    period: "July – September 1660",
    title: "Siege of Panhala & Pavan Khind",
    text: "Besieged at Panhala fort by Siddi Jauhar, Shivaji executed a daring night escape. His commander, Baji Prabhu Deshpande, along with 300 soldiers, fought to the death at Ghod Khind to hold back the enemy. The pass was renamed 'Paavan Khind' (Sacred Pass) in their honor.",
    image: "/images/pavan-khind.jpg",
    alt: "Pavan Khind, the sacred pass defended by Baji Prabhu Deshpande",
  },
];

function TimelineCard({
  event,
  onRight,
}: {
  readonly event: TimelineEvent;
  readonly onRight: boolean;
}) {
  return (
    <div
      data-aos={onRight ? "fade-left" : "fade-right"}
      data-aos-duration="800"
      className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-black/40 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-gold/60 hover:shadow-[0_0_45px_rgba(212,175,55,0.3)]"
    >
      {/* Card artwork */}
      <div className="relative h-52 overflow-hidden sm:h-60">
        <Image
          src={event.image}
          alt={event.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
        />
        <p className="absolute bottom-4 left-5 font-display text-xs font-semibold uppercase tracking-[0.3em] text-kesari drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          {event.period}
        </p>
      </div>

      {/* Card body */}
      <div className="space-y-3 p-6 sm:p-7">
        <h3 className="font-display text-xl font-bold text-kesari sm:text-2xl">
          {event.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-300">{event.text}</p>
      </div>
    </div>
  );
}

export default function BijapurConflict() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set("[data-line-fill]", { scaleY: 1 });
        return;
      }

      /* Gold line draws itself downward as the user scrolls */
      gsap.fromTo(
        "[data-line-fill]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-timeline]",
            start: "top 70%",
            end: "bottom 65%",
            scrub: 0.6,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="bijapur-conflict"
      ref={sectionRef}
      aria-labelledby="bijapur-heading"
      className="relative overflow-hidden bg-night py-24 sm:py-28"
    >
      {/* Ambient saffron glow */}
      <div
        aria-hidden
        className="absolute right-[10%] top-32 h-[420px] w-[420px] rounded-full bg-kesari/10 blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <header data-aos="fade-up" className="mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            Chapter 02
          </p>
          <h2
            id="bijapur-heading"
            className="font-display text-3xl font-bold uppercase tracking-wide text-kesari drop-shadow-[0_0_22px_rgba(255,103,31,0.4)] sm:text-4xl lg:text-5xl"
          >
            Conflict with Bijapur Sultanate
          </h2>
          <span
            aria-hidden
            className="mx-auto mt-5 block h-[3px] w-28 rounded-full bg-gradient-to-r from-transparent via-brightgold to-transparent"
          />
        </header>

        {/* Vertical timeline */}
        <div data-timeline className="relative">
          {/* Line track */}
          <div
            aria-hidden
            className="absolute bottom-0 left-4 top-0 w-px -translate-x-1/2 bg-white/10 lg:left-1/2"
          />
          {/* Glowing gold fill (GSAP-scrubbed) */}
          <div
            aria-hidden
            data-line-fill
            className="absolute bottom-0 left-4 top-0 w-[2px] origin-top -translate-x-1/2 bg-gradient-to-b from-brightgold via-gold to-kesari shadow-[0_0_16px_rgba(212,175,55,0.7)] will-change-transform lg:left-1/2"
          />

          <ol className="space-y-16 lg:space-y-24">
            {TIMELINE_EVENTS.map((event, index) => {
              const onRight = index % 2 === 1;

              return (
                <li key={event.title} className="relative">
                  {/* Glowing node on the line */}
                  <span
                    aria-hidden
                    className="absolute left-4 top-10 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-brightgold bg-night shadow-[0_0_18px_rgba(255,215,0,0.8)] transition-transform duration-300 lg:left-1/2"
                  />

                  <div
                    className={`ml-14 lg:w-[calc(50%-3.5rem)] ${
                      onRight ? "lg:ml-auto" : ""
                    }`}
                  >
                    <TimelineCard event={event} onRight={onRight} />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
