import React from "react";
import "../css/Banner.css";

import sky from "../assets/images/banner/sky.gif";
import foreground from "../assets/images/banner/rebel_forground.gif";
import bCloud1 from "../assets/images/banner/b_cload1.png";
import bCloud2 from "../assets/images/banner/b_cload2.png";
import bCloud3 from "../assets/images/banner/b_cload3.png";
import fCloud1 from "../assets/images/banner/f_cload1.png";
import fCloud2 from "../assets/images/banner/f_cload2.png";
import fCloud3 from "../assets/images/banner/f_cload3.png";

// Back-to-front cloud layers; each index has its own drift speed in Banner.css.
// `depth` drives the vertical parallax (see Banner.css): low depth = far away, sinks fastest on scroll.
const clouds = [
  { src: bCloud1, depth: 0.15 },
  { src: bCloud1, depth: 0.15 },
  { src: bCloud2, depth: 0.2 },
  { src: bCloud3, depth: 0.2 },
  { src: fCloud1, depth: 0.45 },
  { src: fCloud2, depth: 0.45 },
  { src: fCloud3, depth: 0.5 },
  { src: fCloud2, depth: 0.5 },
];

// The pixel-art scene from Rebel. Every layer is the same 3.2:1 image stretched to fill the scene,
// so the whole sky (moon included) is always visible; the scene's height follows its width.
// When the parent sets `--scroll`, the sky and clouds sink behind the ground as the page scrolls.
function Banner() {
  return (
    <div className="banner" aria-hidden="true">
      <img className="banner__layer" style={{ "--depth": 0.06 }} src={sky} alt="" />
      {clouds.map((cloud, i) => (
        <div className="banner__layer banner__clip" style={{ "--depth": cloud.depth }} key={i}>
          <img className={`banner__cloud cloud${i}`} src={cloud.src} alt="" />
        </div>
      ))}
      <img className="banner__layer" style={{ "--depth": 0.8 }} src={foreground} alt="" />
    </div>
  );
}

export default Banner;
