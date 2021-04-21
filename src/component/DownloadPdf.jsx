import HomepageKV from "./index/HomepageKV";
import ArticleComponent from "./index/ArticleComponent";
import HomepageSlider from "./index/HomepageSlider";
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
