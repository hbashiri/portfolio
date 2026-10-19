import React, { useState } from "react";
import Lightbox from "./Lightbox";
import { about } from "../data/portfolio";

function About() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <div className="about">
          {about.photo && (
            <div className="about__photo reveal">
              <img src={about.photo} alt="" />
            </div>
          )}
          <div className="about__text reveal">
            <p className="eyebrow">04 · About me</p>
            <h2 className="section-title">{about.heading}</h2>
            {about.paragraphs.map((paragraph) => (
              <p className="about__paragraph" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {about.sketches.length > 0 && (
          <>
            <h3 className="about__subheading reveal">From my sketchbook</h3>
            <div className="sketchbook">
              {about.sketches.map((src, i) => (
                <button
                  type="button"
                  className="sketchbook__item reveal"
                  key={src}
                  aria-label={`Open sketch ${i + 1}`}
                  onClick={() => setOpenIndex(i)}
                >
                  <img src={src} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      <Lightbox
        images={about.sketches}
        index={openIndex}
        onChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />
    </section>
  );
}

export default About;
