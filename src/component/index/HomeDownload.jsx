import bgPath from "./../../assets/uploads/2020/06/drops-whitepaper.png";
import imgPath from "./../../assets/uploads/2020/06/E-Book.jpg";
import { useTranslation } from "react-i18next";

function HomeDownload() {
  let style = {
    backgroundImage: `url('${bgPath}')`,
  };
  const { t, i18n } = useTranslation();

  return (
    <article class="whitepaper" id="whitepaper">
      <div class="whitepaper-image-background" style={style} />
      <div class="whitepaper-dark-background">
        <div class="gt-grid">
          <div class="gt-col-6">
            <img src={imgPath} width="988" height="555" alt="E-Book" />
          </div>
          <div class="gt-col-6">
            <h2>{t("homepageSection4.title")}</h2>
            <p>{t("homepageSection4.desc")}</p>
            <a
              id="download_teaser"
              class="button button-icon-download"
              href="/whitepaper"
            >
              {t("button.DownloadWhitepaper")}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default HomeDownload;
