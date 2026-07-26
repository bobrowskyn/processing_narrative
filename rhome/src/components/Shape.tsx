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
  circle: "from-rhome-300 to-rhome-600",
  arch: "from-rhome-200 to-rhome-500",
  leaf: "from-rhome-400 to-rhome-700",
  wave: "from-rhome-300 to-rhome-500",
  diamond: "from-rhome-500 to-rhome-800",
  petal: "from-rhome-200 to-rhome-400",
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
      <div className="absolute -bottom-6 -left-6 h-2/3 w-2/3 rounded-full bg-rhome-900/10 blur-2xl" />
    </div>
  );
}
