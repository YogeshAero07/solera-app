import React from "react";
import "./FeatureSlider.css";
import Carousel from "react-bootstrap/Carousel";

import user1 from "../Images/User/user1.jpg";
import user2 from "../Images/User/user2.jpg";
import user3 from "../Images/User/user3.jpg";
import user4 from "../Images/User/user4.jpg";
import user5 from "../Images/User/user5.jpg";
import user6 from "../Images/User/user6.webp";
import user7 from "../Images/User/user7.webp";
import user8 from "../Images/User/user8.jpg";

const FeatureSlider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={5000}>
          <div className="slider__body">
            <div className="slider__text">
              <h3>“You don't get nauseous when you take them.” </h3>
              <h6>Brittany Harrer</h6>
              <p>Co-Founder of Recruiting Agency</p>
            </div>
            <img className="d-block w-30" src={user1} alt="Image One" />
          </div>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <div className="slider__body">
            <div className="slider__text">
              <h3>
                “Ritual makes it really easy to remember to take my vitamins.”{" "}
              </h3>
              <h6>Sheri Foelsch</h6>
              <p>Registered Nurse</p>
            </div>
            <img className="d-block w-30" src={user2} alt="Image One" />
          </div>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <div className="slider__body">
            <div className="slider__text">
              <h3>“You don't get nauseous when you take them.” </h3>
              <h6>Brittany Harrer</h6>
              <p>Co-Founder of Recruiting Agency</p>
            </div>
            <img className="d-block w-30" src={user3} alt="Image One" />
          </div>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <div className="slider__body">
            <div className="slider__text">
              <h3>“You don't get nauseous when you take them.” </h3>
              <h6>Brittany Harrer</h6>
              <p>Co-Founder of Recruiting Agency</p>
            </div>
            <img className="d-block w-30" src={user4} alt="Image One" />
          </div>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <div className="slider__body">
            <div className="slider__text">
              <h3>“You don't get nauseous when you take them.” </h3>
              <h6>Brittany Harrer</h6>
              <p>Co-Founder of Recruiting Agency</p>
            </div>
            <img className="d-block w-30" src={user5} alt="Image One" />
          </div>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <div className="slider__body">
            <div className="slider__text">
              <h3>“You don't get nauseous when you take them.” </h3>
              <h6>Brittany Harrer</h6>
              <p>Co-Founder of Recruiting Agency</p>
            </div>
            <img className="d-block w-30" src={user6} alt="Image One" />
          </div>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <div className="slider__body">
            <div className="slider__text">
              <h3>“You don't get nauseous when you take them.” </h3>
              <h6>Brittany Harrer</h6>
              <p>Co-Founder of Recruiting Agency</p>
            </div>
            <img className="d-block w-30" src={user7} alt="Image One" />
          </div>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <div className="slider__body">
            <div className="slider__text">
              <h3>“You don't get nauseous when you take them.” </h3>
              <h6>Brittany Harrer</h6>
              <p>Co-Founder of Recruiting Agency</p>
            </div>
            <img className="d-block w-30" src={user8} alt="Image One" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default FeatureSlider;
