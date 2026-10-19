import React from "react";
import { SectionHeader, Tags, Bullets, YouTube } from "./common";
import { showcases, articles } from "../data/portfolio";

function GroupHeader({ icon, title, count }) {
  return (
    <div className="showcase-group__header reveal">
      <h3 className="showcase-group__title">
        <i className={icon} aria-hidden="true" /> {title}
      </h3>
      <span className="showcase-group__count">{String(count).padStart(2, "0")}</span>
    </div>
  );
}

function VideoShowcase({ item }) {
  return (
    <article className="tool-card reveal">
      <div className="tool-card__media">
        <YouTube id={item.youtube} title={item.title} />
      </div>
      <div className="tool-card__body">
        <p className="eyebrow">{item.eyebrow}</p>
        <h4 className="tool-card__title">{item.title}</h4>
        <p className="tool-card__description">{item.description}</p>
        <Bullets items={item.bullets} />
        <Tags items={item.tags} />
      </div>
    </article>
  );
}

function CompactShowcase({ item }) {
  return (
    <article className="mini-card reveal">
      <span className="mini-card__icon" aria-hidden="true">
        <i className={item.icon || "fas fa-cube"} />
      </span>
      <p className="eyebrow">{item.eyebrow}</p>
      <h4 className="mini-card__title">{item.title}</h4>
      <p className="mini-card__description">{item.description}</p>
      <Tags items={item.tags} />
    </article>
  );
}

function ShowcaseGroup({ icon, title, items }) {
  if (items.length === 0) return null;
  const videos = items.filter((item) => item.youtube);
  const cards = items.filter((item) => !item.youtube);
  return (
    <div className="showcase-group">
      <GroupHeader icon={icon} title={title} count={items.length} />
      <div className="tool-list">
        {videos.map((item) => (
          <VideoShowcase key={item.title} item={item} />
        ))}
      </div>
      {cards.length > 0 && (
        <div className="mini-grid">
          {cards.map((item) => (
            <CompactShowcase key={item.title} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

function Tools() {
  return (
    <section id="tools" className="section">
      <div className="container">
        <SectionHeader
          number="03"
          eyebrow="Tools, features & writing"
          title="Tools I build, features I ship, things I write"
          intro="Editors that let designers move without waiting on code, the systems behind the games, and write-ups of how they were built."
        />

        <ShowcaseGroup icon="fas fa-tools" title="Tools" items={showcases.tools} />
        <ShowcaseGroup icon="fas fa-puzzle-piece" title="Features" items={showcases.features} />

        {articles.length > 0 && (
          <div className="showcase-group">
            <GroupHeader icon="fas fa-pen-nib" title="Writing" count={articles.length} />
            <div className="article-grid">
              {articles.map((article) => (
                <a
                  className="article-card reveal"
                  key={article.url}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.image && (
                    <div className="article-card__image">
                      <img src={article.image} alt="" loading="lazy" />
                    </div>
                  )}
                  <div className="article-card__body">
                    <p className="article-card__meta">
                      <i className="fab fa-medium-m" /> Medium · {article.date}
                      {article.readTime && <> · {article.readTime}</>}
                    </p>
                    <h4 className="article-card__title">{article.title}</h4>
                    <p className="article-card__summary">{article.summary}</p>
                    <span className="text-link">
                      Read article <i className="fas fa-external-link-alt" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Tools;
