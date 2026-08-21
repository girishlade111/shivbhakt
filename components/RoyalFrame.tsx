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
      className={`relative overflow-hidden rounded-xl border-2 border-brightgold/40 bg-white/5 p-2 shadow-[0_0_20px_rgba(255,215,0,0.15)] backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}
