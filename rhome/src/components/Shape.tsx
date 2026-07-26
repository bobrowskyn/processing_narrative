export type ShapeKind =
  | "circle"
  | "arch"
  | "leaf"
  | "wave"
  | "diamond"
  | "petal";

const radii: Record<ShapeKind, string> = {
  circle: "rounded-full",
  arch: "rounded-t-full",
  leaf: "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
  wave: "rounded-[40%_60%_60%_40%/50%_60%_40%_50%] rotate-6",
  diamond: "rounded-3xl rotate-45",
  petal: "rounded-[70%_30%_50%_50%/40%_60%_40%_60%] -rotate-3",
};

const tones: Record<ShapeKind, string> = {
  circle: "from-rhone-300 to-rhone-600",
  arch: "from-rhone-200 to-rhone-500",
  leaf: "from-rhone-400 to-rhone-700",
  wave: "from-rhone-300 to-rhone-500",
  diamond: "from-rhone-500 to-rhone-800",
  petal: "from-rhone-200 to-rhone-400",
};

export default function Shape({
  kind,
  className = "",
}: {
  kind: ShapeKind;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${tones[kind]} ${radii[kind]} ${className}`}
    >
      <div className="absolute -right-4 -top-4 h-1/2 w-1/2 rounded-full bg-white/25 blur-xl" />
      <div className="absolute -bottom-6 -left-6 h-2/3 w-2/3 rounded-full bg-rhone-900/10 blur-2xl" />
    </div>
  );
}
