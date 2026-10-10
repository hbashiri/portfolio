import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

const interests = [
  {
    icon: "fas fa-paint-brush",
    title: "Making things",
    text: "In my free time, I sketch, play guitar, and play games. I like to learn anything related to creating a game, so currently I'm learning 3D modeling with Blender.",
  },
  {
    icon: "fas fa-gamepad",
    title: "Playing games",
    text: "I like indie games, especially when they tell stories, and online multiplayer games that I can play with my friends.",
  },
  {
    icon: "fas fa-book-open",
    title: "Stories",
    text: "I enjoy movies across various genres and formats, but my true passion lies in anime. I also read fantasy and science fiction novels. If you know the First Law series, or your favorite anime includes \"Howl's Moving Castle\" or \"Princess Mononoke\", I would be delighted to talk about them.",
  },
];

class Sketches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      selected: 0,
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data, selected) => {
      this.setState({ detailsModalShow: true, deps: data, selected });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.sketches;
      var tiles = this.props.resumeProjects.flatMap((art) =>
        art.images.map((image, index) => (
          <button
            type="button"
            className="sketch-tile"
            key={art.title + index}
            onClick={() => detailsModalShow(art, index)}
          >
            <img src={image} alt={`${art.title} ${index + 1}`} loading="lazy" />
          </button>
        ))
      );
    }

    return (
      <section id="sketches">
        <h1 className="section-title" style={{ color: "#f4f4f4", fontSize: "300%" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="interests">
          <div className="interests-layout">
            <ul className="interests-list">
              {interests.map((interest) => (
                <li className="interest" key={interest.title}>
                  <span className="interest-icon">
                    <i className={interest.icon} />
                  </span>
                  <div>
                    <h3 className="interest-title">{interest.title}</h3>
                    <p className="interest-text">{interest.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              <h2 className="featured-tools-heading">Some of my sketches</h2>
              <div className="sketch-grid">{tiles}</div>
            </div>
          </div>
          <p className="interests-note">
            I created this portfolio with love, passion, and of course React. If you have an idea to
            improve it or find a problem, please tell me so I can make it better.
          </p>
        </div>
        <ProjectDetailsModal
          show={this.state.detailsModalShow}
          onHide={detailsModalClose}
          data={this.state.deps}
          selected={this.state.selected}
        />
      </section>
    );
  }
}

export default Sketches;
