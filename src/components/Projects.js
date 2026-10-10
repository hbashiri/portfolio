import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

// Store name shown on the card's external link, derived from the project URL.
function storeName(url) {
  if (url.includes("play.google.com")) return "Google Play";
  if (url.includes("itch.io")) return "itch.io";
  return "Visit";
}

// Descriptions are written as lines (some starting with "•" or "o" bullets); flatten them for the card preview.
function summary(description) {
  return description
    .split("\n")
    .map((line) => line.replace(/^\s*(•|o)\s+/, "").trim())
    .filter((line) => line)
    .join(" · ");
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map((project) => (
        <article
          className="project-card"
          key={project.title}
          role="button"
          tabIndex={0}
          onClick={() => detailsModalShow(project)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              detailsModalShow(project);
            }
          }}
        >
          <div className="project-card-thumb">
            <img src={project.thumbnail} alt={project.title} />
            {project.youtube && (
              <span className="project-card-video" title="Includes video">
                <i className="fas fa-play" />
              </span>
            )}
          </div>
          <div className="project-card-body">
            <span className="project-card-year">{project.startDate}</span>
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-summary">{summary(project.description)}</p>
            <div className="project-card-actions">
              <span className="project-card-more">
                Details <i className="fas fa-arrow-right" />
              </span>
              {project.url && (
                <a
                  className="project-card-link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  {storeName(project.url)} <i className="fas fa-external-link-alt" />
                </a>
              )}
            </div>
          </div>
        </article>
      ));
    }

    return (
      <section id="portfolio">
        <h1 className="section-title" style={{ color: "black", fontSize: "300%" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="projects-grid">{projects}</div>
        <ProjectDetailsModal
          show={this.state.detailsModalShow}
          onHide={detailsModalClose}
          data={this.state.deps}
          desc
        />
      </section>
    );
  }
}

export default Projects;
