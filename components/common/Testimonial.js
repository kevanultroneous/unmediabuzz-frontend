import styles from "@/styles/common/Testimonial.module.css";
import { Col, Image, Row } from "react-bootstrap";
import ContainerWrraper from "./ContainerWrraper";
import { FaRegStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Aos from "aos";

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 3500,
    slidesToShow: 4,
    slidesToScroll: 1,
    customPaging: function (i) {
      return <div className="dot"></div>;
    },
    dotsClass: "slick-dots slick-thumb",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    <ContainerWrraper customClass={`${styles.ContainerWrraperTestimonial}`}>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={`ColPaddingRemove`}
        >
          <div className={styles.animationSection}>
            <h6
              className={styles.MainHeading}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Trusted by our Clients
              <span className={styles.MainHeadingBrush}>
                <Image src="/assets/icons/brush-4.svg" alt="brush" />
              </span>
            </h6>
          </div>
        </Col>
        {/* {[1, 2, 3, 4].map((v, i) => (
          <Col
            xs={12}
            sm={12}
            md={3}
            lg={3}
            xl={3}
            key={i}
            className={`ColPaddingRemove`}
          >
            <div className={styles.TestimonialCard}>
              <div className={styles.Profile}>
                <div>
                  <Image src="/assets/icons/avatar.svg" alt="filled" />
                </div>
                <div className={styles.ProfileDetails}>
                  <p className={styles.UserName}>Bette Davis</p>
                  <p className={styles.Designation}>Designation</p>
                </div>
              </div>
              <div>
                <Image src="/assets/icons/full-star.svg" alt="filled" />
                <Image src="/assets/icons/full-star.svg" alt="filled" />
                <Image src="/assets/icons/full-star.svg" alt="filled" />
                <Image src="/assets/icons/full-star.svg" alt="filled" />
                <Image src="/assets/icons/full-star.svg" alt="filled" />
              </div>
              <p className={styles.ProfileDescription}>
                In Tier 1 Pro distribution package you get 225 media outlets
                distribution with Google News, Marketwatch, Financial Network
                Distribution, Marketmedia Distribution, Google News Network
                Distribution, 9K-15K extra impression in popular sites.
              </p>
            </div>
          </Col>
        ))} */}
      </Row>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value, index) => (
          <div className={styles.sliderSection} key={index}>
            <div className={styles.TestimonialCard}>
              <div className={styles.Profile}>
                <div>
                  <Image src="/assets/icons/avatar.svg" alt="filled" />
                </div>
                <div className={styles.ProfileDetails}>
                  <p className={styles.UserName}>Bette Davis</p>
                  <p className={styles.Designation}>Designation</p>
                </div>
              </div>
              <div className={styles.rating}>
                <Image src="/assets/icons/full-star.svg" alt="filled" />
                <Image src="/assets/icons/full-star.svg" alt="filled" />
                <Image src="/assets/icons/full-star.svg" alt="filled" />
                <Image src="/assets/icons/full-star.svg" alt="filled" />
                <Image src="/assets/icons/full-star.svg" alt="filled" />
              </div>
              <p className={styles.ProfileDescription}>
                In Tier 1 Pro distribution package you get 225 media outlets
                distribution with Google News, Marketwatch, Financial Network
                Distribution, Marketmedia Distribution, Google News Network
                Distribution, 9K-15K extra impression in popular sites.
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </ContainerWrraper>
  );
};

export default Testimonial;
