import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  disabled,
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-white/30 disabled:opacity-50 disabled:pointer-events-none",
    size === "sm" ? "h-9 px-4 text-sm" : "h-11 px-5 text-sm",
    variant === "primary" && "bg-white text-zinc-950 hover:bg-zinc-200",
    variant === "secondary" && "bg-white/10 text-white hover:bg-white/15 border border-white/10",
    variant === "ghost" && "bg-transparent text-white hover:bg-white/10"
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}