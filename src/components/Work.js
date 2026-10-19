import React, { useState } from "react";
import { SectionHeader, Tags } from "./common";
import { projectHref } from "../hooks/useHashRoute";
import { games } from "../data/portfolio";

const filters = [
  { id: "all", label: "All" },
  { id: "studio", label: "Studio" },
  { id: "indie", label: "Indie & jams" },
];

export function GameCard({ game }) {
  return (
    <a className="game-card reveal" href={projectHref(game.slug)}>
      <div className={"game-card__media game-card__media--" + game.thumbFit}>
        <div className="game-card__blur" style={{ backgroundImage: `url(${game.thumbnail})` }} />
        <img src={game.thumbnail} alt="" loading="lazy" />
        {game.youtube && (
          <span className="game-card__badge">
            <i className="fas fa-play" /> Video
          </span>
        )}
      </div>
      <div className="game-card__body">
        <p className="game-card__meta">
          <span>{game.year}</span>
          <span>{game.studio}</span>
        </p>
        <h3 className="game-card__title">{game.title}</h3>
        <p className="game-card__genre">{game.genre}</p>
        <Tags items={game.availableOn ? [...game.tags, game.availableOn] : game.tags} />
      </div>
    </a>
  );
}

function Work() {
  const [filter, setFilter] = useState("all");
  const visible = games.filter((game) => filter === "all" || game.category === filter);

  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHeader
          number="01"
          eyebrow="Selected work"
          title="Games I’ve built"
          intro="Studio titles and the indie projects I make for fun. Open a game for videos, screenshots and what I did on it."
        >
          <div className="filter" role="tablist" aria-label="Filter games">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                className={"filter__button" + (filter === f.id ? " filter__button--active" : "")}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </SectionHeader>
        <div className="game-grid">
          {visible.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
