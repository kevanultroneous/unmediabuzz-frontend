import styles from "@/styles/common/Testimonial.module.css";
import { Col, Image, Row } from "react-bootstrap";
import ContainerWrraper from "./ContainerWrraper";
import { FaRegStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <ContainerWrraper customClass={`${styles.ContainerWrraperTestimonial}`}>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={`ColPaddingRemove`}
        >
          <h6 className={styles.MainHeading}>
            Trusted by our Clients
            <span className={styles.MainHeadingBrush}>
              <Image src="/assets/icons/brush-4.svg" alt="brush" />
            </span>
          </h6>
        </Col>
        {[1, 2, 3, 4].map((v, i) => (
          <Col
            xs={12}
            sm={12}
            md={3}
            lg={3}
            xl={3}
            key={i}
            className={`ColPaddingRemove`}
          >
            <div className={styles.TestimonialCard}>
              <div className={styles.Profile}>
                <div>
                  <Image src="/assets/icons/avatar.svg" alt="filled" />
                </div>
                <div className={styles.ProfileDetails}>
                  <p className={styles.UserName}>Bette Davis</p>
                  <p className={styles.Designation}>Designation</p>
                </div>
              </div>
              <div>
                <Image src="/assets/icons/full-star.svg" alt="filled" />
                <Image src="/assets/icons/full-star.svg" alt="filled" />
                <Image src="/assets/icons/full-star.svg" alt="filled" />
                <Image src="/assets/icons/full-star.svg" alt="filled" />
                <Image src="/assets/icons/full-star.svg" alt="filled" />
              </div>
              <p className={styles.ProfileDescription}>
                In Tier 1 Pro distribution package you get 225 media outlets
                distribution with Google News, Marketwatch, Financial Network
                Distribution, Marketmedia Distribution, Google News Network
                Distribution, 9K-15K extra impression in popular sites.
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </ContainerWrraper>
  );
};

export default Testimonial;
