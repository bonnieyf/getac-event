import window10Logo from "./../../assets/icons/windows-10-logo.svg";
import arrow from "./../../assets/icons/arrow-down-orange.svg";
import bgPath from "./../../assets/media/getac-keyvisual_CTe_v3-landingpage-layout.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function HomepageKV() {
  let style = {
    backgroundImage: `url('${bgPath}')`,
  };
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
            Share on LinkedIn
          </a>

          <h1>Defense Virtual Exhibition</h1>
          <p class="subline">
            Discover now Getac’s rugged solutions dedicated for special forces
            and system integrators around the world in a unique 3D experience.
          </p>

          <Link to="/tradshow" class="button button-icon-360">
            Unlock Virtual Exhibition
          </Link>
          <a href="#" class="button button-ghost">
            Let’s Talk
          </a>

          <p class="recommendation">
            <img
              src={window10Logo}
              width="162"
              height="30"
              alt="Windows 10 Logo"
            />
            <span> Getac recommends Windows 10 pro for business </span>
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
