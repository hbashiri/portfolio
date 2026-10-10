import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

// Featured project section: clickable thumbnail (opens the gallery modal), a description,
// and a list of sub-projects shown as embedded YouTube videos.
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
        if (this.props.project) {
            var project = this.props.project;
            var mainImage =
                <div
                    className="col-sm-12"
                    style={{ cursor: "pointer" }}
                >
                    <span className="portfolio-item d-block">
                        <div className="foto" onClick={() => detailsModalShow(project)}>
                            <div >
                                <img
                                  src={project.thumbnail}
                                  alt="projectImages"
                                  style={{width: "100%", aspectRatio: 1, marginBottom: 0, paddingBottom: 0, position: 'relative', objectFit: "contain"}}
                                />
                                <br />
                                <p className="project-title-settings mt-3">
                                    {project.title}
                                </p>
                            </div>
                        </div>
                    </span>
                </div>

            var projects = project.projects.map(function (subProject) {
                return (
                    <div key={subProject.title} style={{justifyContent: "center", alignItems: "center"}}>
                        <div
                            className="row"
                            style={{marginBottom: 10, width: "100%"}}
                        >
                            <div className="col-md-3 col-lg-3 col-xl-3 col-sm-12 mx-auto">
                            <iframe
                                src={`https://www.youtube.com/embed/${subProject.youtube}`}
                                style={{position: 'relative', objectFit: "contain", top: 0, left: 0}}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                            </div>
                            <div className="col-md-8 col-lg-8 col-xl-5 col-sm-12 mx-auto">
                                <h1 className="subsection-title">
                                    <span><b>{subProject.title}</b></span>
                                </h1>
                                <h3
                                    style={{
                                        color: "#f4f4f4",
                                        marginBottom: 5,
                                        textAlign: 'justify',
                                        textAlignLast: 'left',
                                        maxWidth: "100%",
                                        marginLeft: 10,
                                        marginRight: 10,
                                    }}
                                >
                                    <span style={{ fontSize: '2vh' }}>
                                        {subProject.description.split('\n').map((line, index) => (
                                            <span key={index}>
                                                {line}<br />
                                            </span>
                                        ))}
                                    </span>
                                </h3>
                            </div>
                        </div>
                        <div style={{margin: 10, height: 3, backgroundColor: "#F1FAEE"}}/>
                    </div>
                );
            });
        }
        return (
            <section id={this.props.sectionId}>
                <div className="col-md-12 col-xl-12 col-lg-12">
                    <h1 className="section-title" style={{ color: "#f4f4f4", fontSize: "300%" }}>
                        <span>{this.props.sectionName}</span>
                    </h1>
                    <div className="row col-md-10 col-lg-10 col-xl-10 col-sm-12 mx-auto">
                        <div className="col-md-10 col-lg-10 col-xl-3 mx-auto">
                            <div className="mx-auto">{mainImage}</div>
                        </div>
                        <div
                            className="col-md-8 col-lg-8 col-xl-5 col-sm-12 mx-auto"
                            style={{display: 'flex', alignItems: 'center'}}
                        >
                            <h3
                                style={{
                                    color: "#f4f4f4",
                                    marginBottom: 20,
                                    textAlign: 'justify',
                                    textAlignLast: 'left',
                                    maxWidth: "100%",
                                    marginLeft: 10,
                                    marginRight: 10,
                                }}
                            >
                            <span style={{ fontSize: '2.5vh' }}>
                                {project && project.des}
                            </span>
                            </h3>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="col-md-10 col-lg-10 col-xl-10 col-sm-12 mx-auto">{projects}</div>
                    </div>
                    <ProjectDetailsModal
                        show={this.state.detailsModalShow}
                        onHide={detailsModalClose}
                        data={this.state.deps}
                    />
                </div>
            </section>
        );
    }
}

export default FeaturedProject;
