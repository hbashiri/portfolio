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
const clouds = [bCloud1, bCloud1, bCloud2, bCloud3, fCloud1, fCloud2, fCloud3, fCloud2];

// The pixel-art scene from Rebel. Every layer is the same 3.2:1 image stretched to fill the scene,
// so the whole sky (moon included) is always visible; the scene's height follows its width.
function Banner() {
  return (
    <div className="banner" aria-hidden="true">
      <img className="banner__layer" src={sky} alt="" />
      {clouds.map((src, i) => (
        <div className="banner__layer banner__clip" key={i}>
          <img className={`banner__cloud cloud${i}`} src={src} alt="" />
        </div>
      ))}
      <img className="banner__layer" src={foreground} alt="" />
    </div>
  );
}

export default Banner;
