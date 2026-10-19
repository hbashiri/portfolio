import React from "react";
import { SectionHeader, Tags, Bullets } from "./common";
import { education, experience } from "../data/portfolio";

function Journey() {
  return (
    <section id="journey" className="section section--alt">
      <div className="container journey">
        <div className="journey__aside">
          <SectionHeader
            number="02"
            eyebrow="Journey"
            title="Where I’ve levelled up"
            intro="From a freelance puzzle game to leading a studio project — each stop added a new skill tree."
          />
          <div className="journey__education reveal">
            <h3 className="journey__subheading">Education</h3>
            {education.map((item) => (
              <div className="edu-card" key={item.degree}>
                <img className="logo-tile" src={item.logo} alt="" />
                <div>
                  <p className="edu-card__degree">{item.degree}</p>
                  <p className="edu-card__school">{item.school}</p>
                  <p className="edu-card__note">
                    {item.years}
                    {item.note && <> · {item.note}</>}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ol className="timeline">
          {experience.map((job) => (
            <li className="timeline__item reveal" key={job.company + job.dates}>
              <span className={"timeline__marker" + (job.current ? " timeline__marker--current" : "")} />
              <article className="job-card">
                <header className="job-card__header">
                  <img className="logo-tile" src={job.logo} alt="" />
                  <div className="job-card__heading">
                    <h3 className="job-card__title">{job.title}</h3>
                    <p className="job-card__company">{job.company}</p>
                  </div>
                  <p className="job-card__dates">
                    {job.current && <span className="live-dot" aria-hidden="true" />}
                    {job.dates}
                  </p>
                </header>
                <Bullets items={job.bullets} />
                <Tags items={job.tags} />
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Journey;
