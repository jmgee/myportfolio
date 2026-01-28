"use client";

import { useMemo, useState } from "react";
import Card from "@/components/Card";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { Briefcase, Check, Info } from "lucide-react";
import { motion, type Variants } from "framer-motion";

type Track = "fivem" | "web";

export default function PricingTabs() {
  const [track, setTrack] = useState<Track>("fivem");

  const WEB_ENABLED = true; 

  const data = useMemo(() => {
    if (track === "fivem") {
      return {
        workloadLeft: "Current Workload",
        workloadValue: "0 Active Server",
        plans: [
          {
            title: "FiveM Dev Basic Setup",
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
            title: "FiveM Dev Premium Setup",
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
          "My pricing reflects 4 years of active experience and a proven track record across Philippine RP servers.",
        aboutLeftBody2:
          "I deliver clean, optimized, and reliable systems backed by professional long-term support.",
        hiringFeeNote:
          "The initial hiring fee ensures commitment, protects both parties, and secures project scheduling.",
      };
    }

    return null;
  }, [track]);

  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
  };

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
            layout
            transition={{ type: "spring", stiffness: 420, damping: 32 }}
            className="absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-xl bg-blue-500 shadow-[0_0_32px_rgba(59,130,246,0.45)]"
            style={{
              transform:
                track === "fivem"
                  ? "translateX(0%)"
                  : "translateX(100%)",
            }}
          />

          <button
            onClick={() => setTrack("fivem")}
            className="relative z-10 px-5 py-2 text-sm font-medium text-white"
          >
            FiveM Development
          </button>

          <button
            disabled
            title="Coming soon"
            className="relative z-10 px-5 py-2 text-sm font-medium text-zinc-500 cursor-not-allowed"
          >
            Web Development
          </button>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-6 flex justify-center">
        <div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
          <Briefcase className="h-4 w-4 text-zinc-300" />
          <span className="text-zinc-400">{data?.workloadLeft}</span>
          <span className="font-semibold text-white">{data?.workloadValue}</span>
        </div>
      </motion.div>

      <Container>
        <motion.div
          variants={containerVariants}
          className="mt-10 grid gap-6 lg:grid-cols-2"
        >
          {data?.plans.map((p) => (
            <motion.div key={p.title} variants={itemVariants}>
              <PlanCard {...p} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="mt-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="rounded-xl border border-white/10 bg-white/5 p-2">
                <Info className="h-5 w-5" />
              </span>
              <div className="text-lg font-semibold">{data?.aboutTitle}</div>
            </div>

            <p className="text-sm text-zinc-300">{data?.aboutLeftBody}</p>
            <p className="mt-2 text-sm text-zinc-300">{data?.aboutLeftBody2}</p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-xs text-zinc-300">
              {data?.hiringFeeNote}
            </div>

            <div className="mt-6 flex justify-end">
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
}: any) {
  return (
    <div
      className={[
        "relative rounded-[22px] border p-7 shadow-soft",
        popular
          ? "border-blue-500/40 bg-gradient-to-b from-blue-500/10 to-white/5"
          : "border-white/10 bg-white/5",
      ].join(" ")}
    >
      {popular && (
        <div className="absolute right-6 top-6 rounded-full bg-blue-500 px-3 py-1 text-[10px] font-semibold text-white">
          POPULAR
        </div>
      )}

      <div className="text-xl font-semibold">{title}</div>
      <div className="mt-1 text-sm text-zinc-400">{subtitle}</div>

      <div className="mt-6 space-y-2">
        <div className="text-sm text-zinc-400">Initial hiring fee</div>
        <div className="text-3xl font-semibold">{initialFee}</div>
        <div className="text-sm text-zinc-400">
          <span className="font-semibold text-blue-300">{monthly}</span> /month
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {bullets.map((b: string) => (
          <div key={b} className="flex items-start gap-3 text-sm text-zinc-300">
            <span className="rounded-md border border-white/10 bg-white/5 p-1">
              <Check className="h-4 w-4" />
            </span>
            {b}
          </div>
        ))}
      </div>

      {footerNote && (
        <div className="mt-6 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-4 text-xs text-amber-100">
          {footerNote}
        </div>
      )}

      <div className="mt-6">
        <Button href="/contact" variant={popular ? "primary" : "secondary"} size="sm">
          Get started →
        </Button>
      </div>
    </div>
  );
}