import ContainerWrraper from "@/components/common/ContainerWrraper";
import GettingStarted from "@/components/common/GettingStarted";
import Layout from "@/components/common/Layout";
import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/ComingSoon.module.css";

const ComingSoon = () => {
  return (
    <Layout>
      <ContainerWrraper customClass={`${styles.CustomContainerWrraper}`}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Image src="/assets/images/big-speaker.svg" alt="coming-soon" />
            <h4 className={styles.ComingSoonText}>Coming Soon...</h4>
          </Col>
        </Row>
      </ContainerWrraper>
      <GettingStarted />
    </Layout>
  );
};

export default ComingSoon;
