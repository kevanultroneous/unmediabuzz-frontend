import ContainerWrraper from "./ContainerWrraper";
import { Row, Col, Image, Button } from "react-bootstrap";
import styles from "@/styles/common/GettingStarted.module.css";
import ToggleUiButton from "./ToggleUiButton";
import { ButtonsList } from "utils/ButtonsList";

const GettingStarted = () => {
  return (
    <ContainerWrraper customClass={`${styles.ContainerWrraperSpaces}`}>
      <Row className={styles.GettingStartedCard}>
        <Col
          xs={12}
          sm={12}
          md={7}
          lg={7}
          xl={7}
          className={`ColPaddingRemove`}
        >
          <div className={styles.LeftSideMainWrraper}>
            <div>
              {/* <Image
                src="/assets/icons/right-curve.svg"
                alt="right-curve"
                className={styles.RightCurve}
                fluid
              /> */}
            </div>
            <div className={styles.DiscriptionWrapper}>
              <p className={styles.SimpleHeading}>Ready To Start Getting</p>
              <p className={styles.GradiantHeading}>Media Coverage</p>
              <p className={styles.SimpleHeading}>in all over the World ?</p>
            </div>
          </div>

          <div className={styles.ButtonsMainWrraper}>
            <div className={styles.ButtonCover}>
              <ToggleUiButton
                text={ButtonsList.letsStart.source}
                url={ButtonsList.letsStart.link}
              />
            </div>
          </div>
        </Col>

        <Col
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={5}
          className={`${styles.WorldImage} ColPaddingRemove`}
        >
          <div className={styles.WorldImageCover}>
            {/* <Image
              src="/assets/images/globenet2.png"
              alt="world"
              className={styles.WorldImageFluid}
            /> */}
          </div>
          {/* <div className={styles.earth}></div> */}
        </Col>
      </Row>
    </ContainerWrraper>
  );
};
export default GettingStarted;
