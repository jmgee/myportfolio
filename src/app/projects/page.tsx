"use client";

import Container from "@/components/Container";
import Button from "@/components/Button";
import { motion } from "framer-motion";

type ServerStatus = "up" | "down";

type ServerCard = {
  id: string;
  name: string;
  description: string;
  players: string;
  discordUrl: string;
  logoUrl: string;
  status: ServerStatus;
};

const SERVERS: ServerCard[] = [
  // keep your existing SERVERS array here unchanged
];

export default function ProjectsPage() {
  return (
    <main className="relative pt-28 pb-24">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            <span className="text-blue-400">Reflection</span> Showcase
          </h1>

          <p className="mt-4 text-zinc-300 md:text-lg">
            Reflection on GED0001
          </p>
        </motion.div>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mt-20 max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl font-semibold text-white mb-6"
          >
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="space-y-6 text-zinc-300 leading-relaxed"
          >
            {[
              `Honestly, when I first took GED 0001, I thought it would just be another typical English class where we focus on grammar, essays, and readings. At first, I didn’t expect much from it. But as the subject went on, I slowly realized that it was more than that — it actually helped me understand how important communication is in real life.`,

              `There were times when I found it hard to express my thoughts, especially when writing. Sometimes I knew what I wanted to say, but I didn’t know how to put it into words properly. It was a bit frustrating, but at the same time, it pushed me to improve. As I kept doing the activities and writing tasks, I noticed that I was becoming more confident in sharing my ideas.`,

              `One thing I really learned from this subject is that English is not just about following rules or being perfect in grammar. It’s more about being able to express yourself clearly and connect with others. Whether it’s through writing or speaking, what matters is that your message is understood. That realization made me appreciate the subject more.`,

              `Overall, GED 0001 helped me grow in a simple but meaningful way. It improved how I communicate and how I organize my thoughts. Even though it wasn’t always easy, I can say that I learned something valuable that I can use not just in school, but also in everyday life.`,
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </motion.section>

        {/* Server Cards */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
          }}
          className="mt-20 grid gap-6 md:grid-cols-2"
        >
          {SERVERS.map((server) => {
            const active = server.status === "up";
            const statusDotClass = active
              ? "bg-emerald-400"
              : "bg-red-500";

            return (
              <motion.div
                key={server.id}
                variants={{
                  hidden: { opacity: 0, y: 18, scale: 0.98 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5 },
                  },
                }}
                className="flex justify-center"
              >
                <div className="w-full max-w-xl rounded-[28px] bg-gradient-to-b from-white/10 to-white/5 p-[1px] shadow-soft">
                  <div className="rounded-[28px] bg-zinc-950/55 p-5">
                    <div className="overflow-hidden rounded-2xl bg-black/40">
                      <div className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                            <img
                              src={server.logoUrl}
                              alt={`${server.name} logo`}
                              className="h-full w-full object-cover"
                            />
                          </div>

                          <div className="flex-1">
                            <div className="text-lg font-semibold text-white">
                              {server.name}
                            </div>
                            <div className="mt-1 text-sm text-zinc-400">
                              {server.description}
                            </div>

                            <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-300">
                              <span
                                className={`h-2 w-2 rounded-full ${statusDotClass}`}
                              />
                              {active ? (
                                <>
                                  <span className="font-semibold text-zinc-100">
                                    {server.players}
                                  </span>
                                  <span className="text-zinc-400">
                                    players
                                  </span>
                                </>
                              ) : (
                                <span className="text-zinc-400">
                                  Offline
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {active && (
                          <div className="mt-5">
                            <Button
                              href={server.discordUrl}
                              variant="primary"
                            >
                              Join Discord Server
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </main>
  );
}