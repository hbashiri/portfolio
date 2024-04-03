import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Sketches extends Component {
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
      var sectionName = this.props.resumeBasicInfo.section_name.sketches;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div >
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    style={{width: "100%", aspectRatio: 1, marginBottom: 0, paddingBottom: 0, position: 'relative', objectFit: "contain"}}
                  />
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="sketches">
        <div className="col-md-12 col-xl-12 col-lg-12">
          <h1 className="section-title" style={{ color: "#f4f4f4", fontSize: "300%" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row">
            <div className="col-md-10 col-lg-10 col-xl-3 mx-auto">
              <div className="mx-auto">{projects}</div>
            </div>
            <div
              className="col-md-10 col-lg-10 col-xl-5 mx-auto"
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
                  In my free time, I sketch, play guitar, and play games. I like indie games especially when they tell stories and online multiplier games that I could play with my friends. I like to learn anything related to creating a game so currently I’m learning 3D modeling with Blender.<br/>
                  I enjoy watching movies across various genres and formats, but my true passion lies in anime. I also read fantasy and science fiction novels. If you happen to be familiar with the First Law series or if your favorite anime includes "Howl's Moving Castle" or "Princess Mononoke," I would be delighted to engage in a conversation about them. <br/>
                  In the end, I created this portfolio with love, passion, and of course React Native. If you have an Idea to improve it or there is a problem, please tell me to make it better.

                </span>
                <p style={{ fontSize: '2.5vh' }}>
                  Here are some of my sketches.
                </p>
              </h3>
            </div>
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

export default Sketches;
