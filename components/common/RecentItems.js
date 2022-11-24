import { Badge, Col, Image, Row } from "react-bootstrap";
import ContainerWrraper from "./ContainerWrraper";
import styles from "@/styles/common/RecentItems.module.css";
import ToggleUiButton from "./ToggleUiButton";
import { ButtonsList } from "utils/ButtonsList";
import RecentPressRelease from "./RecentPressRelease";

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
        md={9}
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
        {!hide && <div className={styles.LineHorizontalMob}></div>}
      </Col>
      <Col
        xs={12}
        sm={12}
        md={3}
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

export const BlogsCardModel = ({ title, date, hide, badge }) => {
  return (
    <>
      <Row className={styles.BlogsCardModelReverse}>
        <Col
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          className={`${styles.DetailCol} `}
        >
          <p className={styles.BlogPostDate}>
            {date}
            {badge && (
              <span className={styles.Badge}>
                <Image src="/assets/icons/l-speaker.svg" alt="badge" /> Buzzed
              </span>
            )}
          </p>
          <p className={styles.BlogPostTitle}>{title}</p>
          <p className={styles.CompanyName}>By, XYZ Company Name</p>
        </Col>
        <Col
          xs={12}
          sm={12}
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
    <>
      <ContainerWrraper customClass={`${styles.ContainerWrraperRecentItems}`}>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={7}
            xl={7}
            className={`ColPaddingRemove`}
          >
            <h4 className={styles.ListHeading}>
              Top <span className={styles.SpanText}>Buzz</span>
            </h4>
            <ContainerWrraper
              customClass={`${styles.ContainerWrraperCardModel}`}
            >
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
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={7}
              xl={7}
              className={`ColPaddingRemove`}
            >
              <div className={styles.ButtonOutCover}>
                <ToggleUiButton text={ButtonsList.viewCommon.source} dark />
              </div>
            </Col>
          </Col>

          {/* we hide this component on Mobile */}
          <RecentPressRelease
            blogList={blogList}
            hideclass={styles.HideBlogListOnMobile}
          />
        </Row>
      </ContainerWrraper>

      {/* for mobile  
          why you make this differently ? : container need to remove side spaces and full view but 
        here we use row col so we can't  remove space so we make RecentPressRelease Component
      */}

      <ContainerWrraper customClass={`${styles.MobileRPRwrraper}`}>
        <Row>
          <RecentPressRelease
            blogList={blogList}
            hideclass={styles.HideBlogListOnDesk}
          />
        </Row>
      </ContainerWrraper>
    </>
  );
};
export default RecentItems;
