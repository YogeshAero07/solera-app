import React from "react";
import "./FeaturePost.css";
import FeatureSlider from "./FeatureSlider";
import FeatureAdv from "./FeatureAdv";
import Divider from "@material-ui/core/Divider";

// Homepage Images
import FeatureImg from "../Images/FeatureImg.png";
import Box1 from "../Images/box1.png";
import Box2 from "../Images/box2.png";
import Box3 from "../Images/box3.png";
import Box4 from "../Images/box4.png";
import Sym1 from "../Images/sym1.png";
import Sym2 from "../Images/sym2.png";
import Sym3 from "../Images/sym3.png";
import Sym4 from "../Images/sym4.png";
import Sym5 from "../Images/sym5.png";
import moto1 from "../Images/moto1.png";
import moto2 from "../Images/moto2.png";
import moto3 from "../Images/moto3.png";
import close1 from "../Images/close1.jpeg";
import close2 from "../Images/close2.jpeg";
import close3 from "../Images/close3.jpg";
import close4 from "../Images/close4.jpg";

const FeaturePost = () => {
  return (
    <div className="feature__page">
      {/* Feature Image */}

      <div className="feature__img">
        <img src={FeatureImg} alt="" />
      </div>

      {/* Feature Four Boxes */}

      <div className="feature__box">
        <a>
          <img src={Box1} alt="" />
          <p>Shop Multivitamin</p>
        </a>
        <a>
          <img src={Box2} alt="" />
          <p>Shop Protein</p>
        </a>
        <a>
          <img src={Box3} alt="" />
          <p>Shop Pregnancy</p>
        </a>
        <a>
          <img src={Box4} alt="" />
          <p>Shop Bundles</p>
        </a>
      </div>

      {/* Feature Page Tagline and Symbols */}

      <div className="feature__tagline">
        <p>
          Daily essentials with good intentions — for living life or creating
          it.
        </p>
      </div>
      <div className="feature__symbols">
        <li>
          <img src={Sym1} alt="" />
          <p>
            Traceble <br />
            Ingredients
          </p>
        </li>
        <li>
          <img src={Sym2} alt="" />
          <p>Non-GMO</p>
        </li>
        <li>
          <img src={Sym3} alt="" />
          <p>Third Party Tested</p>
        </li>
        <li>
          <img src={Sym4} alt="" />
          <p>Vegan</p>
        </li>
        <li>
          <img src={Sym5} alt="" />
          <p>
            No Artificial <br />
            Flavors or <br />
            Synthetic Fillers
          </p>
        </li>
      </div>

      {/* Feature Adventure Post */}

      <div>
        <FeatureAdv />
      </div>

      {/* Feature New */}

      <div className="feature__new">
        {/* Feature Page Quotes */}

        <div className="feature__quotes">
          <h1>Skeptics Speak</h1>
          <p>
            With millions of Rituals delivered, discover why customers trust us
            with their daily health.
          </p>
        </div>

        {/* Feature Bottom Slider */}

        <div className="feature__img__slider">
          <FeatureSlider />
        </div>

        <div className="feature__moto">
          <p></p>
          <div className="moto__logos">
            <img src={moto1} alt="" />
            <img src={moto2} alt="" />
            <img src={moto3} alt="" />
            <p>Health</p>
          </div>
        </div>
      </div>

      {/* Feature Closing */}

      <div className="feature__closing">
        <a href="">Make Your Self</a>
        <a href="">
          Commit yourself every single day with <span>@Ritual</span>
        </a>
        <div className="closing__img">
          <img src={close1} alt="" />
          <img src={close2} alt="" />
          <img src={close3} alt="" />
          <img src={close4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FeaturePost;
