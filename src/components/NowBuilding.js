import React from "react";
import { nowBuilding } from "../data/portfolio";

// Full-bleed key art with the text column on the left, faded in by gradients.
function NowBuilding() {
  const project = nowBuilding;
  return (
    <section id="now" className="now" aria-labelledby="now-title">
      {/* Without dedicated key art, the banner (which has the logo baked in) sits on the right only. */}
      <div className={"now__art" + (project.background ? "" : " now__art--banner")} aria-hidden="true">
        <img src={project.background || project.image} alt="" />
      </div>
      <div className="container">
        <div className="now__content reveal">
          <p className="eyebrow">{project.eyebrow}</p>
          <h2 id="now-title" className="now__title">
            {project.logo ? <img className="now__logo" src={project.logo} alt={project.title} /> : project.title}
          </h2>
          {project.meta.length > 0 && (
            <ul className="now__meta">
              {project.meta.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {project.description.map((paragraph) => (
            <p className="now__description" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <div className="button-row">
            {project.steam && (
              <a className="button button--primary" href={project.steam} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-steam" /> Wishlist on Steam
              </a>
            )}
            {project.youtube && (
              <a
                className={"button " + (project.steam ? "button--ghost" : "button--primary")}
                href={`https://www.youtube.com/watch?v=${project.youtube}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" /> Watch trailer
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NowBuilding;
