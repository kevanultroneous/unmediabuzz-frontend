import ContainerWrraper from "../common/ContainerWrraper";
import { Row, Col, Image } from "react-bootstrap";
import styles from "@/styles/home/PressReleaseHighlights.module.css";
import Marquee from "react-fast-marquee";
import useResponsiveViewer from "hooks/ResponsiveViewer";
import { useEffect } from "react";
import Aos from "aos";

const PressReleaseHighlights = () => {
  const isMobile = useResponsiveViewer();
  const imagedata = [
    "/assets/images/highlight-1.svg",
    "/assets/images/highlight-2.svg",
    "/assets/images/highlight-3.svg",
    "/assets/images/highlight-4.svg",
    "/assets/images/highlight-5.svg",
  ];
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);

  return (
    <ContainerWrraper customClass={`${styles.ContainerWrraperHighlight}`}>
      <div className={styles.HighlightHeadCover}>
        {isMobile ? (
          <p className={styles.HighlightHeading}>
            Your
            <label className={styles.UniqueLabel}>
              <span className={styles.BrushSetup}>
                <Image
                  src="/assets/images/brush-2.svg"
                  alt="brush"
                  className={styles.brushImage}
                />
              </span>
              &nbsp;&nbsp;&nbsp; Press Release
            </label>
            <br />
            could appear on
          </p>
        ) : (
          <div className={styles.animationSection}>
            <p
              className={styles.HighlightHeading}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Your
              <label className={styles.UniqueLabel}>
                <span className={styles.BrushSetup}>
                  <Image
                    src="/assets/images/brush-h-01.svg"
                    alt="brush"
                    className={styles.brushImage}
                  />
                </span>
                &nbsp;&nbsp;&nbsp; Press Release
              </label>
              &nbsp;&nbsp;&nbsp; could appear on
            </p>
          </div>
        )}
      </div>

      <div className={`Highlights`}>
        {/* <div class={styles.marquee}>
          <div className={styles.marqueeCover}>
            <div class={styles.marquee__inner} aria-hidden="true"> */}
        <Marquee speed={50} gradientColor={"none"}>
          <div className={styles.HighlightsWrraper}>
            {imagedata?.map((image, index) => (
              <div key={index + 1} className={styles.HighlightImage}>
                <Image
                  src={image}
                  alt="highlight-image"
                  fluid
                  className={styles.marqueeImage}
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      {/* </div>
        </div>
      </div> */}
    </ContainerWrraper>
  );
};

export default PressReleaseHighlights;
