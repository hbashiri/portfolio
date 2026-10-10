import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i)
      {
        var mainTech = work.mainTech.map((technology, i) => (
          <span className="journey-tag" key={i}>{technology}</span>
        ));
        var details = (work.technologies || []).map((detail, i) => (
          <div key={i}>{detail}</div>
        ));
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element-work"
            dateClassName="element-date"
            date={work.years}
            icon={<img src={work.companyIcon} alt={work.company} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 5 }} />}
            key={i}
          >
            <h3 className="journey-title">{work.title}</h3>
            <h4 className="journey-company">{work.company}</h4>
            <div className="journey-tags">{mainTech}</div>
            {details.length > 0 && <div className="journey-details">{details}</div>}
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black", fontSize: "300%" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline
              lineColor= '#1d3a45'
          >
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#1d3a45",
                color: "#e9c46a",
                boxShadow: "0 0 0 4px #e9c46a",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
