import React from "react";
import "./FeatureAdv.css";

import adv1 from "../Images/adv1.png";
import adv2 from "../Images/adv2.png";
import adv3 from "../Images/adv3.png";
import ic1 from "../Images/ic1.png";
import ic2 from "../Images/ic2.png";
import ic3 from "../Images/ic3.png";
import ic4 from "../Images/ic4.png";

const FeatureAdv = () => {
  return (
    <div>
      {/* Feature Page Adventure Post First */}

      <div className="feature__adv1">
        <div className="adv1__img">
          <img src={adv1} alt="" />
        </div>
        <div className="adv1__info">
          <h1>We're not about pseudoscience and half-truths</h1>
          <p>
            From Omega-3 DHA from microalgae to regeneratively-farmed pea
            protein, our scientists studied diets and genetics to make daily
            essentials based on what we need.{" "}
          </p>
          <div className="adv1__list">
            <li>
              <a href="">Multivitamin for Women 18+</a>
            </li>
            <li>
              <a href="">The Prenatal Multivitamin</a>
            </li>
            <li>
              <a href="">Multivitamin for Men 18+</a>
            </li>
            <li>
              <a href="">Essential Protein Daily Shake 18+</a>
            </li>
          </div>
        </div>
      </div>

      {/* Feature Page Adventure Post Second */}

      <div className="feature__adv2">
        <div className="adv2__info">
          <h1>You deserve traceability</h1>
          <p>
            We share our sources, studies, and suppliers — daily essentials
            backed by the first visible supply chain of its kind.
          </p>
          <div className="adv2__list">
            <li>
              <a href="">Who We Are</a>
            </li>
            <li>
              <a href="">Meet Our Ingredients</a>
            </li>
            <li>
              <a href="">Our Clinical Study</a>
            </li>
          </div>
        </div>
        <div className="adv2__img">
          <img src={adv2} alt="" />
        </div>
      </div>

      {/* Feature Page Adventure Post Third */}

      <div className="feature__adv3">
        <div className="adv3__img">
          <img src={adv3} alt="" />
        </div>
        <div className="adv3__info">
          <h1>Clean and simple, delivered</h1>
          <p>
            Easy-to-start. Easy-to-cancel. Our team of scientists and
            nutritional experts are on a mission to turn your new healthy habit
            into a Ritual.*
          </p>
          <div className="adv3__list">
            <li>
              <img src={ic1} alt="" /> Free shipping
            </li>
            <li>
              <img src={ic2} alt="" /> Meet Our Ingredients
            </li>
            <li>
              <img src={ic3} alt="" /> Free and easy cancellation
            </li>
            <li>
              <img src={ic4} alt="" /> 30-day money back guarantee
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureAdv;
