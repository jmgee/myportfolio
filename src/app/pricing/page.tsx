"use client";

import { useState } from "react";
import Container from "@/components/Container";
import { motion } from "framer-motion";

type Tab = "response1" | "response2";

export default function ReadersResponseTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("response1");

  const responses = {
    response1: {
      image: "https://your-image-link-1.com/image.jpg",
      content: `
        This is the content for Reader’s Response 1.
        Replace this with your actual response text.
      `,
    },
    response2: {
      image: "https://your-image-link-2.com/image.jpg",
      content: `
        This is the content for Reader’s Response 2.
        Replace this with your actual response text.
      `,
    },
  };

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const current = responses[activeTab];

  return (
    <motion.div
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants} className="flex justify-center">
        <div className="relative inline-flex rounded-2xl border border-white/10 bg-white/5 p-1">
          <motion.div
            layoutId="tab-slider"
            className="absolute inset-y-1 rounded-xl bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            style={{
              width: "50%",
              left: activeTab === "response1" ? "0.25rem" : "50%",
            }}
            transition={{ type: "spring", stiffness: 420, damping: 30 }}
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
      </motion.div>

      <Container>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          {current.image && (
            <div className="flex justify-center mb-10">
              <img
                src={current.image}
                alt="Response visual"
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