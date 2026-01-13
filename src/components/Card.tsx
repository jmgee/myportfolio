import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-[22px] border border-white/10 bg-white/5 p-6 shadow-soft", className)}>
      {children}
    </div>
  );
}