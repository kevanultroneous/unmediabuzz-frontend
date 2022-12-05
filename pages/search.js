import ContainerWrraper from "@/components/common/ContainerWrraper";
import GettingStarted from "@/components/common/GettingStarted";
import Layout from "@/components/common/Layout";
import { Col, Row } from "react-bootstrap";
import { IoIosArrowRoundBack } from "react-icons/io";
import styles from "@/styles/SearchResult.module.css";
import { CardModel } from "@/components/common/RecentItems";
import Pagination from "rc-pagination";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import { GlobalSearchAPI } from "utils/API";
import { MAIN_URL, timestampToDate } from "utils/Anonymous";

const SearchResult = ({ data }) => {
  const router = useRouter();

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
            <IoIosArrowRoundBack
              size={40}
              className={styles.IconWrraping}
              onClick={() => router.back()}
            />
            <div className={styles.SearchHeading}>
              <h4 className={styles.SearchHeadingText}>
                Search result for{" "}
                <span className={styles.SpanText}>
                  “{router.query.searching}”
                </span>
              </h4>
              <p className={styles.SmallText}>
                {data?.searchdata[0]?.totalCount} Lists are found.
              </p>
            </div>
          </Col>
        </Row>
      </ContainerWrraper>
      <ContainerWrraper customClass={`${styles.PostsWrraper}`}>
        <Row>
          {data?.searchdata[0]?.mainDoc.map((item, index) => (
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
                url={
                  item.postType == "press"
                    ? `/press-release/${item.slugUrl}`
                    : "#"
                }
                coverimg={MAIN_URL + item.featuredImage}
                badge={item.paidStatus}
                companyname={`By, ${item.companyName}`}
                date={timestampToDate(item.releaseDate)}
                title={item.title}
              />
            </Col>
          ))}
        </Row>
        {data?.searchdata[0]?.totalCount > 30 && (
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={`ColPaddingRemove ${styles.CenterPagination}`}
          >
            <div className={styles.PaginationWrraper}>
              <Pagination
                showTitle={false}
                defaultCurrent={router.query.page}
                onChange={(v) =>
                  router.push(
                    `/search?searching=${router.query.searching}&page=${v}`
                  )
                }
                total={data?.searchdata[0]?.totalCount}
                itemRender={textItemRender}
                pageSize={30}
              />
            </div>
          </Col>
        )}
      </ContainerWrraper>
      <GettingStarted />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const data = await axios
    .post(GlobalSearchAPI, {
      searchTerm: context.query.searching,
      limit: 30,
      page: context.query.page ? context.query.page : 1,
    })
    .then((res) => res.data.data)
    .catch((e) => e);
  return {
    props: {
      data: { searchdata: data },
    },
  };
}
export default SearchResult;
