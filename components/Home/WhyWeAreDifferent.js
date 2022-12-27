import ContainerWrraper from "../common/ContainerWrraper";
import styles from "@/styles/home/WhyWeAreDifferent.module.css";
import { Col, Image, Row } from "react-bootstrap";
import ToggleUiButton from "../common/ToggleUiButton";
import useResponsiveViewer from "hooks/ResponsiveViewer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const WhyWeAreDifferent = () => {
  const isMobile = useResponsiveViewer();
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    <ContainerWrraper customClass={`${styles.ContainerWrraperCustom}`}>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={`${styles.MainIntroAndDiscription} ColPaddingRemove`}
        >
          <div className={styles.animationSection}>
            <h2
              className={styles.MainTitle}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Why distribute press releases with us?
            </h2>
            <div
              className={styles.SpanImage}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Image src="/assets/images/brush-3.svg" alt="brush-img" />
            </div>
          </div>
          <p className={styles.MainParagraph}>
            The quality of the distribution network defines how much coverage a
            press release will get. We handpick the partner sites through a
            detailed quality check review from our team, followed by
            distributing the press releases on those network sites.
          </p>
          <p className={styles.GradiantText}>
            Grow your brand globally with our best distribution network now!
          </p>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={`${styles.CenterButtonWrraper} ColPaddingRemove`}
        >
          <div className={`${styles.ButtonCover}`}>
            <ToggleUiButton
              text={
                <span>
                  <Image
                    src={"/assets/icons/send-icon.png"}
                    alt="press-release"
                    fluid
                  />
                  &nbsp; Submit Now
                </span>
              }
              url={"/contact-us"}
            />
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={`${styles.LastBigImage} ColPaddingRemove`}
        >
          <div className={styles.BigImage}>
            <Image
              src={
                isMobile
                  ? "/assets/images/mobile-diff-img.svg"
                  : "/assets/images/about-pr.png"
              }
              alt="about-pr"
              fluid
              data-aos="fade-up"
              data-aos-duration="1500"
            />
          </div>
        </Col>
      </Row>
    </ContainerWrraper>
  );
};

export default WhyWeAreDifferent;
