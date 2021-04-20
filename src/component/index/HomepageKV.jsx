import window10Logo from "./../../assets/icons/windows-10-logo.svg";
import arrow from "./../../assets/icons/arrow-down-orange.svg";
import bgPath from "./../../assets/media/getac-keyvisual_CTe_v3-landingpage-layout.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";

function HomepageKV(props) {
  let style = {
    backgroundImage: `url('${bgPath}')`,
  };
  const { t, i18n } = useTranslation();

  const onDownload = () => {
    let domElem = document.querySelector("#pdf-catch");
    const doc = new jsPDF("p", "px", "a4");
    htmlToImage
      .toPng(domElem)
      .then(function(dataUrl) {
        let img = new Image();
        img.src = dataUrl;
        img.onload = () => {
          let width = doc.internal.pageSize.getWidth();
          let height = doc.internal.pageSize.getHeight();

          let imgWidth = img.width;
          let imgHeight = img.height;

          let ratioWidth = width / imgWidth;
          let ratioHeight = height / imgHeight;
          let ratio = ratioWidth > ratioHeight ? ratioHeight : ratioWidth;

          let fitWidth = Math.floor(imgWidth * ratio);
          let fitHeight = Math.floor(imgHeight * ratio);

          let marginX = (width - fitWidth) / 2;

          doc.addImage(dataUrl, "PNG", marginX, 0, fitWidth, fitHeight);
          doc.save("download.pdf");
        };
      })
      .catch(function(error) {
        console.log("oops, something went wrong!", error);
      });
  };

  return (
    <article class="kv-show stage" style={style}>
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

          {props ? (
            <>
              <a class="button button-download" onClick={onDownload}>
                PDF Download
              </a>
            </>
          ) : (
            <>
              <Link to="/tradshow" class="button button-icon-360">
                {t("button.UnlockVirtualExhibition")}
              </Link>
              <Link to="/downlaod" class="button button-ghost">
                {t("button.LetsTalk")}
              </Link>
            </>
          )}

          <br />

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
