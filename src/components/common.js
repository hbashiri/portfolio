import React from "react";

// Small building blocks shared across sections.

export function SectionHeader({ number, eyebrow, title, intro, children }) {
  return (
    <div className="section-header reveal">
      <div>
        <p className="eyebrow">
          {number} · {eyebrow}
        </p>
        <h2 className="section-title">{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
      {children}
    </div>
  );
}

export function Tags({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <ul className="tags">
      {items.map((tag) => (
        <li className="tag" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function YouTube({ id, title }) {
  return (
    <div className="video">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export function Bullets({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <ul className="bullets">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
