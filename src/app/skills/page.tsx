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
          <div className="flex flex-col gap-3 max-w-xs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left text-2xl font-semibold transition ${
                  activeTab === tab.id
                    ? "bg-purple-600 text-white px-3 py-1 inline-block"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-12">
            {current.image && (
              <div className="flex justify-center mb-6">
                <img
                  src={current.image}
                  alt="Skill visual"
                  className="w-64 rounded-lg border border-white/10"
                />
              </div>
            )}

            <div className="max-w-2xl text-zinc-300 leading-relaxed">
              {current.text}
            </div>
          </div>
        </motion.div>
      </Container>
    </main>
  );
}