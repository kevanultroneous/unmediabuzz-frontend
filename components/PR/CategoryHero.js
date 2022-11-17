import { Row, Col, Image } from "react-bootstrap";
import ContainerWrraper from "../common/ContainerWrraper";
import styles from "@/styles/PR/CategoryHero.module.css";

const CategoryHero = () => {
  return (
    <ContainerWrraper customClass={`${styles.HeroSectionContainerWrraper}`}>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={`ColPaddingRemove ${styles.HeroSectionChildsCol}`}
        >
          <p className={styles.SmallText}>
            <span>
              <Image src="/assets/icons/speaker.svg" alt="speaker" />
            </span>
            Press Release
          </p>
          <h4 className={styles.MainHeading}>Category Name</h4>
        </Col>
      </Row>
    </ContainerWrraper>
  );
};

export default CategoryHero;
