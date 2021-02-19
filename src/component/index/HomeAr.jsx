import bgPath from "./../../assets/uploads/2020/06/Getac_LP_M11_TeaserAR-1.png";
import styles from "./../../assets/css/homear.module.css";
import React, { useState } from "react";
import ArComponent from "./ArComponent";
import SlideToggle from "react-slide-toggle";

function HomeAr() {
  let style = {
    backgroundImage: `url('${bgPath}')`,
  };

  const [toggler, setToggler] = useState(false);

  return (
    <>
      <article class="teaser-augmented-reality" id="teaser_ar" style={styles}>
        <div class="gt-grid">
          <div class="gt-col-6">
            <h2>Experience Getac Devices – with Augmented Reality</h2>
            <p>
              Discover devices like never before – from every angle and in your
              daily environment. Click on the product to enter the 3D
              experience.
            </p>
          </div>
          <div class="gt-col-6" />
        </div>
        <ArComponent />
      </article>
    </>
  );
}

export default HomeAr;
