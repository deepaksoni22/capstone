import React from "react";
import "./Blocks.css";
import circleFrame from "./Group video-amico 1.png";
import circleFrame3 from "./Frame 242.png";
import circleFrame3Line from "./lines.png";
import circleFrame4 from "./People search-pana (1) 1.png";
function Blocks() {
  return (
    <div className="blocks">
      {" "}
      <div className="frame-1-wrapper">
        <div className="text-1-wrapper">
          <h1>Rebum sed tempor diam gubergren rebum.</h1>
          <br></br>
          <p>
            Duo stet vero voluptua at no at est lorem, et invidunt stet vero
            voluptua at no at est lorem, et invidunt voluptua at no at est
            lorem, et invidunt diam.
          </p>
        </div>
        <img id="frame-1" src={circleFrame} alt="frame" />

        {/* <div className="frame-1-image"></div> */}
      </div>
      <div className="frame-2-wrapper">
        <div className="paraButton">
          <h1> Duo stet vero invidunt vo invidunt</h1>
          <p>
            {" "}
            voluptua at,et invidunt voluptua at no at est lorem, et invidunt
            diam.
          </p>
          <button type="click">Sign up</button>
        </div>
      </div>
      <div className="frame-3-wrapper">
        <div className="frame-3-text-wrapper">
          <h1>Rebum sed tempor diam gubergren rebum.</h1>
          <p>
            Duo stet vero voluptua at no at est lorem, et invidunt stet vero
            voluptua at no at est lorem, et invidunt voluptua at no at est
            lorem, et invidunt diam.
          </p>
        </div>
        <img id="imgLine" src={circleFrame3Line} alt="frame3Lines" />
        <img id="frame-3" src={circleFrame3} alt="frame3" />

        {/* <div className="frame-1-image"></div> */}
      </div>
      <div className="frame-4-wrapper">
        <img id="frame-4" src={circleFrame4} alt="frame4" />
        <div className="frame-4-text-wrapper">
          <h1>
            Rebum sed tempor diam , et invidunt voluptua at no at est gubergren
            rebum.
          </h1>
          {/* <br></br> */}
          <p>
            Duo stet vero voluptua at no at est lorem, et invidunt stet vero
            voluptua at no at est lorem, et invidunt voluptua at no at est
            lorem, et invidunt diam.
          </p>
        </div>

        <div className="frame-1-image"></div>
      </div>
    </div>
  );
}

export default Blocks;
/*





use shrink property
  





*/
