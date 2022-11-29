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
          <p
            className={styles.MainTitle}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Why we are Different?
          </p>
          <div
            className={styles.SpanImage}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Image src="/assets/images/brush-3.svg" alt="brush-img" />
          </div>
          <p className={styles.MainParagraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p className={styles.GradiantText}>
            Pick the Best choice for Media Distribution
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
                    src={"/assets/icons/send-icon.svg"}
                    alt="press-release"
                    fluid
                  />
                  &nbsp; Let’s Start Now
                </span>
              }
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
            />
          </div>
        </Col>
      </Row>
    </ContainerWrraper>
  );
};

export default WhyWeAreDifferent;
