import type { ReactNode } from "react";

interface RoyalFrameProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export default function RoyalFrame({
  children,
  className = "",
}: RoyalFrameProps) {
  return (
    <div
      className={`rounded-2xl border-2 border-brightgold/30 bg-white/5 p-2 shadow-[0_0_15px_rgba(255,215,0,0.1)] backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}
