import { Badge, Col, Image, Row } from "react-bootstrap";
import ContainerWrraper from "./ContainerWrraper";
import styles from "@/styles/common/RecentItems.module.css";
import ToggleUiButton from "./ToggleUiButton";
import { ButtonsList } from "utils/ButtonsList";
import RecentPressRelease from "./RecentPressRelease";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import Link from "next/link";
import { MAIN_URL, timestampToDate } from "utils/Anonymous";

export const CardModel = ({
  categoryname,
  title,
  date,
  hide,
  customtitleclass,
  companyname,
  badge,
  customcardmodelrow,
  coverimg,
  url,
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

        <p className={`${styles.PostTitle} ${customtitleclass}`}>
          <Link href={url} className={styles.LinkStyle}>
            {title}
          </Link>
        </p>
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
        {coverimg == null ? null : (
          <div className={styles.PostImage}>
            <Image
              src={coverimg}
              alt="coverimage"
              width={"100%"}
              className={styles.PostImageS}
            />
          </div>
        )}
      </Col>
      {!hide && <div className={styles.LineHorizontal}></div>}
    </Row>
  );
};

export const BlogsCardModel = ({
  title,
  date,
  hide,
  badge,
  companyName,
  coverimg,
  url,
}) => {
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
          <p className={styles.BlogPostTitle}>
            <Link href={url} className={styles.LinkStyle}>
              {title}
            </Link>
          </p>
          <p className={styles.CompanyName}>By, {companyName}</p>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
          className={` ${styles.BlogImageCol}`}
        >
          {coverimg == null ? null : (
            <Image src={coverimg} alt="coverimage" className={styles.BlogImg} />
          )}
        </Col>
      </Row>
      {!hide && <div className={styles.BlogLineHorizontal}></div>}
    </>
  );
};

const RecentItems = ({ postList, blogList }) => {
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
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
            <div className={styles.animationSection}>
              <h4
                className={styles.ListHeading}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Top <span className={styles.SpanText}>Buzz</span>
              </h4>
            </div>
            {postList.length > 0 ? (
              <>
                <ContainerWrraper
                  customClass={`${styles.ContainerWrraperCardModel}`}
                >
                  {postList.map((value, index) => (
                    <CardModel
                      key={index}
                      url={
                        value.slugUrl ? `press-release/${value.slugUrl}` : `#`
                      }
                      coverimg={
                        value?.featuredImage
                          ? MAIN_URL + value?.featuredImage
                          : null
                      }
                      badge={value.paidStatus}
                      companyname={`By, ${value?.companyName}`}
                      date={`${timestampToDate(value?.releaseDate)}`}
                      title={value?.title}
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
                    <ToggleUiButton
                      text={ButtonsList.viewCommon.source}
                      dark
                      url={ButtonsList.viewCommon.link}
                    />
                  </div>
                </Col>
              </>
            ) : (
              <h3 className="p-5">No Post</h3>
            )}
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
