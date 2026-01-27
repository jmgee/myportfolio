"use client";

import Container from "@/components/Container";
import Button from "@/components/Button";
import { motion, type Variants } from "framer-motion";
import { Github, Youtube } from "lucide-react";

export default function Page() {
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

  const card: Variants = {
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
    <main className="relative">
      <section className="pt-28 pb-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-6"
            >
              <motion.div
                variants={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Available for work
              </motion.div>

              <motion.h1
                variants={item}
                className="text-4xl font-semibold tracking-tight md:text-6xl"
              >
                Hi, I'm Jm
              </motion.h1>

              <motion.p variants={item} className="text-zinc-300 md:text-lg">
                A 🇵🇭 Filipino developer studying Computer Science, developing & maintaining GTA 5 Roleplay Servers.
                I build high-performance applications with clean code and exceptional user experiences.
              </motion.p>

              <motion.div
                variants={item}
                className="flex flex-wrap items-center gap-3"
              >
                <a
                  href="https://github.com/JmGBuilds"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-200 transition hover:bg-white/10 active:scale-95"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>

                <a
                  href="https://www.youtube.com/@superjmg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-200 transition hover:bg-white/10 active:scale-95"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>

                <Button href="/contact" variant="primary">
                  Start a project
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={card}
              initial="hidden"
              animate="show"
              className="relative"
            >
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-soft">
                <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-zinc-950/40">
                  <img
                    src="https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/SnapInsta.to_366958503_18203682817253656_1593931568972879815_n.jpg"
                    alt="mxds logo"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>

                <div className="mt-4 flex justify-center">
                  <a
                    href="https://www.instagram.com/definitelynotjmg/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300 hover:bg-white/10"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Picture from <span className="text-zinc-100">Instagram</span>
                  </a>
                </div>
              </div>

              <div className="pointer-events-none absolute -inset-6 -z-10 blur-3xl">
                <div className="h-full w-full animate-float rounded-full bg-gradient-to-r from-fuchsia-500/20 via-cyan-500/20 to-emerald-500/20" />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}