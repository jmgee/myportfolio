import Card from "./Card";
import type { LucideIcon } from "lucide-react";
import { Gamepad2, Globe } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    icon: Gamepad2,
    title: "FiveM Developments",
    desc: "End-to-end development, maintenance, and customization—delivering scalable server packs and tailored scripts built to perform.",
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Modern, responsive web solutions designed for performance, branding, and scalability—built to support your community and business growth.",
  },
];

export default function FeatureGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => (
        <Card key={f.title} className="transition hover:bg-white/[0.07]">
          <div className="flex items-start gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-2">
              <f.icon className="h-5 w-5 text-zinc-100" />
            </div>
            <div>
              <div className="text-lg font-semibold">{f.title}</div>
              <div className="mt-1 text-sm text-zinc-300">{f.desc}</div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}