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
      items: [
        {
          image: "https://example.com/speaking1.jpg",
          text: "Delivering structured presentations with confidence and clarity.",
        },
        {
          image: "https://example.com/speaking2.jpg",
          text: "Engaging in group discussions to develop persuasive communication.",
        },
      ],
    },

    film: {
      items: [
        {
          image: "https://example.com/film1.jpg",
          text: "Analyzing themes and symbolism in cinematic storytelling.",
        },
        {
          image: "https://example.com/film2.jpg",
          text: "Understanding narrative structure and character development.",
        },
      ],
    },

    reading: {
      items: [
        {
          image: "https://example.com/reading1.jpg",
          text: "Interpreting literary texts and extracting key insights.",
        },
        {
          image: "https://example.com/reading2.jpg",
          text: "Improving vocabulary and comprehension through diverse materials.",
        },
      ],
    },

    board: {
      items: [
        {
          image: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/boardgame1.png",
          text: "",
        },
        {
          image: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/boardgame2.png",
          text: "",
        },
      ],
    },

    listening: {
      items: [
        {
          image:
            "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/tedtalk1.png",
          text: "How to Speak so That People Want to Listen | Julian Treasure.",
        },
        {
          image:
            "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/tedtalk2.png",
          text:
            "An Artist's Unflinching Look at Racial Violence | Sanford Biggers.",
        },
        {
          image:
            "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/tedtalk3.png",
          text:
            "How Augmented Reality is Changing Activism | Glenn Cantave.",
        },
      ],
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
            className="mt-12"
          >
            <div className="space-y-12">
              {current.items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={item.image}
                    alt="Skill visual"
                    className="w-52 rounded-lg border border-white/10 mb-4"
                  />
                  <p className="max-w-xl text-zinc-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </main>
  );
}