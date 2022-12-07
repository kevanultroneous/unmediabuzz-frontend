import ContainerWrraper from "@/components/common/ContainerWrraper";
import GettingStarted from "@/components/common/GettingStarted";
import Layout from "@/components/common/Layout";
import { CardModel } from "@/components/common/RecentItems";
import HeroSection from "@/components/PR/HeroSection";
import { Accordion, Col, Row } from "react-bootstrap";
import styles from "@/styles/PR/index.module.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Pagination from "rc-pagination";
import CategorySidebar from "@/components/common/CategorySidebar";
import { useState } from "react";
import axios from "axios";
import {
  AllCategoryAPI,
  InternalSearchAPI,
  PressReleaseListAPI,
} from "utils/API";
import { MAIN_URL, specialcharacter, timestampToDate } from "utils/Anonymous";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

const PressRelease = ({ data }) => {
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

  const [currentTab, setCurrentTab] = useState(null);
  const [searchvalue, setSearchValue] = useState(
    router.query.search ? router.query.search : ""
  );

  const searchaction = () => {
    if (!searchvalue.length > 0) {
      toast.error("Search field is required !");
    }
    // else if (specialcharacter.test(searchvalue)) {
    //   toast.error("Special character is not allowed !");
    // }
    else {
      router.push(`/press-release?search=${searchvalue}`);
    }
  };

  return (
    <Layout
      title={"All Press Releases | News Releases | Submit Press Release Now"}
      description={
        "Explore all the latest news releases and press releases distributed by UNMedia Buzz. Submit Press Release and news release today."
      }
    >
      <Toaster position="top-center" reverseOrder={false} />
      <HeroSection
        keydown={(e) => {
          if (e.code === "Enter") {
            searchaction();
          }
        }}
        onchangesearch={(e) => setSearchValue(e.target.value)}
        searchButtonAction={searchaction}
        searchvalue={searchvalue}
      />
      <ContainerWrraper customClass={`${styles.TabsMainContainer}`}>
        <div className={styles.TabsLayer}>
          <div>
            <div
              className={`${styles.CurrentTab} ${
                router.pathname == "/press-release" ? styles.SelectedTab : null
              }`}
            >
              All Press Release
            </div>
          </div>

          {data.allcategories?.data.map((tab, index) => (
            <div key={index}>
              <div
                className={`${styles.CurrentTab} ${
                  index == currentTab ? styles.SelectedTab : null
                }`}
                onClick={() => {
                  setCurrentTab(index);
                  router.push(
                    `${`/${tab.title.replace(/\s+/g, "-").toLowerCase()}`}`
                  );
                }}
              >
                {tab.title}
              </div>
            </div>
          ))}
        </div>
      </ContainerWrraper>
      <ContainerWrraper customClass={`${styles.CardModelContainerWrraper}`}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={8} xl={9} className={`pe-0`}>
            {router.query.search ? (
              data?.internalSearch?.data[0]?.mainDoc.length == 0 ? (
                <h3>No data found</h3>
              ) : (
                data?.internalSearch?.data[0]?.mainDoc.map((value, index) => (
                  <CardModel
                    badge={value.paidStatus}
                    url={
                      value.slugUrl ? `/press-release/${value.slugUrl}` : `#`
                    }
                    coverimg={
                      value.featuredImage
                        ? MAIN_URL + value.featuredImage
                        : null
                    }
                    customtitleclass={`${styles.ParagraphSize}`}
                    key={index}
                    companyname={value.companyName}
                    title={value.title}
                    date={timestampToDate(value.releaseDate)}
                  />
                ))
              )
            ) : (
              data?.fetchlistOfPressReleaseList?.data[0]?.mainDoc.map(
                (value, index) => (
                  <CardModel
                    badge={value.paidStatus}
                    url={
                      value.slugUrl ? `/press-release/${value.slugUrl}` : `#`
                    }
                    coverimg={
                      value.featuredImage
                        ? MAIN_URL + value.featuredImage
                        : null
                    }
                    customtitleclass={`${styles.ParagraphSize}`}
                    key={index}
                    companyname={value.companyName}
                    title={value.title}
                    date={timestampToDate(value.releaseDate)}
                  />
                )
              )
            )}
          </Col>
          <Col
            xs={12}
            sm={12}
            md={5}
            lg={4}
            xl={3}
            className={`ColPaddingRemove`}
          >
            <CategorySidebar categorylist={data.allcategories?.data} />
          </Col>

          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={`ColPaddingRemove ${styles.CenterPagination}`}
          >
            {router.query.search
              ? data.internalSearch.data[0]?.totalCount > 30
              : data.fetchlistOfPressReleaseList.data[0]?.totalCount > 30 && (
                  <div className={styles.PaginationWrraper}>
                    <Pagination
                      showTitle={false}
                      defaultCurrent={router.query.page}
                      onChange={(v) => {
                        router.query.search
                          ? router.push(
                              `/press-release?search=${router.query.search}&page=${v}`
                            )
                          : router.push(`/press-release?page=${v}`);
                      }}
                      total={
                        router.query.search
                          ? data.internalSearch.data[0]?.totalCount
                          : data.fetchlistOfPressReleaseList.data[0]?.totalCount
                      }
                      itemRender={textItemRender}
                      pageSize={30}
                    />
                  </div>
                )}
          </Col>
        </Row>
      </ContainerWrraper>
      <GettingStarted />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const fetchlistOfPressReleaseList = await axios
    .post(PressReleaseListAPI, {
      limit: 30,
      page: context.query.page ? context.query.page : 1,
    })
    .then((res) => res.data)
    .catch((e) => console.log(e));
  const allcategories = await axios
    .get(AllCategoryAPI)
    .then((res) => res.data)
    .catch((e) => e);
  const internalSearch = await axios
    .post(InternalSearchAPI, {
      searchTerm: context.query.search,
      limit: 30,
      page: context.query.page ? context.query.page : 1,
    })
    .then((res) => res.data)
    .catch((e) => e);

  return {
    props: {
      data: {
        fetchlistOfPressReleaseList,
        allcategories,
        internalSearch,
      },
    },
  };
}

export default PressRelease;
