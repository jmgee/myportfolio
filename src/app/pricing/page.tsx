"use client";

import { useState } from "react";
import Container from "@/components/Container";
import { motion } from "framer-motion";

type Tab = "response1" | "response2";

export default function ReadersResponseTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("response1");

  const responses = {
    response1: {
      image: "/images/response1.jpg", 
      content: `
Honestly, when I first took GED 0001, I thought it would just be another typical English class where we focus on grammar, essays, and readings. At first, I didn’t expect much from it. But as the subject went on, I slowly realized that it was more than that — it actually helped me understand how important communication is in real life.
      `,
    },
    response2: {
      image: "/images/response2.jpg", 
      content: `
One thing I really learned from this subject is that English is not just about following rules or being perfect in grammar. It’s more about being able to express yourself clearly and connect with others. Whether it’s through writing or speaking, what matters is that your message is understood.
      `,
    },
  };

  const current = responses[activeTab];

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-center">
        <div className="relative inline-flex rounded-2xl border border-white/10 bg-white/5 p-1">
          <motion.div
            layoutId="tab-slider"
            className="absolute inset-y-1 rounded-xl bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            style={{
              width: "50%",
              left: activeTab === "response1" ? "0.25rem" : "50%",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />

          <button
            onClick={() => setActiveTab("response1")}
            className="relative z-10 px-6 py-2 text-sm font-medium text-white"
            type="button"
          >
            Readers Response 1
          </button>

          <button
            onClick={() => setActiveTab("response2")}
            className="relative z-10 px-6 py-2 text-sm font-medium text-white"
            type="button"
          >
            Readers Response 2
          </button>
        </div>
      </div>

      <Container>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-12"
        >
          {current.image && (
            <div className="flex justify-center mb-10">
              <img
                src={current.image}
                alt="Reader response visual"
                className="max-w-full rounded-2xl border border-white/10 shadow-soft"
              />
            </div>
          )}

          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-zinc-300 leading-relaxed backdrop-blur-xl">
            {current.content}
          </div>
        </motion.div>
      </Container>
    </motion.div>
  );
}