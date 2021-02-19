import bgPath from "./../../assets/uploads/2020/06/drops-whitepaper.png";
import imgPath from "./../../assets/uploads/2020/06/E-Book.jpg";

function HomeArticle() {
  let style = {
    backgroundImage: `url('${bgPath}')`,
  };
  return (
    <article class="whitepaper" id="whitepaper">
      <div class="whitepaper-image-background" style={style} />
      <div class="whitepaper-dark-background">
        <div class="gt-grid">
          <div class="gt-col-6">
            <img src={imgPath} width="988" height="555" alt="E-Book" />
          </div>
          <div class="gt-col-6">
            <h2>DEFENCE AND TECHNOLOGY – AN EVER-CHANGING DYNAMIC</h2>
            <p>
              Defence was once a byword for innovation – conflict drove
              technology.
              <br /> However, in many new digital technologies like
              Cybersecurity, IoT, cloud
              <br />
              and data collation/exploitation, the defence industry now lags
              behind
              <br />
              the private sector.
            </p>
            <a
              id="download_teaser"
              class="button button-icon-download"
              href="/whitepaper"
            >
              Download Whitepaper
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default HomeArticle;
