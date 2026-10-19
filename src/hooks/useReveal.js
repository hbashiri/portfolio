import { useEffect } from "react";

const SELECTOR = ".reveal:not(.is-visible)";

// Fades in every `.reveal` element the first time it scrolls into view.
// Also picks up elements rendered later (e.g. cards re-mounted when the Work filter changes),
// so nothing is left stuck at opacity 0. Re-runs when `key` changes (e.g. on route change).
export function useReveal(key) {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      const showAll = () => document.querySelectorAll(SELECTOR).forEach((el) => el.classList.add("is-visible"));
      showAll();
      if (!("MutationObserver" in window)) return undefined;
      const mutations = new MutationObserver(showAll);
      mutations.observe(document.body, { childList: true, subtree: true });
      return () => mutations.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    const observeAll = (root) => {
      if (root.matches && root.matches(SELECTOR)) observer.observe(root);
      if (root.querySelectorAll) root.querySelectorAll(SELECTOR).forEach((el) => observer.observe(el));
    };
    observeAll(document);

    const mutations = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach((node) => node.nodeType === 1 && observeAll(node)));
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
    };
  }, [key]);
}
