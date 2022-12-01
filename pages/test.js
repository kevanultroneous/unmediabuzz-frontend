import styles from "@/styles/test.module.css";
const { Image, Row, Col } = require("react-bootstrap");

const Test = () => {
  return (
    <>
      <Row>
        <div className={styles.parentSection}>
          <Col xl={12}>
            <h1>Hello</h1>
            <p>
              Cut through the yawns, grab your audience’s attention, and turn
              passive attendees into active participants{" "}
            </p>
          </Col>
          {/* <Col xl={8}>
            <div className={styles.backImage}></div>
          </Col> */}
        </div>
      </Row>
    </>
  );
};

export default Test;
