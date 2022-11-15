import { Col, Image, Row } from "react-bootstrap";
import ContainerWrraper from "./ContainerWrraper";
import styles from "@/styles/common/RecentItems.module.css";
import ToggleUiButton from "./ToggleUiButton";
import { ButtonsList } from "utils/ButtonsList";

const CardModel = ({ categoryname, title, date, hide }) => {
  return (
    <Row className={styles.CardModelRow}>
      <Col xs={12} sm={12} md={2} lg={4} xl={4} className={`ColPaddingRemove`}>
        <div>
          <Image src="/assets/images/dummy-post.png" alt="coverimage" />
        </div>
      </Col>
      <Col
        xs={12}
        sm={12}
        md={10}
        lg={8}
        xl={8}
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

const RecentItems = () => {
  const postList = [1, 2, 3, 4, 5];

  return (
    <ContainerWrraper>
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
        ></Col>
      </Row>
    </ContainerWrraper>
  );
};
export default RecentItems;
