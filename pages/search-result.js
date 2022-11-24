import ContainerWrraper from "@/components/common/ContainerWrraper";
import GettingStarted from "@/components/common/GettingStarted";
import Layout from "@/components/common/Layout";
import { Col, Row } from "react-bootstrap";
import { IoIosArrowRoundBack } from "react-icons/io";
import styles from "@/styles/SearchResult.module.css";
import { CardModel } from "@/components/common/RecentItems";
import Pagination from "rc-pagination";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const SearchResult = () => {
  const textItemRender = (current, type, element) => {
    if (type === "page") {
      return (
        <label className={`${styles.PageNumber} SelectedNum`}>{current}</label>
      );
    }
    if (type === "prev") {
      return (
        <div className={`${styles.ActionButtonCover} ${styles.PrevButton}`}>
          <BiChevronLeft />
        </div>
      );
    }
    if (type === "next") {
      return (
        <div className={styles.ActionButtonCover}>
          <BiChevronRight />
        </div>
      );
    }
    return element;
  };

  return (
    <Layout>
      <ContainerWrraper customClass={`${styles.HeaderContainerWrraper}`}>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={`ColPaddingRemove`}
          >
            <IoIosArrowRoundBack size={40} className={styles.IconWrraping} />
            <div className={styles.SearchHeading}>
              <h4 className={styles.SearchHeadingText}>
                Search result for{" "}
                <span className={styles.SpanText}>
                  “Information Technology”
                </span>
              </h4>
              <p className={styles.SmallText}>200 Lists are found.</p>
            </div>
          </Col>
        </Row>
      </ContainerWrraper>
      <ContainerWrraper customClass={`${styles.PostsWrraper}`}>
        <Row>
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              key={index}
              className={`pe-0`}
            >
              <CardModel
                companyname={"By, XYZ Company Name"}
                date={"04 Novemeber 2022"}
                title={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing."
                }
              />
            </Col>
          ))}
        </Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={`ColPaddingRemove ${styles.CenterPagination}`}
        >
          <div className={styles.PaginationWrraper}>
            <Pagination total={320} itemRender={textItemRender} />
          </div>
        </Col>
      </ContainerWrraper>
      <GettingStarted />
    </Layout>
  );
};

export default SearchResult;
