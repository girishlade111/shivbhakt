"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RoyalFrame from "@/components/RoyalFrame";

interface BentoEvent {
  readonly title: string;
  readonly text: string;
  readonly image: string;
  readonly alt: string;
  /** Wide cells span 4 of 6 columns; square cells span 2. */
  readonly wide: boolean;
}

const BENTO_EVENTS: readonly BentoEvent[] = [
  {
    title: "Night Attack on Shaista Khan (1663)",
    text: "Shivaji led a daring night attack on the Mughal general Shaista Khan's camp at Lal Mahal in Pune. Khan lost three fingers in the scuffle and was forced to retreat, severely embarrassing the Mughal Empire.",
    image: "/images/shaista-khan-attack.jpg",
    alt: "Shivaji's night attack on Shaista Khan at Lal Mahal, Pune",
    wide: true,
  },
  {
    title: "Sack of Surat (1664)",
    text: "To replenish his depleted treasury, Shivaji sacked the wealthy Mughal trading center of Surat, decamping with immense wealth.",
    image: "/images/surat-sack.jpg",
    alt: "The sack of Surat, the wealthy Mughal trading center",
    wide: false,
  },
  {
    title: "Treaty of Purandar (1665)",
    text: "Faced with the massive army of Rajput general Jai Singh I, Shivaji signed the Treaty of Purandar, strategically giving up 23 forts to buy time and peace.",
    image: "/images/purandar-treaty.jpg",
    alt: "The signing of the Treaty of Purandar with Jai Singh I",
    wide: false,
  },
  {
    title: "The Great Escape from Agra (1666)",
    text: "Placed under house arrest by Aurangzeb in Agra, Shivaji hatched a brilliant plan. He feigned illness and miraculously escaped with his son Sambhaji by hiding in large baskets of sweets meant for distribution.",
    image: "/images/agra-escape.jpg",
    alt: "Shivaji's legendary escape from Agra in baskets of sweets",
    wide: true,
  },
];

function BentoCard({
  event,
  index,
}: {
  readonly event: BentoEvent;
  readonly index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 }}
      className={`group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md transition-[border-color,box-shadow] duration-300 ease-out hover:border-gold/40 hover:shadow-[0_0_20px_rgba(255,103,31,0.3)] ${
        event.wide ? "lg:col-span-4" : "lg:col-span-2"
      }`}
    >
      {/* Framed artwork */}
      <RoyalFrame className="m-4 mb-0">
        <div className="relative w-full aspect-video overflow-hidden rounded-xl">
          <Image
            src={event.image}
            alt={event.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-xl transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
          />
        </div>
      </RoyalFrame>

      {/* Body */}
      <div className="space-y-3 px-7 pb-7 pt-5">
        <h3 className="font-display text-xl font-bold text-kesari sm:text-2xl">
          {event.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-300">{event.text}</p>
      </div>
    </motion.article>
  );
}

export default function MughalConflict() {
  return (
    <section
      id="mughal-conflict"
      aria-labelledby="mughal-heading"
      className="relative overflow-hidden bg-night py-24 sm:py-28"
    >
      {/* Ambient saffron glow */}
      <div
        aria-hidden
        className="absolute left-[8%] top-40 h-[420px] w-[420px] rounded-full bg-kesari/10 blur-[150px]"
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
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            Chapter 03
          </p>
          <h2
            id="mughal-heading"
            className="font-display text-3xl font-bold uppercase tracking-wide text-kesari drop-shadow-[0_0_28px_rgba(255,103,31,0.55)] sm:text-4xl lg:text-5xl"
          >
            Defying the Mughal Empire
          </h2>
          <span
            aria-hidden
            className="mx-auto mt-5 block h-[3px] w-28 rounded-full bg-gradient-to-r from-transparent via-brightgold to-transparent"
          />
        </motion.header>

        {/* Bento grid: single column on mobile, 6-column mosaic on desktop */}
        <div className="grid grid-cols-1 gap-6 lg:auto-rows-fr lg:grid-cols-6">
          {BENTO_EVENTS.map((event, index) => (
            <BentoCard key={event.title} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
