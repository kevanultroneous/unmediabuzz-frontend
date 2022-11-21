import { Badge, Col, Image, Row } from "react-bootstrap";
import ContainerWrraper from "./ContainerWrraper";
import styles from "@/styles/common/RecentItems.module.css";
import ToggleUiButton from "./ToggleUiButton";
import { ButtonsList } from "utils/ButtonsList";

export const CardModel = ({
  categoryname,
  title,
  date,
  hide,
  customtitleclass,
  companyname,
  badge,
  customcardmodelrow,
}) => {
  return (
    <Row className={`${styles.CardModelRow} ${customcardmodelrow}`}>
      <Col
        xs={12}
        sm={12}
        md={10}
        lg={9}
        xl={9}
        className={`ColPaddingRemove ${styles.PostDetails}`}
      >
        <p className={styles.PostDate}>
          {date}
          {badge && (
            <span className={styles.Badge}>
              <Image src="/assets/icons/l-speaker.svg" alt="badge" /> Buzzed
            </span>
          )}
        </p>
        <p className={`${styles.PostTitle} ${customtitleclass}`}>{title}</p>
        <p className={styles.CategoryName}>{categoryname || companyname}</p>
      </Col>
      <Col
        xs={12}
        sm={12}
        md={2}
        lg={3}
        xl={3}
        className={`ColPaddingRemove ${styles.PostImageCol}`}
      >
        <div className={styles.PostImage}>
          <Image
            src="/assets/images/dummy-post.png"
            alt="coverimage"
            width={"100%"}
          />
        </div>
      </Col>
      {!hide && <div className={styles.LineHorizontal}></div>}
    </Row>
  );
};

const BlogsCardModel = ({ title, date, hide }) => {
  return (
    <>
      <Row>
        <Col
          xs={8}
          sm={8}
          md={8}
          lg={8}
          xl={8}
          className={`${styles.DetailCol}`}
        >
          <p className={styles.BlogPostDate}>{date}</p>
          <p className={styles.BlogPostTitle}>{title}</p>
          <p className={styles.CompanyName}>By, XYZ Company Name</p>
        </Col>
        <Col
          xs={4}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          className={` ${styles.BlogImageCol}`}
        >
          <Image
            src="/assets/images/dummy-post.png"
            alt="coverimage"
            className={styles.BlogImg}
          />
        </Col>
      </Row>
      {!hide && <div className={styles.BlogLineHorizontal}></div>}
    </>
  );
};

const RecentItems = () => {
  const postList = [1, 2, 3, 4];
  const blogList = [1, 2, 3, 4, 5, 6];
  return (
    <ContainerWrraper customClass={`${styles.ContainerWrraperRecentItems}`}>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={7}
          lg={7}
          xl={7}
          className={`ColPaddingRemove`}
        >
          <h4 className={styles.ListHeading}>
            Top <span className={styles.SpanText}>Buzz</span>
          </h4>
          <ContainerWrraper customClass={`${styles.ContainerWrraperCardModel}`}>
            {postList.map((v, i) => (
              <CardModel
                badge={i == 0 || i == 3 || i == 2}
                key={i}
                companyname={"By, XYZ Company Name"}
                date={"04 Novemeber 2022"}
                title={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing."
                }
              />
            ))}
          </ContainerWrraper>
        </Col>

        <Col
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={5}
          className={`ColPaddingRemove`}
        >
          <h4 className={`${styles.ListHeading} ${styles.ListHeadingSpace}`}>
            Recent <span className={styles.SpanText}>Press Release</span>
          </h4>
          <ContainerWrraper
            customClass={`${styles.ContainerWrraperBlogCardModel}`}
          >
            {blogList.map((v, i) => (
              <BlogsCardModel
                hide={i === blogList.indexOf(blogList.length)}
                key={i}
                categoryname={"Category"}
                date={"31 March 2022"}
                title={"Lorem Ipsum is simply dummy text of the printing."}
              />
            ))}
          </ContainerWrraper>
        </Col>

        {/* action buttons */}
        <Col
          xs={12}
          sm={12}
          md={7}
          lg={7}
          xl={7}
          className={`ColPaddingRemove`}
        >
          <div className={styles.ButtonOutCover}>
            <ToggleUiButton text={ButtonsList.viewCommon.source} dark />
          </div>
        </Col>
      </Row>
    </ContainerWrraper>
  );
};
export default RecentItems;
