import { Col } from "react-bootstrap";
import ContainerWrraper from "./ContainerWrraper";
import { BlogsCardModel } from "./RecentItems";
import styles from "@/styles/common/RecentItems.module.css";

const RecentPressRelease = ({ blogList, hideclass }) => {
  return (
    <Col xs={12} sm={12} md={5} lg={5} xl={5} className={hideclass}>
      <h4 className={`${styles.ListHeading} ${styles.ListHeadingSpace} `}>
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
