import { Col } from "react-bootstrap";
import ContainerWrraper from "./ContainerWrraper";
import { BlogsCardModel } from "./RecentItems";
import styles from "@/styles/common/RecentItems.module.css";
import { useEffect } from "react";
import Aos from "aos";
import { MAIN_URL, timestampToDate } from "utils/Anonymous";

const RecentPressRelease = ({ blogList, hideclass }) => {
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    <Col xs={12} sm={12} md={12} lg={5} xl={5} className={hideclass}>
      <div className={styles.animationSection}>
        <h4
          className={`${styles.ListHeading} ${styles.ListHeadingSpace} `}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Recent <span className={styles.SpanText}>Press Release</span>
        </h4>
      </div>
      <ContainerWrraper customClass={`${styles.ContainerWrraperBlogCardModel}`}>
        {blogList.map((value, index) => (
          <BlogsCardModel
            companyName={value.companyName}
            badge={parseInt(value.totalPaidAmount) > 0}
            hide={index === blogList.length - 1}
            key={index}
            date={`${timestampToDate(value.releaseDate)}`}
            title={value.title}
            coverimg={MAIN_URL + value.featuredImage}
          />
        ))}
      </ContainerWrraper>
    </Col>
  );
};

export default RecentPressRelease;
