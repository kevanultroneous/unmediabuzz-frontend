import { Col } from "react-bootstrap";
import ContainerWrraper from "./ContainerWrraper";
import { BlogsCardModel } from "./RecentItems";
import styles from "@/styles/common/RecentItems.module.css";
import { useEffect } from "react";
import Aos from "aos";

const RecentPressRelease = ({ blogList, hideclass }) => {
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    <Col xs={12} sm={12} md={12} lg={5} xl={5} className={hideclass}>
      <h4
        className={`${styles.ListHeading} ${styles.ListHeadingSpace} `}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Recent <span className={styles.SpanText}>Press Release</span>
      </h4>
      <ContainerWrraper customClass={`${styles.ContainerWrraperBlogCardModel}`}>
        {blogList.map((v, i) => (
          <BlogsCardModel
            badge={i == 0}
            hide={i === blogList.indexOf(blogList.length)}
            key={i}
            categoryname={"Category"}
            date={"31 March 2022"}
            title={"Lorem Ipsum is simply dummy text of the printing."}
          />
        ))}
      </ContainerWrraper>
    </Col>
  );
};

export default RecentPressRelease;
