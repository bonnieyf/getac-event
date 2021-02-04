import bgPath from "./../../assets/uploads/2020/06/Getac_LP_M11_TeaserAR-1.png";

function HomeAr() {
  let style = {
    backgroundImage: `url('${bgPath}')`,
  };

  return (
    <>
      <article class="teaser-augmented-reality" id="teaser_ar" style={style}>
        <div class="gt-grid">
          <div class="gt-col-6">
            <h2>Experience Getac Devices – with Augmented Reality</h2>
            <p>
              Discover devices like never before – from every angle and in your
              daily environment. Click on the product to enter the 3D
              experience.
            </p>
          </div>
          <div class="gt-col-6"></div>
        </div>

        <div class="gt-grid">
          <a
            id="getac_ar_1"
            class="teaser-augmented-reality-content"
            data-embed="B360"
            data-mobile="/ar/show.php?product=B360"
            data-qr="http://localhost:81/website/web/app/uploads/2020/06/B360.png"
          >
            <img
              src="http://localhost:81/website/web/app/uploads/2020/06/B360_08_final-os.png"
              width="90"
              height="80"
              alt="B360 - True Ruggedness paired with a sleek Design"
            />
            <span>B360 – True Ruggedness paired with a sleek Design</span>
          </a>
        </div>
      </article>
      <div class="gt-lightbox-content">
        <button class="gt-lightbox-close"></button>

        <div class="gt-grid">
          <div class="gt-col-12">
            <div class="ar-desktop-content">
              <strong class="gt-lightbox-headline">
                Augmented Reality is not supported on this device
              </strong>
              <p>
                Augmented Reality works on smartphones only. You can instead
                discover the 3D module of our product below or open this page on
                your smartphone.
              </p>
              <p>
                Simply scan this code with your smartphone (either in camera app
                or with a dedicated QR code reader). Then follow the
                instructions on screen.
              </p>
            </div>
          </div>
        </div>

        <div class="gt-grid">
          <div class="gt-col-8 gt-indent-1">
            <div
              id="modelcontainer"
              class="gt-lightbox-ar-model-viewer-embed"
            ></div>
          </div>
          <div class="ar-desktop-content">
            <div class="gt-col-2 gt-indent-1">
              <ol>
                <li>
                  Scan this code with your smartphone:
                  <img
                    id="qrcode"
                    src="http://localhost:81/website/web/app/uploads/2020/06/B360.png"
                    width="164"
                    height="166"
                    alt=""
                  />
                  <a
                    id="qrlink"
                    href="/ar/show.php?product=B360"
                    class="copy-qr-code"
                  >
                    Copy this link
                  </a>
                </li>
                <li>Place the model in your environment</li>
                <li>Play around with our product</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeAr;
