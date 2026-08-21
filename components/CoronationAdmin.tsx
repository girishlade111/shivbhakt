"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RoyalFrame from "@/components/RoyalFrame";
import coronationRaigadImg from "@/public/images/coronation-raigad.jpg";
import ashtaPradhanImg from "@/public/images/ashta-pradhan.jpg";
import sindhudurgNavyImg from "@/public/images/sindhudurg-navy.jpg";

interface ReignTab {
  readonly label: string;
  readonly title: string;
  readonly text: string;
  readonly image: StaticImageData;
  readonly alt: string;
}

const REIGN_TABS: readonly ReignTab[] = [
  {
    label: "The Coronation (1674)",
    title: "Crowned as Chhatrapati",
    text: "On 6 June 1674, Shivaji was formally crowned king of the Maratha Empire at Raigad Fort in a lavish ceremony. He assumed titles like Shakakarta (founder of an era), Haindava Dharmodhhaarak, and Chhatrapati. The royal seal (Rajmudra) was inscribed in Sanskrit.",
    image: coronationRaigadImg,
    alt: "The coronation of Shivaji as Chhatrapati at Raigad Fort in 1674",
  },
  {
    label: "Ashta Pradhan Mandal",
    title: "Council of Eight Ministers",
    text: "Shivaji established the Ashta Pradhan Mandal, an administrative and advisory council of eight ministers, including the Peshwa (Prime Minister) and Amatya (Finance). He promoted Marathi and Sanskrit in his court, replacing Persian.",
    image: ashtaPradhanImg,
    alt: "The Ashta Pradhan Mandal — council of eight ministers",
  },
  {
    label: "The Maratha Navy",
    title: "Father of the Indian Navy",
    text: "Aware of the need for naval power, Shivaji built a formidable coastal navy. He fortified the coastline by building marine forts, most notably the Sindhudurg Fort, which became the headquarters of the Maratha navy.",
    image: sindhudurgNavyImg,
    alt: "Sindhudurg Fort, headquarters of the Maratha navy",
  },
];

export default function CoronationAdmin() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeTab: ReignTab = REIGN_TABS[activeIndex]!;

  const selectTab = (index: number): void => {
    setActiveIndex(index);
    tabRefs.current[index]?.focus();
  };

  const onKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ): void => {
    const last = REIGN_TABS.length - 1;
    let next: number | null = null;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      next = index === last ? 0 : index + 1;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      next = index === 0 ? last : index - 1;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = last;
    }

    if (next !== null) {
      event.preventDefault();
      selectTab(next);
    }
  };

  return (
    <section
      id="coronation"
      aria-labelledby="coronation-heading"
      className="relative overflow-hidden bg-night py-24 sm:py-28"
    >
      {/* Ambient saffron glow */}
      <div
        aria-hidden
        className="absolute right-[10%] top-40 h-[420px] w-[420px] rounded-full bg-kesari/10 blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <motion.header
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            Chapter 04
          </p>
          <h2
            id="coronation-heading"
            className="font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl lg:text-5xl"
          >
            <span className="text-kesari drop-shadow-[0_0_22px_rgba(255,103,31,0.45)]">
              The Sovereign King:
            </span>{" "}
            <span className="bg-gradient-to-r from-gold via-brightgold to-gold bg-clip-text text-transparent">
              Coronation &amp; Administration
            </span>
          </h2>
          <span
            aria-hidden
            className="mx-auto mt-5 block h-[3px] w-28 rounded-full bg-gradient-to-r from-transparent via-brightgold to-transparent"
          />
        </motion.header>

        {/* Tabs layout */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="grid gap-8 lg:grid-cols-[30fr_70fr] lg:gap-10"
        >
          {/* Left column — vertical tab list (30%) */}
          <nav
            role="tablist"
            aria-label="Coronation and administration topics"
            className="flex flex-col gap-4"
          >
            {REIGN_TABS.map((tab, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={tab.label}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`reign-tab-${index}`}
                  aria-selected={isActive}
                  aria-controls="reign-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                  className={`flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-300 ${
                    isActive
                      ? "scale-[1.03] border-brightgold bg-kesari text-white shadow-[0_0_28px_rgba(255,103,31,0.45)]"
                      : "border-white/10 bg-white/5 text-white/80 backdrop-blur-sm hover:border-gold/40 hover:bg-white/10 hover:text-white hover:shadow-[0_0_18px_rgba(212,175,55,0.2)]"
                  }`}
                >
                  <span
                    className={`font-display text-lg font-bold ${
                      isActive ? "text-brightgold" : "text-kesari"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-base font-semibold leading-snug sm:text-lg">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right column — content display area (70%) */}
          <div
            id="reign-panel"
            role="tabpanel"
            aria-labelledby={`reign-tab-${activeIndex}`}
            className="rounded-3xl border border-gold/30 bg-black/40 p-6 shadow-[0_0_45px_rgba(212,175,55,0.15)] backdrop-blur-md transition-shadow duration-500 hover:shadow-[0_0_60px_rgba(212,175,55,0.25)] sm:p-8"
          >
            <AnimatePresence mode="wait">
              <motion.figure
                key={activeIndex}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="m-0"
              >
                <div className="group">
                  <RoyalFrame className="transition-shadow duration-500 group-hover:border-brightgold/70 group-hover:shadow-[0_0_35px_rgba(255,215,0,0.25)]">
                    <Image
                      src={activeTab.image}
                      alt={activeTab.alt}
                      placeholder="blur"
                      className="w-full h-auto rounded-lg object-contain"
                    />
                  </RoyalFrame>
                </div>

                <figcaption className="mt-7 space-y-3 px-1">
                  <h3 className="font-display text-2xl font-bold text-brightgold sm:text-3xl">
                    {activeTab.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                    {activeTab.text}
                  </p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
