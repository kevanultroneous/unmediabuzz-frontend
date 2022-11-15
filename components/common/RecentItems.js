import { Col, Image, Row } from "react-bootstrap";
import ContainerWrraper from "./ContainerWrraper";
import styles from "@/styles/common/RecentItems.module.css";
import ToggleUiButton from "./ToggleUiButton";
import { ButtonsList } from "utils/ButtonsList";

const CardModel = ({ categoryname, title, date, hide }) => {
  return (
    <Row className={styles.CardModelRow}>
      <Col xs={12} sm={12} md={2} lg={3} xl={3} className={`ColPaddingRemove`}>
        <div className={styles.PostImage}>
          <Image
            src="/assets/images/dummy-post.png"
            alt="coverimage"
            width={"100%"}
          />
        </div>
      </Col>
      <Col
        xs={12}
        sm={12}
        md={10}
        lg={9}
        xl={9}
        className={`ColPaddingRemove ${styles.PostDetails}`}
      >
        <p className={styles.CategoryName}>{categoryname}</p>
        <p className={styles.PostTitle}>{title}</p>
        <p className={styles.PostDate}>{date}</p>
      </Col>
      {!hide && <div className={styles.LineHorizontal}></div>}
    </Row>
  );
};

const BlogsCardModel = ({ title, date, hide }) => {
  return (
    <>
      <div className={styles.BlogsCard}>
        <div className={styles.BlogImageCover}>
          <Image
            src="/assets/images/dummy-post.png"
            alt="coverimage"
            className={styles.BlogImg}
          />
        </div>
        <div>
          <p className={styles.BlogPostTitle}>{title}</p>
          <p className={styles.BlogPostDate}>{date}</p>
        </div>
      </div>
      {!hide && <div className={styles.BlogLineHorizontal}></div>}
    </>
  );
};

const RecentItems = () => {
  const postList = [1, 2, 3, 4, 5];

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
            Recent <span className={styles.SpanText}>Press Release</span>
          </h4>

          <ContainerWrraper customClass={`${styles.ContainerWrraperCardModel}`}>
            {postList.map((v, i) => (
              <CardModel
                hide={postList.indexOf(postList.length) === i}
                key={i}
                categoryname={"Category"}
                date={"04 Novemeber 2022"}
                title={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
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
          <h4 className={styles.ListHeading}>
            Recent <span className={styles.SpanText}>Blogs</span>
          </h4>
          <ContainerWrraper
            customClass={`${styles.ContainerWrraperBlogCardModel}`}
          >
            {postList.map((v, i) => (
              <BlogsCardModel
                hide={postList.indexOf(postList.length) === i}
                key={i}
                categoryname={"Category"}
                date={"04 Novemeber 2022"}
                title={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                }
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
            <ToggleUiButton text={ButtonsList.pressReleaseCommon.source} dark />
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={5}
          className={`ColPaddingRemove`}
        >
          <div className={styles.ButtonOutCover}>
            <ToggleUiButton text={ButtonsList.blogpostCommon.source} dark />
          </div>
        </Col>
      </Row>
    </ContainerWrraper>
  );
};
export default RecentItems;
