import { Row, Col, Image } from "react-bootstrap";
import ContainerWrraper from "../common/ContainerWrraper";
import styles from "@/styles/PR/CategoryHero.module.css";

const CategoryHero = ({ heading, breadcumb }) => {
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
          <h1 className={styles.MainHeading}>{heading}</h1>
          <p className={styles.BreadCumb}>{breadcumb}</p>
        </Col>
      </Row>
    </ContainerWrraper>
  );
};

export default CategoryHero;
