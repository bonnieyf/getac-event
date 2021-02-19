import React, { useState } from "react";
import imgPath from "./../../assets/uploads/2020/06/pureLiFi-white2.png";
import FsLightbox from "fslightbox-react";

function HomeArticle2() {
  const [toggler, setToggler] = useState(false);

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
          <h3>
            Did you know? Getac and pureLiFi to bring ruggedized LiFi-enabled
            devices to market.
          </h3>
          <p />
          <p>
            LiFi is high speed, bi-directional, networked wireless
            communications using light instead of radio waves. Secure from
            eavesdropping and invulnerable to outside interference, LiFi is
            ideal for defence applications.
          </p>
          <p />
          <a
            href="https://www.getac.com/eu/news/getac-announces-a-partnership-with-purelifi-to-bring-ruggedized-lifi-devices-to-the-market/"
            class="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Be Enlightened
          </a>
        </div>
      </div>
    </article>
  );
}

export default HomeArticle2;
