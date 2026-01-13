export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <div className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
        {eyebrow}
      </div>
      <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-zinc-300">{subtitle}</p> : null}
    </div>
  );
}