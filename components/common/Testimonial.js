import styles from "@/styles/common/Testimonial.module.css";
import { Col, Image, Row } from "react-bootstrap";
import ContainerWrraper from "./ContainerWrraper";
import { FaRegStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Aos from "aos";

const RatingStar = ({ num }) => {
  return (
    <>
      {num == 1 ? (
        <>
          <Image src="/assets/icons/full-star.svg" alt="filled" />
          <Image src="/assets/icons/unfilledstar.svg" alt="filled" />
          <Image src="/assets/icons/unfilledstar.svg" alt="filled" />
          <Image src="/assets/icons/unfilledstar.svg" alt="filled" />
          <Image src="/assets/icons/unfilledstar.svg" alt="filled" />
        </>
      ) : num == 2 ? (
        <>
          <Image src="/assets/icons/full-star.svg" alt="filled" />
          <Image src="/assets/icons/full-star.svg" alt="filled" />
          <Image src="/assets/icons/unfilledstar.svg" alt="filled" />
          <Image src="/assets/icons/unfilledstar.svg" alt="filled" />
          <Image src="/assets/icons/unfilledstar.svg" alt="filled" />
        </>
      ) : num == 3 ? (
        <>
          <Image src="/assets/icons/full-star.svg" alt="filled" />
          <Image src="/assets/icons/full-star.svg" alt="filled" />
          <Image src="/assets/icons/full-star.svg" alt="filled" />
          <Image src="/assets/icons/unfilledstar.svg" alt="filled" />
          <Image src="/assets/icons/unfilledstar.svg" alt="filled" />
        </>
      ) : num == 4 ? (
        <>
          <Image src="/assets/icons/full-star.svg" alt="filled" />
          <Image src="/assets/icons/full-star.svg" alt="filled" />
          <Image src="/assets/icons/full-star.svg" alt="filled" />
          <Image src="/assets/icons/full-star.svg" alt="filled" />
          <Image src="/assets/icons/unfilledstar.svg" alt="filled" />
        </>
      ) : num == 5 ? (
        <>
          <Image src="/assets/icons/full-star.svg" alt="filled" />
          <Image src="/assets/icons/full-star.svg" alt="filled" />
          <Image src="/assets/icons/full-star.svg" alt="filled" />
          <Image src="/assets/icons/full-star.svg" alt="filled" />
          <Image src="/assets/icons/full-star.svg" alt="filled" />
        </>
      ) : null}
    </>
  );
};

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
    // customPaging: function (i) {
    //   return <div className="dot" onClick={() => alert(i)}></div>;
    // },
    dotsClass: "slick-dots slick-thumb",
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <label>{i}</label>,
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

  const dataTestimonial = [
    {
      name: "Liza Jones",
      img: "/assets/images/avt1.jpg",
      designation: "Marketing executive",
      rate: 5,
      message:
        "UNmedia Buzz provides an enormous reach at an affordable price compared to others. I love it. They have let us issue news on critical topics, like climate change, that other news services have rejected. UNmedia Buzz is the real deal.",
    },
    {
      name: "Thomas evans",
      img: "/assets/images/avt2.jpg",
      designation: "Communication strategist",
      rate: 4,
      message:
        "My press release with UNmedia Buzz got me coverage in different publications. As a result, I received a significant rise in my website traffic. They are the best in the business as far as I am concerned, who helped us scale effortlessly.",
    },
    {
      name: "Kelly Davis",
      img: "/assets/images/avt3.jpg",
      designation: "Vice president",
      rate: 4,
      message:
        "The PR distributing companies' ineffective services cost me a lot of money and time. Fortunately, I came across the team of UNmedia Buzz, they helped me out of this situation with complete analytics. I strongly recommend their services.",
    },
    {
      name: "James Pearson",
      img: "/assets/images/avt4.jpg",
      designation: "Chief Marketing Officer",
      rate: 4,
      message:
        "I have used services from over a dozen PR distribution services. Only UNmedia Buzz has been able to deliver its services as effectively as promised. My sincere thanks go out to the entire team.",
    },
  ];
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
            <h2
              className={styles.MainHeading}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Trusted by our Clients
              <span className={styles.MainHeadingBrush}>
                <Image src="/assets/icons/brush-4.svg" alt="brush" />
              </span>
            </h2>
          </div>
        </Col>
      </Row>
      <Slider {...settings}>
        {dataTestimonial.map((value, index) => (
          <div className={styles.sliderSection} key={index}>
            <div className={styles.TestimonialCard}>
              <div className={styles.Profile}>
                <div>
                  <Image
                    src={value.img}
                    alt="filled"
                    height={"69px"}
                    width="69px"
                    style={{ borderRadius: "100%" }}
                  />
                </div>
                <div className={styles.ProfileDetails}>
                  <p className={styles.UserName}>{value.name}</p>
                  <p className={styles.Designation}>{value.designation}</p>
                </div>
              </div>
              <div className={styles.rating}>
                <RatingStar num={value.rate} />
              </div>
              <p className={styles.ProfileDescription}>{value.message}</p>
            </div>
          </div>
        ))}
      </Slider>
    </ContainerWrraper>
  );
};

export default Testimonial;
