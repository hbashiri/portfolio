import React, { useState } from "react";
import Lightbox from "./Lightbox";
import { Tags } from "./common";
import { about } from "../data/portfolio";

function About() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <div className="about">
          <div className="about__text reveal">
            <p className="eyebrow">04 · About me</p>
            <h2 className="section-title">{about.heading}</h2>
            {about.paragraphs.map((paragraph) => (
              <p className="about__paragraph" key={paragraph}>
                {paragraph}
              </p>
            ))}

            {about.outside.length > 0 && (
              <>
                <h3 className="about__subheading">Outside work</h3>
                <dl className="outside-list">
                  {about.outside.map((item) => (
                    <div className="outside-list__row" key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </>
            )}
          </div>

          {about.skills.length > 0 && (
            <div className="skills reveal">
              <h3 className="about__subheading about__subheading--first">Skills</h3>
              {about.skills.map((group) => (
                <div className="skills__group" key={group.group}>
                  <h4 className="skills__title">{group.group}</h4>
                  <Tags items={group.items} />
                </div>
              ))}
            </div>
          )}
        </div>

        {about.sketches.length > 0 && (
          <>
            <h3 className="about__subheading about__subheading--sketchbook reveal">From my sketchbook</h3>
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
