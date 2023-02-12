import React from "react";
import "./MidTable.css";
import frame1 from "./assets/Frame1.png";
import frame2 from "./assets/Frame2.png";
import frame3 from "./assets/Frame3.png";
import frame4 from "./assets/Frame4.png";

function MidTable() {
  return (
    <div className="midTable-wrapper">
      <div id="block-1">
        <img src={frame1} alt="frame1" />{" "}
        <p>
          <h5>
            Amet dolor ea et sed <span>consetetur</span> eos.
          </h5>
          Et consetetur clita ut stet magna ut labore. Est ut kasd dolor.
        </p>
      </div>

      <div id="block-2">
        <img src={frame2} alt="frame2" />{" "}
        <p>
          <h5>
            Amet dolor ea et sed <span>consetetur</span> eos.
          </h5>
          Et consetetur clita ut stet magna ut labore. Est ut kasd dolor.
        </p>
      </div>
      <div id="block-3">
        <img src={frame4} alt="frame4" />{" "}
        <p>
          <h5>
            Amet dolor ea et sed <span>consetetur</span> eos.
          </h5>
          Et consetetur clita ut stet magna ut labore. Est ut kasd dolor.
        </p>
      </div>
      <div id="block-4">
        <img src={frame3} alt="frame3" />
        <p>
          <h5>
            Amet dolor ea et sed <span>consetetur</span> eos.
          </h5>
          Et consetetur clita ut stet magna ut labore. Est ut kasd dolor.
        </p>
      </div>
    </div>
  );
}

export default MidTable;
