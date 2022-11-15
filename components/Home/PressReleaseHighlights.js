import ContainerWrraper from "../common/ContainerWrraper";
import { Row, Col, Image } from "react-bootstrap";
import styles from "@/styles/home/PressReleaseHighlights.module.css";

const PressReleaseHighlights = () => {
  const imagedata = [
    "/assets/images/highlight-1.svg",
    "/assets/images/highlight-2.svg",
    "/assets/images/highlight-3.svg",
    "/assets/images/highlight-4.svg",
    "/assets/images/highlight-5.svg",
  ];

  return (
    <ContainerWrraper customClass={`${styles.ContainerWrraperHighlight}`}>
      <div className={styles.HighlightHeadCover}>
        <p className={styles.HighlightHeading}>
          Your
          <label className={styles.UniqueLabel}>
            <span className={styles.BrushSetup}>
              <Image src="/assets/images/brush-h-01.svg" alt="brush" />
            </span>
            &nbsp;&nbsp;&nbsp; Press Release
          </label>
          &nbsp;&nbsp;&nbsp; could appear on
        </p>
      </div>

      <div className={styles.Highlights}>
        <div className={styles.HighlightsWrraper}>
          {imagedata?.map((image, index) => (
            <div key={index + 1} className={styles.HighlightImage}>
              <Image src={image} alt="highlight-image" fluid />
            </div>
          ))}
        </div>
      </div>
    </ContainerWrraper>
  );
};

export default PressReleaseHighlights;
