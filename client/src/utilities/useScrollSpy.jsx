import { useEffect, useState } from "react";

export default function useScrollSpy(ids, options = {}) {
  const [activeId, setActiveId] = useState(ids?.[0] ?? "");

  useEffect(() => {
    if (!ids || ids.length === 0) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      {
        root: null,
        threshold: options.threshold ?? [0.25, 0.4, 0.6],
        rootMargin: options.rootMargin ?? "0px 0px -25% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids.join("|")]);

  return activeId;
}
