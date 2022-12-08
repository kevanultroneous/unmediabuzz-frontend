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
        <h2
          className={`${styles.ListHeading} ${styles.ListHeadingSpace} `}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Recent <span className={styles.SpanText}>Press Release</span>
        </h2>
      </div>
      {blogList.length > 0 ? (
        <ContainerWrraper
          customClass={`${styles.ContainerWrraperBlogCardModel}`}
        >
          {blogList.map((value, index) => (
            <BlogsCardModel
              url={value.slugUrl ? `press-release/${value.slugUrl}` : `#`}
              companyName={value.companyName}
              badge={value.paidStatus}
              hide={index === blogList.length - 1}
              key={index}
              date={`${timestampToDate(value.releaseDate)}`}
              title={value.title}
              coverimg={
                value.featuredImage ? MAIN_URL + value.featuredImage : null
              }
            />
          ))}
        </ContainerWrraper>
      ) : (
        <h3 className="p-5">No Post</h3>
      )}
    </Col>
  );
};

export default RecentPressRelease;
