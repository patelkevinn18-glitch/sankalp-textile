import { useRef, type ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={["reveal", isInView ? "isVisible" : "", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}


