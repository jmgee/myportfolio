"use client";

import { useMemo, useState } from "react";
import Card from "@/components/Card";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { Briefcase, Check, Info } from "lucide-react";
import { motion, type Variants } from "framer-motion";

type Track = "fivem" | "web";

type BasePlan = {
  title: string;
  subtitle: string;
  initialFee: string;
  bullets: string[];
  popular: boolean;
};

type FiveMPlan = BasePlan & {
  monthly: string;
  footerNote?: string;
};

type WebPlan = BasePlan & {
  startsAt: string;
  technologies?: string[];
};

type Plan = FiveMPlan | WebPlan;

function isWebPlan(plan: Plan): plan is WebPlan {
  return "startsAt" in plan;
}

function isFiveMPlan(plan: Plan): plan is FiveMPlan {
  return "monthly" in plan;
}

type PricingData = {
  workloadLeft: string;
  workloadValue: string;
  plans: Plan[];
  aboutTitle: string;
  aboutLeftBody: string;
  aboutLeftBody2: string;
  hiringFeeNote: string;
};

export default function PricingTabs() {
  const [track, setTrack] = useState<Track>("fivem");
  const WEB_ENABLED = true;

  const data = useMemo<PricingData>(() => {
    if (track === "fivem") {
      return {
        workloadLeft: "Current Workload",
        workloadValue: "0 Active Server",
        plans: [
          {
            title: "Basic Setup",
            subtitle: "Perfect for new servers needing essential features and support.",
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
            title: "Premium Setup",
            subtitle: "Ideal for established servers seeking comprehensive support.",
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
        aboutLeftBody:
          "My pricing reflects 4 years of active experience and a proven track record across Philippine RP servers.",
        aboutLeftBody2:
          "I deliver clean, optimized, and reliable systems backed by professional long-term support.",
        hiringFeeNote:
          "The initial hiring fee ensures commitment, protects both parties, and secures project scheduling.",
      };
    }

    return {
      workloadLeft: "Service Type",
      workloadValue: "Project-Based",
      plans: [
        {
          title: "Basic Frontend",
          subtitle: "HTML, CSS, JavaScript",
          initialFee: "₱3,000",
          startsAt: "₱6,000",
          bullets: ["Clean, responsive design", "Mobile-friendly", "Fast delivery"],
          popular: false,
        },
        {
          title: "Frontend + Backend",
          subtitle: "HTML, CSS, JavaScript, PHP",
          initialFee: "₱8,000",
          startsAt: "₱12,000",
          bullets: ["Database integration", "User authentication", "API development"],
          popular: false,
        },
        {
          title: "Advanced Frameworks",
          subtitle: "Full-stack development",
          initialFee: "₱15,000",
          startsAt: "₱25,000",
          bullets: ["Enterprise-grade solutions", "Scalable architecture", "Modern best practices"],
          technologies: ["Laravel", "React + Express", "Next.js", "Go"],
          popular: true,
        },
      ],
      aboutTitle: "Web Development",
      aboutLeftBody:
        "Project-based web development focused on performance, scalability, and clean architecture.",
      aboutLeftBody2: "Pricing varies depending on scope, integrations, and delivery timeline.",
      hiringFeeNote:
        "All web projects are quoted per scope. Final pricing is confirmed after requirement review.",
    };
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
    <motion.div className="w-full" variants={containerVariants} initial="hidden" animate="show">
      <motion.div variants={itemVariants} className="flex justify-center">
        <div className="relative inline-flex rounded-2xl border border-white/10 bg-white/5 p-1">
          <motion.div
            layoutId="pricing-tab-slider"
            className="absolute inset-y-1 rounded-xl bg-blue-500 shadow-[0_0_36px_rgba(59,130,246,0.45)]"
            style={{
              width: "50%",
              left: track === "fivem" ? "0.25rem" : "50%",
            }}
            transition={{ type: "spring", stiffness: 420, damping: 32 }}
          />

          <button
            onClick={() => setTrack("fivem")}
            className="relative z-10 px-5 py-2 text-sm font-medium text-white"
            type="button"
          >
            FiveM Development
          </button>

          <button
            onClick={() => WEB_ENABLED && setTrack("web")}
            disabled={!WEB_ENABLED}
            title={!WEB_ENABLED ? "Coming soon" : undefined}
            className={[
              "relative z-10 px-5 py-2 text-sm font-medium transition",
              WEB_ENABLED ? "text-white" : "cursor-not-allowed text-zinc-500",
            ].join(" ")}
            type="button"
          >
            Web Development
          </button>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-6 flex justify-center">
        <div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
          <Briefcase className="h-4 w-4 text-zinc-300" />
          <span className="text-zinc-400">{data.workloadLeft}</span>
          <span className="font-semibold text-white">{data.workloadValue}</span>
        </div>
      </motion.div>

      <Container>
        <motion.div
          variants={containerVariants}
          className={[
            "mt-10 grid gap-6",
            track === "fivem" ? "lg:grid-cols-2" : "lg:grid-cols-3",
          ].join(" ")}
        >
          {data.plans.map((plan) => (
            <motion.div key={plan.title} variants={itemVariants}>
              <PlanCard plan={plan} isWeb={track === "web"} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="mt-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="rounded-xl border border-white/10 bg-white/5 p-2">
                <Info className="h-5 w-5" />
              </span>
              <div className="text-lg font-semibold">{data.aboutTitle}</div>
            </div>

            <p className="text-sm text-zinc-300">{data.aboutLeftBody}</p>
            <p className="mt-2 text-sm text-zinc-300">{data.aboutLeftBody2}</p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-xs text-zinc-300">
              {data.hiringFeeNote}
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

function PlanCard({ plan, isWeb }: { plan: Plan; isWeb: boolean }) {
  const badgeText = plan.popular ? (isWeb ? "PRO" : "POPULAR") : null;

  return (
    <div
      className={[
        "rounded-[22px] border p-7 shadow-soft",
        plan.popular
          ? "border-blue-500/40 bg-gradient-to-b from-blue-500/10 to-white/5"
          : "border-white/10 bg-white/5",
      ].join(" ")}
    >
      <div className="relative">
        {badgeText && (
          <span className="absolute right-0 top-0 shrink-0 rounded-full border border-blue-500/30 bg-blue-500/20 px-2.5 py-1 text-[10px] font-semibold leading-none tracking-wide text-blue-200">
            {badgeText}
          </span>
        )}

        <div className="mx-auto min-h-[64px] px-10 text-center">
          <div className="text-xl font-semibold leading-tight">{plan.title}</div>
          <div className="mt-1 text-sm text-zinc-400">{plan.subtitle}</div>
        </div>
      </div>

      <div className="mt-6 space-y-2 text-center">
        <div className="text-sm text-zinc-400">Initial fee</div>
        <div className="text-3xl font-semibold tracking-tight">{plan.initialFee}</div>

        {isWeb && isWebPlan(plan) ? (
          <div className="text-sm text-zinc-400">
            Starts at <span className="font-semibold text-blue-400">{plan.startsAt}</span>
          </div>
        ) : isFiveMPlan(plan) ? (
          <div className="text-sm text-zinc-400">
            <span className="font-semibold text-blue-300">{plan.monthly}</span> /month
          </div>
        ) : null}
      </div>

      {isWeb && isWebPlan(plan) && plan.technologies?.length ? (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {plan.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-6 space-y-3">
        {plan.bullets.map((bullet) => (
          <div key={bullet} className="flex items-start gap-3 text-sm text-zinc-300">
            <span className="rounded-md border border-white/10 bg-white/5 p-1">
              <Check className="h-4 w-4" />
            </span>
            <span>{bullet}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Button href="/contact" variant={plan.popular ? "primary" : "secondary"} size="sm">
          Get started →
        </Button>
      </div>
    </div>
  );
}