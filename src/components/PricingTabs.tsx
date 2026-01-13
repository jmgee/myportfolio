"use client";

import { useMemo, useState } from "react";
import Card from "@/components/Card";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { Briefcase, Check, Info } from "lucide-react";
import { motion, type Variants } from "framer-motion";

type Track = "fivem";

export default function PricingTabs() {
  const [track] = useState<Track>("fivem");

  const data = useMemo(() => {
    return {
      workloadLeft: "Current Workload",
      workloadValue: "0 Active Server",
      plans: [
        {
          title: "Semi-Serious RP Setup",
          subtitle: "Perfect for growing RP communities.",
          initialFee: "₱5,000",
          monthly: "₱3,000",
          bullets: [
            "Maintenance & ongoing support",
            "Minor updates & bug fixes",
            "Performance optimization",
          ],
          footerNote: "Excludes major custom script creations",
          popular: false,
        },
        {
          title: "Barilan RP Setup",
          subtitle: "Perfect for PVP Style RP Servers.",
          initialFee: "₱10,000",
          monthly: "₱5,000",
          bullets: [
            "Full maintenance & optimization",
            "Minor to mid custom script works",
            "Implementation of new ideas",
            "Stability checks & continuous improvements",
          ],
          footerNote:
            "Ongoing support includes stability checks, performance optimization, and continuous improvements.",
          popular: true,
        },
      ],
      aboutTitle: "About My Work",
      aboutLeftTitle: "FiveM Development",
      aboutLeftBody:
        "My pricing reflects 4 years of active experience (since March 2022) and a proven track record across multiple Philippine RP servers from semi-serious projects.",
      aboutLeftBody2:
        "I deliver clean, optimized, and reliable systems backed by a professional approach to maintenance, stability, and long-term growth.",
      hiringFeeNote:
        "About the Initial Hiring Fee: The initial hiring fee is a professional security measure, ensuring commitment and fairness for both sides. It prevents incomplete transactions or unpaid work and helps every project start with trust and accountability.",
    };
  }, [track]);

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1], 
      },
    },
  };

  return (
    <motion.div
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div
        variants={itemVariants}
        className="mx-auto inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200"
      >
        FiveM Development
      </motion.div>

      <motion.div variants={itemVariants} className="mt-6 flex justify-center">
        <div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
          <div className="flex items-center gap-2 text-zinc-300">
            <Briefcase className="h-4 w-4" />
            <span className="text-zinc-400">{data.workloadLeft}</span>
            <span className="font-semibold text-white">{data.workloadValue}</span>
          </div>
        </div>
      </motion.div>

      <Container>
        <motion.div
          variants={containerVariants}
          className="mt-10 grid gap-6 lg:grid-cols-2"
        >
          {data.plans.map((p) => (
            <motion.div key={p.title} variants={itemVariants}>
              <PlanCard {...p} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="mt-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-100">
                <Info className="h-5 w-5" />
              </span>
              <div className="text-lg font-semibold">{data.aboutTitle}</div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-3 md:col-span-2">
                <div className="text-sm font-semibold text-zinc-200">
                  {data.aboutLeftTitle}
                </div>
                <p className="text-sm text-zinc-300">{data.aboutLeftBody}</p>
                <p className="text-sm text-zinc-300">{data.aboutLeftBody2}</p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs text-zinc-300">{data.hiringFeeNote}</div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs text-zinc-400">
                Rates are indicative and may vary depending on scope, assets, and timeline.
              </div>

              <Button href="/contact" variant="primary" size="sm">
                Request a quote
              </Button>
            </div>
          </Card>
        </motion.div>
      </Container>
    </motion.div>
  );
}

function PlanCard({
  title,
  subtitle,
  initialFee,
  monthly,
  bullets,
  footerNote,
  popular,
}: {
  title: string;
  subtitle: string;
  initialFee: string;
  monthly: string;
  bullets: string[];
  footerNote: string;
  popular: boolean;
}) {
  return (
    <div
      className={[
        "relative rounded-[22px] border p-7 shadow-soft",
        popular
          ? "border-blue-500/40 bg-gradient-to-b from-blue-500/10 to-white/5"
          : "border-white/10 bg-white/5",
      ].join(" ")}
    >
      {popular ? (
        <div className="absolute right-6 top-6 rounded-full bg-blue-500/20 px-3 py-1 text-[10px] font-semibold tracking-wide text-blue-200 border border-blue-500/30">
          POPULAR
        </div>
      ) : null}

      <div className="text-xl font-semibold">{title}</div>
      <div className="mt-1 text-sm text-zinc-400">{subtitle}</div>

      <div className="mt-6 space-y-2">
        <div className="text-sm text-zinc-400">Initial hiring fee</div>
        <div className="text-3xl font-semibold">{initialFee}</div>
        <div className="text-sm text-zinc-400">
          <span className="text-blue-300 font-semibold">{monthly}</span> /month
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {bullets.map((b) => (
          <div key={b} className="flex items-start gap-3 text-sm text-zinc-300">
            <span className="mt-0.5 rounded-md border border-white/10 bg-white/5 p-1">
              <Check className="h-4 w-4" />
            </span>
            <span>{b}</span>
          </div>
        ))}
      </div>

      <div
        className={[
          "mt-7 rounded-2xl border p-4 text-xs",
          popular
            ? "border-blue-500/30 bg-blue-500/10 text-zinc-200"
            : "border-amber-500/20 bg-amber-500/10 text-amber-100",
        ].join(" ")}
      >
        {footerNote}
      </div>

      <div className="mt-6">
        <Button
          href="/contact"
          variant={popular ? "primary" : "secondary"}
          size="sm"
        >
          <span className="inline-flex items-center gap-2">
            <span>Get started</span>
            <span aria-hidden>→</span>
          </span>
        </Button>
      </div>
    </div>
  );
}