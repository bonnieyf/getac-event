import HomepageKV from "./index/HomepageKV";
import ArticleComponent from "./index/ArticleComponent";
import HomepageSlider from "./index/HomepageSlider";
import HomepageProduct1 from "./index/HomepageProduct1";
import HomepageProduct2 from "./index/HomepageProduct2";
import HomeDownload from "./index/HomeDownload";
import HomeAr from "./index/HomeAr";
import HomeArticle2 from "./index/HomeArticle2";
import MainBottom from "./index/MainBottom";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function DownloadPdf() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <main id="pdf-catch">
        <div class="group">
          <HomepageKV isDownload={true} />

          <ArticleComponent
            title={t("homepageSection1.title")}
            desc={t("homepageSection1.desc")}
          />

          <HomepageSlider />
          <ArticleComponent
            title={t("homepageSection3.title")}
            desc={t("homepageSection3.desc")}
          />
        </div>
      </main>
    </>
  );
}

export default DownloadPdf;
