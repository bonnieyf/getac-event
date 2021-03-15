import React, { useState } from "react";
import SlideToggle from "react-slide-toggle";
import "@google/model-viewer";
import model from "./../../assets/ar/V110/V110.glb";

function ArComponent() {
  const onOpen = () => {
    let content = document.querySelector(".gt-lightbox-content");
    let getTop = content.offsetTop;
    let headerHeight = document.querySelector(".header").clientHeight - 1;
    window.scrollTo({
      top: getTop - headerHeight,
      behavior: "smooth",
    });
  };
  return (
    <SlideToggle
      collapsed
      render={({ toggle, setCollapsibleElement }) => (
        <>
          <div class="gt-grid">
            <a
              id="getac_ar_1"
              onClick={() => {
                toggle();
                onOpen();
              }}
              class="teaser-augmented-reality-content"
              data-embed="B360"
              data-mobile="/ar/show.php?product=B360"
              data-qr="./uploads/2020/06/B360.png"
            >
              <img
                src="./uploads/2020/06/B360_08_final-os.png"
                width="90"
                height="80"
                alt="B360 - True Ruggedness paired with a sleek Design"
              />
              <span>B360 – True Ruggedness paired with a sleek Design</span>
            </a>
          </div>
          <div class="gt-lightbox-content" ref={setCollapsibleElement}>
            <div className="gt-lightbox-content-inner">
              <button class="gt-lightbox-close" onClick={toggle} />

              <div class="gt-grid">
                <div class="gt-col-12">
                  <div class="ar-desktop-content">
                    <strong class="gt-lightbox-headline">
                      Augmented Reality is not supported on this device
                    </strong>
                    <p>
                      Augmented Reality works on smartphones only. You can
                      instead discover the 3D module of our product below or
                      open this page on your smartphone.
                    </p>
                    <p>
                      Simply scan this code with your smartphone (either in
                      camera app or with a dedicated QR code reader). Then
                      follow the instructions on screen.
                    </p>
                  </div>
                </div>
              </div>

              <div class="gt-grid">
                <div class="gt-col-8 gt-indent-1">
                  <div
                    id="modelcontainer"
                    class="gt-lightbox-ar-model-viewer-embed"
                  >
                    <model-viewer
                      src={model}
                      camera-controls=""
                      ar-status="not-presenting"
                    />
                  </div>
                </div>
                <div class="ar-desktop-content">
                  <div class="gt-col-2 gt-indent-2">
                    <ol>
                      <li>
                        Scan this code with your smartphone:
                        <img
                          id="qrcode"
                          src="./uploads/2020/06/B360.png"
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
          </div>
        </>
      )}
    />
  );
}

export default ArComponent;
