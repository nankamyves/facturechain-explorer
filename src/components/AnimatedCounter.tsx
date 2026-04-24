import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

const AnimatedCounter = ({ target, suffix = "", prefix = "", duration = 2000, decimals }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const auto = decimals ?? (Number.isInteger(target) ? 0 : 1);
    const factor = Math.pow(10, auto);
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target * factor) / factor);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration, decimals]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString("fr-FR", { minimumFractionDigits: decimals ?? (Number.isInteger(target) ? 0 : 1), maximumFractionDigits: decimals ?? (Number.isInteger(target) ? 0 : 1) })}{suffix}
    </span>
  );
};

export default AnimatedCounter;
