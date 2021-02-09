import bg1 from "../../assets/uploads/2020/06/Getac_-M04-Gallery_UX10@2x.png";
import slideImg1Mobile from "../../assets/uploads/2020/06/UX10_EMSScreenshot@2x.png";
import slideImg1 from "../../assets/uploads/2020/06/UX10_EMSScreenshot@2x.png";
import Slider from "react-slick";

function HomepageSlider() {
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

  return (
    <Slider {...settings}>
      <section class="gt-grid">
        <div class="gt-col-12">
          <div class="product-description">
            <h3>UX10 Medic Soldier</h3>
            <p>
              Intro Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut. Intro Lorem ipsum dolor sit
              amet, consetetur sadipscing lorem lorem elitr, sed diam nonumy
              eirmod tempor invidunt ut.
            </p>

            <a href="#" class="button">
              Experience now
            </a>
            <a href="#" class="button button button-border">
              Sekundärlink
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
            <h3>UX10 Medic Soldier</h3>
            <p>
              Intro Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut. Intro Lorem ipsum dolor sit
              amet, consetetur sadipscing lorem lorem elitr, sed diam nonumy
              eirmod tempor invidunt ut.
            </p>

            <a href="#" class="button">
              Experience now
            </a>
            <a href="#" class="button button button-border">
              Sekundärlink
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
