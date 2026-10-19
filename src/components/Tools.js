import React from "react";
import { SectionHeader, Tags, Bullets, YouTube } from "./common";
import { tools, articles } from "../data/portfolio";

function Tools() {
  const hasArticles = articles.length > 0;
  return (
    <section id="tools" className="section">
      <div className="container">
        <SectionHeader
          number="03"
          eyebrow={hasArticles ? "Tools & writing" : "Tools"}
          title={hasArticles ? "Tools I build, things I write" : "Tools I build"}
          intro="Editors that let designers and writers move without waiting on code."
        />

        <div className="tool-list">
          {tools.map((tool) => (
            <article className="tool-card reveal" key={tool.title}>
              <div className="tool-card__media">
                <YouTube id={tool.youtube} title={tool.title} />
              </div>
              <div className="tool-card__body">
                <p className="eyebrow">{tool.eyebrow}</p>
                <h3 className="tool-card__title">{tool.title}</h3>
                <p className="tool-card__description">{tool.description}</p>
                <Bullets items={tool.bullets} />
                <Tags items={tool.tags} />
              </div>
            </article>
          ))}
        </div>

        {hasArticles && (
          <div className="article-grid">
            {articles.map((article) => (
              <a className="article-card reveal" key={article.url} href={article.url} target="_blank" rel="noopener noreferrer">
                {article.image && <img className="article-card__image" src={article.image} alt="" loading="lazy" />}
                <div className="article-card__body">
                  <p className="article-card__meta">
                    <i className="fab fa-medium-m" /> Medium · {article.date}
                  </p>
                  <h3 className="article-card__title">{article.title}</h3>
                  <p className="article-card__summary">{article.summary}</p>
                  <span className="text-link">
                    Read article <i className="fas fa-external-link-alt" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Tools;
