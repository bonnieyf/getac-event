import bgPath from "./../../assets/uploads/2020/06/Getac_LP_M11_TeaserAR-1.png";
import styles from "./../../assets/css/homear.module.css";
import React, { useState } from "react";
import ArComponent from "./ArComponent";
import SlideToggle from "react-slide-toggle";
import { useTranslation } from "react-i18next";
function HomeAr() {
  let bGstyle = {
    backgroundImage: `url('${bgPath}')`,
  };

  const [toggler, setToggler] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <>
      <article
        class="teaser-augmented-reality"
        id="teaser_ar"
        style={{ ...styles, ...bGstyle }}
      >
        <div class="gt-grid">
          <div class="gt-col-6">
            <h2>{t("homepageSection7.title")}</h2>
            <p>{t("homepageSection7.desc")}</p>
          </div>
          <div class="gt-col-6" />
        </div>
        <ArComponent />
      </article>
    </>
  );
}

export default HomeAr;
