import { useEffect, useState } from "react";

// Minimal hash router: "#/projects/<slug>" is a game page, anything else is the home page.
// Hash routing keeps deep links working on GitHub Pages without a server-side fallback.
function parse(hash) {
  const match = hash.match(/^#\/projects\/([\w-]+)/);
  return match ? { page: "project", slug: match[1] } : { page: "home" };
}

export function useHashRoute() {
  const [route, setRoute] = useState(() => parse(window.location.hash));

  useEffect(() => {
    const onChange = () => setRoute(parse(window.location.hash));
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}

export function projectHref(slug) {
  return `#/projects/${slug}`;
}

// Scroll to a home-page section, switching back to the home page first if needed.
export function goToSection(id) {
  const scroll = () => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  if (parse(window.location.hash).page === "home") {
    scroll();
  } else {
    window.location.hash = "#/";
    // Wait for the home page to render before scrolling.
    setTimeout(scroll, 60);
  }
}
