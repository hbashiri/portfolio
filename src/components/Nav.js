import React, { useEffect, useState } from "react";
import { goToSection } from "../hooks/useHashRoute";
import { useActiveSection } from "../hooks/useActiveSection";
import { profile } from "../data/portfolio";

const links = [
  { id: "work", label: "Work" },
  { id: "journey", label: "Journey" },
  { id: "tools", label: "Tools" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];
const sectionIds = links.map((link) => link.id);

function Nav({ isHome }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds, isHome);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    goToSection(id);
  };

  return (
    <header className={"nav" + (scrolled || open ? " nav--solid" : "")}>
      <div className="nav__inner">
        <a href="#/" className="nav__home" aria-label="Home" onClick={go("home")}>
          <i className="fas fa-home" />
        </a>
        <nav className={"nav__links" + (open ? " nav__links--open" : "")} aria-label="Main">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#/${link.id}`}
              className={"nav__link" + (active === link.id ? " nav__link--active" : "")}
              onClick={go(link.id)}
            >
              {link.label}
            </a>
          ))}
          {profile.cv && (
            <a
              className="nav__cv"
              href={`${process.env.PUBLIC_URL}/${profile.cv}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-download" /> CV
            </a>
          )}
        </nav>
        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <i className={open ? "fas fa-times" : "fas fa-bars"} />
        </button>
      </div>
    </header>
  );
}

export default Nav;
