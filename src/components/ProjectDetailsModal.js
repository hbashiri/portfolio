import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { storeName } from "../utils/storeName";

// Gallery popup for projects and sketches.
// data: { title, images, youtube?, description?, url?, startDate? }; selected: index of the item to open on.
// The YouTube video (if any) comes first, followed by the images.
class ProjectDetailsModal extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.touchStartX = null;
  }

  componentDidUpdate(prevProps) {
    if (this.props.show && !prevProps.show) {
      this.setState({ index: this.props.selected || 0 });
    }
  }

  getItems() {
    const data = this.props.data || {};
    const items = (data.images || []).map((src) => ({ type: "image", src }));
    if (data.youtube) {
      items.unshift({ type: "video", id: data.youtube });
    }
    return items;
  }

  go(step, count) {
    this.setState((state) => ({ index: (state.index + step + count) % count }));
  }

  onKeyDown = (e) => {
    const count = this.getItems().length;
    if (count < 2) return;
    if (e.key === "ArrowRight") this.go(1, count);
    if (e.key === "ArrowLeft") this.go(-1, count);
  };

  onTouchStart = (e) => {
    this.touchStartX = e.touches[0].clientX;
  };

  onTouchEnd = (e) => {
    if (this.touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - this.touchStartX;
    const count = this.getItems().length;
    this.touchStartX = null;
    if (Math.abs(dx) > 40 && count > 1) this.go(dx < 0 ? 1 : -1, count);
  };

  renderItem(item) {
    if (item.type === "video") {
      return (
        <iframe
          key={item.id}
          className="gallery-video"
          src={`https://www.youtube.com/embed/${item.id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Project video"
        />
      );
    }
    return <img key={item.src} className="gallery-image" src={item.src} alt="" />;
  }

  render() {
    // Only Modal's own props go through; data/selected are for this component.
    const { data, selected, ...modalProps } = this.props;
    const project = data || {};
    const items = this.getItems();
    const index = Math.min(this.state.index, Math.max(items.length - 1, 0));
    const current = items[index];
    const paragraphs = (project.description || "")
      .split("\n")
      .map((line) => line.trim().replace(/^o\s+/, "• "))
      .filter((line) => line);

    return (
      <Modal
        {...modalProps}
        size="xl"
        fullscreen="md-down"
        centered
        className="gallery-modal"
        aria-label={project.title}
        onKeyDown={this.onKeyDown}
      >
        <div
          className="gallery-stage"
          onTouchStart={this.onTouchStart}
          onTouchEnd={this.onTouchEnd}
        >
          {current && this.renderItem(current)}
          {items.length > 1 && (
            <>
              <button
                type="button"
                className="gallery-nav gallery-nav-prev"
                aria-label="Previous"
                onClick={() => this.go(-1, items.length)}
              >
                <i className="fas fa-chevron-left" />
              </button>
              <button
                type="button"
                className="gallery-nav gallery-nav-next"
                aria-label="Next"
                onClick={() => this.go(1, items.length)}
              >
                <i className="fas fa-chevron-right" />
              </button>
            </>
          )}
          <button
            type="button"
            className="gallery-close"
            aria-label="Close"
            onClick={this.props.onHide}
          >
            <i className="fas fa-times" />
          </button>
        </div>

        {items.length > 1 && (
          <div className="gallery-thumbs">
            {items.map((item, i) => (
              <button
                type="button"
                key={item.type === "video" ? "video" : i}
                className={"gallery-thumb" + (i === index ? " active" : "")}
                aria-label={`Show item ${i + 1}`}
                onClick={() => this.setState({ index: i })}
              >
                {item.type === "video" ? (
                  <>
                    <img src={`https://img.youtube.com/vi/${item.id}/mqdefault.jpg`} alt="" />
                    <span className="gallery-thumb-play">
                      <i className="fas fa-play" />
                    </span>
                  </>
                ) : (
                  <img src={item.src} alt="" />
                )}
              </button>
            ))}
            <span className="gallery-counter">
              {index + 1} / {items.length}
            </span>
          </div>
        )}

        <div className="gallery-info">
          <div className="gallery-info-header">
            <div>
              {project.startDate && <span className="project-card-year">{project.startDate}</span>}
              <h2 className="gallery-title">{project.title}</h2>
            </div>
            {project.url && (
              <a
                className="gallery-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {storeName(project.url)} <i className="fas fa-external-link-alt" />
              </a>
            )}
          </div>
          {paragraphs.length > 0 && (
            <div className="gallery-description">
              {paragraphs.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          )}
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
