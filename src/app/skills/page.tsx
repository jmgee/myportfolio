"use client";

import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import { motion, type Variants } from "framer-motion";

export default function SkillsPage() {
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const grid: Variants = {
    hidden: { opacity: 0, y: 18, scale: 0.98, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.05 },
    },
  };

  return (
    <main className="relative pt-28 pb-16">
      <Container>
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <SectionHeading
              eyebrow="Skills & Expertise"
              title="Specialized services built to scale your server"
              subtitle="Development, maintenance, and custom scripting delivered with consistency—ensuring stability, performance, and long-term scalability."
            />
          </motion.div>

          <motion.div variants={grid}>
            <FeatureGrid />
          </motion.div>
        </motion.div>
      </Container>
    </main>
  );
}