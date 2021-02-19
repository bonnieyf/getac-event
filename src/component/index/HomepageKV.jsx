import window10Logo from "./../../assets/icons/windows-10-logo.svg";
import arrow from "./../../assets/icons/arrow-down-orange.svg";
import bgPath from "./../../assets/media/getac-keyvisual_CTe_v3-landingpage-layout.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function HomepageKV() {
  let style = {
    backgroundImage: `url('${bgPath}')`,
  };
  const { t, i18n } = useTranslation();
  return (
    <article class="stage" style={style}>
      <div class="gt-grid">
        <div class="gt-col-12">
          <a
            class="linkedin-share"
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://defence-tradeshow.getac.com&title=Getac+-+Defense+Virtual+Trade+Show+2020&summary=Access+now+to+our+virtual+exhibition+and+experience+the+latest+military+rugged+technologies+by+Getac+in+a+3D+Exhibition.&source=defence-tradeshow.getac.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("homepageKv.title")}
          </a>

          <h1>{t("homepageKV.title")}</h1>
          <p class="subline">{t("homepageKV.desc")}</p>

          <Link to="/tradshow" class="button button-icon-360">
            {t("button.UnlockVirtualExhibition")}
          </Link>
          <a href="#" class="button button-ghost">
            {t("button.LetsTalk")}
          </a>

          <p class="recommendation">
            <img
              src={window10Logo}
              width="162"
              height="30"
              alt="Windows 10 Logo"
            />
            <span> {t("homepageKV.recommends")} </span>
          </p>

          <span class="scroll-hint">
            <img src={arrow} width="20" height="10" alt="scroll-hint" />
          </span>
        </div>
      </div>
    </article>
  );
}

export default HomepageKV;
