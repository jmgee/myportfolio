import Card from "./Card";
import { Code2, Gauge, Layers, ShieldCheck, Sparkles, Workflow, Gamepad2 } from "lucide-react";

const features = [
  { icon: Gamepad2, title: "FiveM Developments", desc: "End-to-end development, maintenance, and customization—delivering scalable server packs and tailored scripts built to perform." },
];

export default function FeatureGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => (
        <Card key={f.title} className="hover:bg-white/7 transition">
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