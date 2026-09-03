import { useState, useEffect, useCallback } from "react";

export function useCounter(target: number, duration: number = 2000, enabled: boolean = false) {
  const [count, setCount] = useState(0);

  const startCounting = useCallback(() => {
    if (!enabled) return;
    const startTime = Date.now();
    const step = target / (duration / 16);

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, duration, enabled]);

  useEffect(() => {
    if (enabled) startCounting();
  }, [enabled, startCounting]);

  return count;
}
