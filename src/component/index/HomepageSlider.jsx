import bg1 from "../../assets/uploads/2020/06/Getac_-M04-Gallery_UX10@2x.png";
import slideImg1Mobile from "../../assets/uploads/2020/06/UX10_EMSScreenshot@2x.png";
import slideImg1 from "../../assets/uploads/2020/06/UX10_EMSScreenshot@2x.png";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
function HomepageSlider(props) {
  let style = {
    backgroundImage: `url(${bg1})`,
  };

  const settings = {
    className: "gallery-slider",
    dots: true,
    arrows: true,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const { t, i18n } = useTranslation();

  return (
    <Slider {...settings}>
      <section class="gt-grid">
        <div class="gt-col-12">
          <div class="product-description">
            <h3>{t("homepageSection2.silde1.title")}</h3>
            <p>{t("homepageSection2.silde1.desc")}</p>

            <a href="#" class="button">
              {t("button.EnterVirtualExhibition")}
            </a>
          </div>

          <div class="background-image" style={style} />

          <div class="product-image">
            <img
              src={slideImg1}
              srcset={`${slideImg1} 1023w,
                ${slideImg1Mobile} 1024w`}
              sizes="(max-width: 1023px) 100vw"
              width="1548"
              height="1506"
              alt="UX10 EMS"
            />
          </div>
        </div>
      </section>
      <section class="gt-grid">
        <div class="gt-col-12">
          <div class="product-description">
            <h3>{t("homepageSection2.silde1.title")}</h3>
            <p>{t("homepageSection2.silde1.desc")}</p>

            <a href="#" class="button">
              {t("button.EnterVirtualExhibition")}
            </a>
          </div>

          <div class="background-image" style={style} />

          <div class="product-image">
            <img
              src={slideImg1}
              srcset={`${slideImg1} 1023w,
                ${slideImg1Mobile} 1024w`}
              sizes="(max-width: 1023px) 100vw"
              width="1548"
              height="1506"
              alt="UX10 EMS"
            />
          </div>
        </div>
      </section>
    </Slider>
  );
}

export default HomepageSlider;
