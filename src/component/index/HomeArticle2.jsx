import React, { useState } from "react";
import imgPath from "./../../assets/uploads/2020/06/pureLiFi-white2.png";
import FsLightbox from "fslightbox-react";
import { useTranslation } from "react-i18next";

function HomeArticle2() {
  const [toggler, setToggler] = useState(false);
  const { t, i18n } = useTranslation();
  return (
    <article class="teaser-centered">
      <div class="gt-grid">
        <div class="gt-col-6">
          <a href="javascript:;" onClick={() => setToggler(!toggler)}>
            <img src={imgPath} alt="" />
          </a>

          <FsLightbox
            toggler={toggler}
            sources={[
              <iframe
                width="700"
                height="400"
                src="https://www.youtube.com/embed/GkXyEgHRAcY"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />,
            ]}
          />
        </div>
        <div class="gt-col-6">
          <h3>{t("homepageSection8.title")}}</h3>
          <p />
          <p>{t("homepageSection8.desc")}}</p>
          <p />
          <a
            href="https://www.getac.com/eu/news/getac-announces-a-partnership-with-purelifi-to-bring-ruggedized-lifi-devices-to-the-market/"
            class="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("button.BeEnlightened")}
          </a>
        </div>
      </div>
    </article>
  );
}

export default HomeArticle2;
