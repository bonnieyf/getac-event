import HomepageKV from "./HomepageKV";
import ArticleComponent from "./ArticleComponent";
import HomepageSlider from "./HomepageSlider";
import HomepageProduct1 from "./HomepageProduct1";
import HomepageProduct2 from "./HomepageProduct2";
import HomeDownload from "./HomeDownload";
import HomeAr from "./HomeAr";
import HomeArticle from "./HomeArticle";
import MainBottom from "./MainBottom";

function HomePage() {
  return (
    <div class="group">
      <HomepageKV />
      <ArticleComponent
        title="Defence Dedicated Solutions"
        desc="Paragraph Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum."
      />
      <HomepageSlider />
      <ArticleComponent
        title="Accessories"
        desc="All our rugged computing solutions include a full range of accessories. Designed to ensure perfect mobility and ease of use in the field or on the military base."
      />
      <HomepageProduct1 />
      <HomeDownload></HomeDownload>
      <HomepageProduct2 />
      <HomeAr></HomeAr>
      <HomeArticle></HomeArticle>
      <MainBottom></MainBottom>
    </div>
  );
}

export default HomePage;
