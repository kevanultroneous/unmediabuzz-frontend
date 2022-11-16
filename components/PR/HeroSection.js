import { Col, Form, InputGroup, Row } from "react-bootstrap";
import ContainerWrraper from "../common/ContainerWrraper";
import styles from "@/styles/PR/HeroSection.module.css";
import { FiSearch } from "react-icons/fi";

const HeroSection = () => {
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
          <h4 className={styles.MainHeading}>Read me, I am knowledgeable </h4>
          <div className={styles.InputGroupMainWrraper}>
            <InputGroup className={styles.InputGroup}>
              <Form.Control
                className={styles.GroupInput}
                placeholder="Search Press Release"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
              <InputGroup.Text
                id="inputGroup-sizing-sm"
                className={styles.SearchButton}
              >
                <FiSearch size={25} />
              </InputGroup.Text>
            </InputGroup>
          </div>
        </Col>
      </Row>
    </ContainerWrraper>
  );
};

export default HeroSection;
