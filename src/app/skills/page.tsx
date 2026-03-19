"use client";

import { useState } from "react";
import Container from "@/components/Container";
import { motion } from "framer-motion";

type Tab = "speaking" | "film" | "reading" | "board" | "listening";

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("speaking");

  const tabs = [
    { id: "speaking", label: "Speaking" },
    { id: "film", label: "Film Viewing" },
    { id: "reading", label: "Reading" },
    { id: "board", label: "Board Games" },
    { id: "listening", label: "Listening" },
  ] as const;

  const content = {
    speaking: {
      image: "https://example.com/speaking.jpg",
      text: "Speaking skills focus on verbal communication, clarity, confidence, and effective expression of ideas in discussions and presentations.",
    },
    film: {
      image: "https://example.com/film.jpg",
      text: "Film viewing enhances analytical thinking by interpreting themes, narratives, and communication styles in visual storytelling.",
    },
    reading: {
      image: "https://example.com/reading.jpg",
      text: "Reading builds comprehension, vocabulary, and critical thinking through exposure to diverse texts and perspectives.",
    },
    board: {
      image: "https://example.com/board.jpg",
      text: "Board games encourage strategic thinking, collaboration, and interactive communication in group settings.",
    },
    listening: {
      image: "https://example.com/listening.jpg",
      text: "Listening strengthens understanding, empathy, and the ability to process information effectively.",
    },
  };

  const current = content[activeTab];

  return (
    <main className="relative pt-28 pb-16">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex justify-center">
            <div className="relative inline-flex rounded-2xl border border-white/10 bg-black/40 p-1">
              <motion.div
                layoutId="tab-pill"
                className="absolute inset-y-1 rounded-xl bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.45)]"
                style={{
                  width: `${100 / tabs.length}%`,
                  left: `${
                    tabs.findIndex((t) => t.id === activeTab) *
                    (100 / tabs.length)
                  }%`,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />

              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative z-10 px-6 py-2 text-sm font-medium text-white"
                  type="button"
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-12 text-center"
          >
            {current.image && (
              <div className="flex justify-center mb-6">
                <img
                  src={current.image}
                  alt="Skill visual"
                  className="w-56 rounded-lg border border-white/10"
                />
              </div>
            )}

            <div className="mx-auto max-w-2xl text-zinc-300 leading-relaxed">
              {current.text}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </main>
  );
}