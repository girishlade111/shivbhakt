"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RoyalFrame from "@/components/RoyalFrame";

interface EarlyLifeEntry {
  readonly heading: string;
  readonly text: string;
  readonly image: string;
  readonly alt: string;
  /** When true, the image renders on the left and text on the right (desktop). */
  readonly reversed: boolean;
}

const EARLY_LIFE_ENTRIES: readonly EarlyLifeEntry[] = [
  {
    heading: "Birth at Shivneri",
    text: "Shivaji was born in the hill-fort of Shivneri near Junnar, Pune district, on 19 February 1630. He was named after a local deity, the Goddess Shivai Devi. He belonged to a Maratha family of the Bhonsle clan.",
    image: "/images/shivneri-fort.jpg",
    alt: "Shivneri Fort near Junnar, birthplace of Chhatrapati Shivaji Maharaj",
    reversed: false,
  },
  {
    heading: "The Dream of Swarajya",
    text: "His father, Shahaji Bhonsle, was a Maratha general who served the Deccan Sultanates. His mother, Jijabai, was a deeply influential figure who imbued the young Shivaji with the dream of re-establishing a Hindu kingdom. During his early years in Poona, Dadoji Kondadeo served as the administrator before Shivaji took over in 1647.",
    image: "/images/young-shivaji-jijabai.jpg",
    alt: "Young Shivaji with his mother Jijabai",
    reversed: true,
  },
];

function EntryTextBlock({ entry }: { readonly entry: EarlyLifeEntry }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: entry.reversed ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-xl ${entry.reversed ? "lg:order-2 lg:justify-self-end" : ""}`}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-kesari">
        {entry.reversed ? "Parents & Inspiration" : "Birth & Naming"}
      </p>
      <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
        {entry.heading}
      </h3>
      <span
        aria-hidden
        className="mt-5 block h-[3px] w-16 rounded-full bg-gradient-to-r from-gold via-brightgold to-transparent"
      />
      <p className="mt-6 text-base leading-relaxed text-gray-300">{entry.text}</p>
    </motion.div>
  );
}

function EntryImageBlock({ entry }: { readonly entry: EarlyLifeEntry }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: entry.reversed ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      className={`group w-full ${entry.reversed ? "lg:order-1 lg:justify-self-start" : ""}`}
    >
      <RoyalFrame className="transition-shadow duration-300 group-hover:shadow-[0_0_35px_rgba(212,175,55,0.25)]">
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src={entry.image}
            alt={entry.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-xl transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
          />
        </div>
      </RoyalFrame>
    </motion.div>
  );
}

export default function EarlyLife() {
  return (
    <section
      id="early-life"
      aria-labelledby="early-life-heading"
      className="relative bg-night py-24 sm:py-28"
    >
      {/* Ambient saffron glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-kesari/10 blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <motion.header
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-kesari">
            Chapter 01
          </p>
          <h2
            id="early-life-heading"
            className="font-display text-3xl font-bold uppercase tracking-wide text-kesari drop-shadow-[0_0_20px_rgba(255,103,31,0.35)] sm:text-4xl"
          >
            Early Life &amp; Heritage
          </h2>
          <span
            aria-hidden
            className="mx-auto mt-5 block h-[3px] w-28 rounded-full bg-gradient-to-r from-transparent via-brightgold to-transparent"
          />
        </motion.header>

        {/* Alternating rows */}
        <div className="space-y-20 sm:space-y-24">
          {EARLY_LIFE_ENTRIES.map((entry) => (
            <div
              key={entry.heading}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
            >
              <EntryTextBlock entry={entry} />
              <EntryImageBlock entry={entry} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
