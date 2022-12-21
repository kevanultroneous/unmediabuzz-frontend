import dynamic from "next/dynamic";
const ContainerWrraper = dynamic(() =>
  import("@/components/common/ContainerWrraper")
);
import Layout from "@/components/common/Layout";
import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/Thankyou.module.css";
import useResponsiveViewer from "hooks/ResponsiveViewer";
export default function Thankyou() {
  const isMobile = useResponsiveViewer();
  return (
    <Layout>
      <ContainerWrraper customClass={styles.ContainerWrraperCustom}>
        <Row className={styles.MainRow}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <h3 className={styles.TitleText}>
              Thankyou! We’ll get back
              <br />
              to you soon.
            </h3>
            {/* <Image
              src="/assets/images/brush-3.svg"
              alt="brush-img"
              className={styles.Brushwidth}
            /> */}
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
    </Layout>
  );
}
