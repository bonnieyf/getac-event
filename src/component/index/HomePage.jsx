import HomepageKV from "./HomepageKV";
import ArticleComponent from "./ArticleComponent";
import HomepageSlider from "./HomepageSlider";
import HomepageProduct1 from "./HomepageProduct1";
import HomepageProduct2 from "./HomepageProduct2";
import HomeDownload from "./HomeDownload";
import HomeAr from "./HomeAr";
import HomeArticle from "./HomeArticle";
import HomeArticle2 from "./HomeArticle2";
import MainBottom from "./MainBottom";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { t, i18n } = useTranslation();
  return (
    <div class="group">
      <HomepageKV />
      <ArticleComponent
        title={t("homepageSection1.title")}
        desc={t("homepageSection1.desc")}
      />
      <HomepageSlider />
      <ArticleComponent
        title={t("homepageSection3.title")}
        desc={t("homepageSection3.desc")}
      />
      <HomepageProduct1 />
      <HomeDownload />
      <HomeAr />
      <HomepageProduct2 />

      <HomeArticle2 />
      <MainBottom />
    </div>
  );
}

export default HomePage;
