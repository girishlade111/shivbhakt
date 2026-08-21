"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
};

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Backdrop artwork with slow cinematic settle */}
      <motion.div
        aria-hidden
        initial={{ scale: reduceMotion ? 1 : 1.18 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.6, ease: "easeOut" }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/images/hero-shivaji-maharaj.jpg"
          alt="Artistic portrait of Chhatrapati Shivaji Maharaj"
          fill
          preload
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Readability overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/20 to-black/60" />

      {/* Saffron aura */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-kesari/15 blur-[140px]"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-6 pb-28 pt-36 text-center"
      >
        <motion.p
          variants={revealVariants}
          className="mb-6 flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.4em] text-brightgold sm:text-sm"
        >
          <span
            aria-hidden
            className="hidden h-px w-10 bg-gradient-to-r from-transparent to-brightgold/70 sm:block"
          />
          The Founder of the Maratha Empire
          <span
            aria-hidden
            className="hidden h-px w-10 bg-gradient-to-l from-transparent to-brightgold/70 sm:block"
          />
        </motion.p>

        <motion.h1
          variants={revealVariants}
          className="font-display text-4xl font-bold leading-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] sm:text-6xl lg:text-7xl"
        >
          Chhatrapati{" "}
          <span className="bg-gradient-to-r from-kesari via-[#ff8c42] to-brightgold bg-clip-text text-transparent">
            Shivaji&nbsp;I
          </span>
        </motion.h1>

        <motion.p
          variants={revealVariants}
          className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg"
        >
          Born on 19 February 1630, Shivaji I was a valiant Indian ruler and a member of
          the Bhonsle dynasty. He carved out an independent realm from the declining
          Adilshahi sultanate of Bijapur, which formed the genesis of the Maratha Kingdom.
          In 1674, he was formally crowned the Chhatrapati of his realm at Raigad Fort.
        </motion.p>

        <motion.div
          variants={revealVariants}
          className="mt-12 flex flex-wrap items-center justify-center gap-5"
        >
          <Link
            href="/early-life"
            className="rounded-full bg-kesari px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_8px_30px_rgba(255,103,31,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-kesari-deep hover:shadow-[0_0_38px_rgba(255,103,31,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brightgold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Explore the Journey
          </Link>
          <Link
            href="/legacy"
            className="rounded-full border-2 border-gold/80 bg-transparent px-8 py-[14px] text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-black hover:shadow-[0_0_38px_rgba(212,175,55,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brightgold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            View Achievements
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div aria-hidden className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <span className="relative block h-12 w-[2px] overflow-hidden rounded-full bg-white/10">
          <span className="absolute inset-x-0 top-0 h-4 animate-[scrollcue_1.8s_ease-in-out_infinite] rounded-full bg-gradient-to-b from-transparent via-brightgold to-kesari" />
        </span>
      </div>
    </section>
  );
}
