import React, { useEffect, useState } from "react";
import Lightbox from "./Lightbox";
import { Tags, YouTube } from "./common";
import { projectHref, goToSection } from "../hooks/useHashRoute";
import { storeName } from "../utils/storeName";
import { games, profile } from "../data/portfolio";

function Fact({ label, children }) {
  if (!children) return null;
  return (
    <div className="fact">
      <p className="eyebrow">{label}</p>
      <p className="fact__value">{children}</p>
    </div>
  );
}

function ProjectPage({ slug }) {
  const [openIndex, setOpenIndex] = useState(null);
  const index = games.findIndex((game) => game.slug === slug);
  const game = games[index];

  useEffect(() => {
    document.title = game ? `${game.title} | ${profile.shortName}` : profile.shortName;
    return () => {
      document.title = `${profile.shortName} | Game Developer`;
    };
  }, [game]);

  if (!game) {
    return (
      <main className="project-missing container">
        <h1 className="section-title">Game not found</h1>
        <button type="button" className="button button--primary" onClick={() => goToSection("work")}>
          <i className="fas fa-arrow-left" /> All games
        </button>
      </main>
    );
  }

  const prev = games[(index - 1 + games.length) % games.length];
  const next = games[(index + 1) % games.length];

  return (
    <main className="project">
      <header className="project__hero">
        <div className="project__hero-bg" style={{ backgroundImage: `url(${game.thumbnail})` }} />
        <div className="container project__hero-inner">
          <a
            className="back-link"
            href="#/work"
            onClick={(e) => {
              e.preventDefault();
              goToSection("work");
            }}
          >
            <i className="fas fa-chevron-left" /> All games
          </a>
          <p className="eyebrow">{game.studio}</p>
          <h1 className="project__title">{game.title}</h1>
          <p className="project__genre">{game.genre}</p>
        </div>
      </header>

      <div className="container project__layout">
        <aside className="project__facts">
          <Fact label="Role">{game.role}</Fact>
          <Fact label="Year">{game.year}</Fact>
          <Fact label="Genre">{game.genre}</Fact>
          <Fact label="Available on">{game.availableOn}</Fact>
          <Tags items={game.tags} />
          {game.url && (
            <a className="button button--primary button--small" href={game.url} target="_blank" rel="noopener noreferrer">
              {storeName(game.url) === "Visit" ? "Visit" : `View on ${storeName(game.url)}`}{" "}
              <i className="fas fa-external-link-alt" />
            </a>
          )}
        </aside>

        <div className="project__main">
          {game.youtube && <YouTube id={game.youtube} title={`${game.title} video`} />}

          {game.about.length > 0 && (
            <section className="project__block">
              <h2 className="project__heading">About the game</h2>
              {game.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          )}

          {game.contributions.length > 0 && (
            <section className="project__block">
              <h2 className="project__heading">My contribution</h2>
              <ul className="bullets bullets--large">
                {game.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {game.images.length > 0 && (
            <section className="project__block">
              <h2 className="project__heading">Screenshots</h2>
              <div className="screenshots">
                {game.images.map((src, i) => (
                  <button
                    type="button"
                    className="screenshots__item"
                    key={src}
                    aria-label={`Open screenshot ${i + 1}`}
                    onClick={() => setOpenIndex(i)}
                  >
                    <img src={src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            </section>
          )}

          <nav className="pager" aria-label="More games">
            <a className="pager__link" href={projectHref(prev.slug)}>
              <span className="pager__label">
                <i className="fas fa-chevron-left" /> Previous
              </span>
              <span className="pager__title">{prev.title}</span>
            </a>
            <a className="pager__link pager__link--next" href={projectHref(next.slug)}>
              <span className="pager__label">
                Next <i className="fas fa-chevron-right" />
              </span>
              <span className="pager__title">{next.title}</span>
            </a>
          </nav>
        </div>
      </div>

      <Lightbox images={game.images} index={openIndex} onChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
    </main>
  );
}

export default ProjectPage;
