import React, { useState } from "react";
import { profile } from "../data/portfolio";

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <footer id="contact" className="contact">
      <div className="container">
        <div className="contact__card reveal">
          <p className="eyebrow">05 · Contact</p>
          <h2 className="contact__title">
            Let’s make something <span className="accent">fun</span>.
          </h2>
          <p className="contact__intro">
            Open to game developer roles and interesting collaborations. The fastest way to reach me is email.
          </p>
          <div className="button-row button-row--center">
            <a className="button button--primary" href={`mailto:${profile.email}`}>
              <i className="fas fa-envelope" /> {profile.email}
            </a>
            <button type="button" className="button button--ghost" onClick={copyEmail}>
              <i className={copied ? "fas fa-check" : "far fa-copy"} /> {copied ? "Copied" : "Copy email"}
            </button>
          </div>
          <div className="contact__socials">
            {profile.socials.map((social) => (
              <a
                key={social.name}
                className="icon-button"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <i className={social.icon} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer">
          <p>
            © {new Date().getFullYear()} {profile.shortName}
          </p>
          {profile.footerNote && (
            <p>
              {profile.location && (
                <>
                  <i className="fas fa-map-marker-alt" /> {profile.location} ·{" "}
                </>
              )}
              {profile.footerNote} <em>{profile.footerNoteGame}</em>
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Contact;
