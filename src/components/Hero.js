import React, { useEffect, useRef, useState } from "react";
import Banner from "./Banner";
import { goToSection } from "../hooks/useHashRoute";
import { profile } from "../data/portfolio";

// Types each title out, pauses, deletes it, then moves to the next one.
function useTypedTitles(titles) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = titles[index % titles.length];
    let delay = deleting ? 45 : 90;
    if (!deleting && text === full) delay = 1600;
    if (deleting && text === "") delay = 300;

    const timer = setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(full.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, titles]);

  return text;
}

// Publishes the scroll position as `--scroll` on the given element (once per frame) for the
// banner's CSS parallax. Stops changing once the element has scrolled out of view.
function useScrollVar(ref) {
  useEffect(() => {
    const el = ref.current;
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!el || reduceMotion) return undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      el.style.setProperty("--scroll", Math.min(window.scrollY, el.offsetHeight));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ref]);
}

// Pixel stars scattered over the night sky above the scene. The positions come from a fixed
// pattern rather than Math.random so they stay put between renders.
const stars = Array.from({ length: 46 }, (_, i) => ({
  left: `${(i * 37.3) % 100}%`,
  top: `${(i * 23.7 + (i % 3) * 11) % 100}%`,
  width: i % 5 === 0 ? 3 : 2,
  height: i % 5 === 0 ? 3 : 2,
  animationDelay: `${((i * 0.6) % 3.6).toFixed(1)}s`,
}));

function Hero() {
  const typed = useTypedTitles(profile.titles);
  const linkedin = profile.socials.find((s) => s.name === "LinkedIn");
  const heroRef = useRef(null);
  useScrollVar(heroRef);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero__stars" aria-hidden="true">
        {stars.map((star, i) => (
          <span key={i} style={star} />
        ))}
      </div>
      <div className="hero__content container">
        <div className="hero__aside">
          <img className="hero__avatar" src={profile.avatar} alt={profile.name} />
          {profile.location && (
            <p className="hero__location">
              <i className="fas fa-map-marker-alt" /> Based in {profile.location}
            </p>
          )}
          <div className="hero__socials">
            {linkedin && (
              <a
                className="hero__link"
                href={linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <i className={linkedin.icon} />
              </a>
            )}
            <a className="hero__link" href={`mailto:${profile.email}`} aria-label="Email" title={profile.email}>
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
        <div className="hero__text">
          <h1 className="hero__title">{profile.greeting}</h1>
          <p className="hero__typed" aria-label={profile.titles.join(", ")}>
            <span aria-hidden="true">{typed}</span>
            <span className="hero__caret" aria-hidden="true" />
          </p>
          {profile.bio.map((paragraph) => (
            <p className="hero__bio" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="hero__scene">
        <Banner />
      </div>
      <button
        type="button"
        className="hero__scroll"
        aria-label="Scroll to next section"
        onClick={() => goToSection("now")}
      >
        <i className="fas fa-arrow-down" />
      </button>
    </section>
  );
}

export default Hero;
