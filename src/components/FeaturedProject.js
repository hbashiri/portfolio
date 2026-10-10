import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

// Featured project section: a hero (thumbnail that opens the gallery modal + description),
// followed by cards for the tools built for the project, each with an embedded YouTube video.
class FeaturedProject extends Component {
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
        var project = this.props.project;
        if (project) {
            var tools = project.projects.map((tool) => (
                <article className="tool-card" key={tool.title}>
                    <div className="tool-video">
                        <iframe
                            src={`https://www.youtube.com/embed/${tool.youtube}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={tool.title}
                        />
                    </div>
                    <div className="tool-body">
                        <h3 className="tool-title">{tool.title}</h3>
                        <div className="tool-description">
                            {tool.description.split('\n').filter((line) => line.trim()).map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                    </div>
                </article>
            ));
        }
        return (
            <section id={this.props.sectionId}>
                <h1 className="section-title" style={{ color: "#f4f4f4", fontSize: "300%" }}>
                    <span>{this.props.sectionName}</span>
                </h1>
                {project && (
                    <div className="featured">
                        <div className="featured-hero">
                            <button
                                type="button"
                                className="featured-thumb"
                                onClick={() => detailsModalShow(project)}
                            >
                                <img src={project.thumbnail} alt={project.title} />
                                <span className="featured-thumb-label">
                                    <i className="fas fa-images" /> View gallery
                                </span>
                            </button>
                            <p className="featured-description">{project.des}</p>
                        </div>
                        {tools.length > 0 && (
                            <div className="featured-tools">
                                <h2 className="featured-tools-heading">Tools I built</h2>
                                <div className="featured-tools-grid">{tools}</div>
                            </div>
                        )}
                    </div>
                )}
                <ProjectDetailsModal
                    show={this.state.detailsModalShow}
                    onHide={detailsModalClose}
                    data={this.state.deps}
                />
            </section>
        );
    }
}

export default FeaturedProject;
