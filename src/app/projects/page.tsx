"use client";

import Container from "@/components/Container";
import Button from "@/components/Button";
import { motion } from "framer-motion";

type ServerStatus = "active" | "down";

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
  {
    id: "rivals-city",
    name: "Rivals City",
    description: "Developed & Maintained by mxds",
    players: "0/300",
    discordUrl: "https://discord.gg/pm5s2pKNcy",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/1024.png",
    status: "down",
  },

  {
    id: "hdc-city",
    name: "Highdays Cali",
    description: "Where Chaos Meets Paradise",
    players: "0/300",
    discordUrl: "https://discord.gg/",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/highdays1024.png",
    status: "down",
  },

  {
    id: "ss-city",
    name: "SouthSide City",
    description: "Semi Serious RP",
    players: "0/300",
    discordUrl: "https://discord.gg/",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/ss1024.png",
    status: "down",
  },

  {
    id: "escolta-city",
    name: "Escolta RP",
    description: "Mass Hiring Whitelisted Jobs & Gangs",
    players: "0/300",
    discordUrl: "https://discord.gg/",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/escolta1024.png",
    status: "down",
  },

  {
    id: "trinity-city",
    name: "Trinity Roleplay",
    description: "Whitelisted Jobs, Gangs, Business",
    players: "0/300",
    discordUrl: "https://discord.gg/",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/trinity1024.png",
    status: "down",
  },

  {
    id: "br-city",
    name: "BlackRose Roleplay",
    description: "Since 2022",
    players: "0/300",
    discordUrl: "https://discord.gg/",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/br1024.png",
    status: "down",
  },

  {
    id: "autonomy-city",
    name: "Autonomy RP",
    description: "Semi Serious Roleplay",
    players: "0/300",
    discordUrl: "https://discord.gg/",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/autonomy1024.png",
    status: "down",
  },

  {
    id: "newhorizon-city",
    name: "New Horizon Roleplay",
    description: "Developed & Maintained by mxds",
    players: "0/300",
    discordUrl: "https://discord.gg/",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/newhorizon1024.png",
    status: "down",
  },

  {
    id: "majesty-city",
    name: "Majesty City RP",
    description: "Police, Gangs, Business, Modded Cars",
    players: "0/300",
    discordUrl: "https://discord.gg/",
    logoUrl: "https://r2.fivemanage.com/j8pmvTQ4T0tTaPRfv1JNy/mjsty_1024.png",
    status: "down",
  },


];

export default function ProjectsPage() {
  return (
    <main className="relative pt-28 pb-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            <span className="text-blue-400">Projects</span> Showcase
          </h1>

          <p className="mt-4 text-zinc-300 md:text-lg">
            List of developed and maintained projects
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
          }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {SERVERS.map((s) => (
            <motion.div
              key={s.id}
              variants={{
                hidden: { opacity: 0, y: 18, scale: 0.98, filter: "blur(10px)" },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="flex justify-center"
            >
              <ServerCardView server={s} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </main>
  );
}

function isActive(server: ServerCard) {
  return server.status === "active";
}

function ServerCardView({ server }: { server: ServerCard }) {
  const active = isActive(server);
  const statusDotClass = active ? "bg-emerald-400" : "bg-red-500";

  return (
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
                  loading="eager"
                />
              </div>

              <div className="flex-1">
                <div className="text-lg font-semibold text-white">{server.name}</div>
                <div className="mt-1 text-sm text-zinc-400">{server.description}</div>

                <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-300">
                  <span className={`h-2 w-2 rounded-full ${statusDotClass}`} />
                  {active ? (
                    <>
                      <span className="font-semibold text-zinc-100">{server.players}</span>
                      <span className="text-zinc-400">players</span>
                    </>
                  ) : (
                    <span className="text-zinc-400">Offline</span>
                  )}
                </div>
              </div>
            </div>

            {active ? (
              <div className="mt-5">
                <Button href={server.discordUrl} variant="primary">
                  Join Discord Server
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}