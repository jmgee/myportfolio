"use client";

import Container from "@/components/Container";
import { motion } from "framer-motion";
import {
  Github,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

type ContactCard = {
  id: string;
  title: string;
  handle: string;
  href: string;
  icon: "github" | "facebook" | "instagram" | "discord" | "email";
  accent: "gray" | "blue" | "pink" | "violet" | "green";
  span?: 1 | 2; 
};

const CONTACTS: ContactCard[] = [
  {
    id: "github",
    title: "GitHub",
    handle: "@JmGBuilds",
    href: "https://github.com/JmGBuilds",
    icon: "github",
    accent: "gray",
    span: 1,
  },
  {
    id: "facebook",
    title: "Facebook",
    handle: "Jm Gunayan",
    href: "https://www.facebook.com/definitelynotjmg",
    icon: "facebook",
    accent: "blue",
    span: 1,
  },
  {
    id: "instagram",
    title: "Instagram",
    handle: "@definitelynotjmg",
    href: "https://www.instagram.com/definitelynotjmg",
    icon: "instagram",
    accent: "pink",
    span: 1,
  },
  {
    id: "discord",
    title: "Discord",
    handle: "M Developments",
    href: "https://discord.gg/8z5pDsqGS5",
    icon: "discord",
    accent: "violet",
    span: 1,
  },
  {
    id: "email",
    title: "Email",
    handle: "contact.superjmg@gmail.com",
    href: "mailto:contact.superjmg@gmail.com",
    icon: "email",
    accent: "green",
    span: 1, 
  },
];

function iconFor(key: ContactCard["icon"]) {
  switch (key) {
    case "github":
      return Github;
    case "facebook":
      return Facebook;
    case "instagram":
      return Instagram;
    case "discord":
      return MessageCircle;
    case "email":
      return Mail;
  }
}

function accentClasses(a: ContactCard["accent"]) {
  switch (a) {
    case "gray":
      return "ring-white/15 text-white";
    case "blue":
      return "ring-blue-400/40 text-blue-100";
    case "pink":
      return "ring-pink-400/40 text-pink-100";
    case "violet":
      return "ring-violet-400/40 text-violet-100";
    case "green":
      return "ring-emerald-400/40 text-emerald-100";
  }
}

export default function ContactPage() {
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
            Get In <span className="text-blue-400">Touch</span>
          </h1>

          <p className="mt-4 text-zinc-300 md:text-lg">
            Let's work together on your next project. Reach out through any of
            these platforms.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
          }}
          className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3"
        >
          {CONTACTS.map((c) => (
            <motion.a
              key={c.id}
              href={c.href}
              target={c.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={c.href.startsWith("mailto:") ? undefined : "noreferrer"}
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
              className={[
                "group relative rounded-[26px] border border-white/10 bg-white/5 p-6 shadow-soft",
                "hover:bg-white/7 transition",
                c.span === 2 ? "md:col-span-2" : "",
              ].join(" ")}
            >
              <div className="absolute right-5 top-5 text-white/40 transition group-hover:text-white/70">
                <ExternalLink className="h-5 w-5" />
              </div>
              <div
                className={[
                  "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl",
                  "bg-black/30 ring-2",
                  accentClasses(c.accent),
                ].join(" ")}
              >
                {(() => {
                  const Icon = iconFor(c.icon);
                  return <Icon className="h-7 w-7" />;
                })()}
              </div>

              <div className="mt-5 text-center">
                <div className="text-lg font-semibold text-white">{c.title}</div>
                <div className="mt-1 text-sm text-zinc-400">{c.handle}</div>
              </div>
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for new projects
          </div>
        </motion.div>
      </Container>
    </main>
  );
}