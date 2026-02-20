interface WaveSeparatorProps {
  fromColor?: string;
  toColor?: string;
  flip?: boolean;
  className?: string;
}

export default function WaveSeparator({
  fromColor = "hsl(var(--muted))",
  toColor = "hsl(var(--background))",
  flip = false,
  className = "",
}: WaveSeparatorProps) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none ${className}`}
      style={{ height: "70px", background: toColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-full h-full"
        style={{ transform: flip ? "scaleX(-1)" : undefined }}
      >
        <path
          d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z"
          fill={fromColor}
        />
      </svg>
    </div>
  );
}
