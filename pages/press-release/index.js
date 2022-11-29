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
import { PressReleaseListAPI } from "utils/API";
import { MAIN_URL } from "utils/Anonymous";
import { useRouter } from "next/router";

const PressRelease = ({ fetchlistOfPressReleaseList }) => {
  const router = useRouter();
  const arry = [1, 2, 3, 4, 5, 6, 7];
  const tabs = [
    "All Press Release",
    "Sports",
    "Art & Entertainment",
    "Categories",
    "Categories",
    "Categories",
  ];
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

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Layout>
      <HeroSection />
      <ContainerWrraper customClass={`${styles.TabsMainContainer}`}>
        <div className={styles.TabsLayer}>
          {tabs.map((tab, index) => (
            <div key={index}>
              <div
                className={`${styles.CurrentTab} ${
                  index == currentTab ? styles.SelectedTab : null
                }`}
                onClick={() => setCurrentTab(index)}
              >
                {tab}
              </div>
            </div>
          ))}
        </div>
      </ContainerWrraper>
      <ContainerWrraper customClass={`${styles.CardModelContainerWrraper}`}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={8} xl={8} className={`pe-0`}>
            {fetchlistOfPressReleaseList.data?.map((value, index) => (
              <CardModel
                url={() =>
                  router.push({
                    pathname: value.slugUrl
                      ? `press-release/${value.slugUrl}-${value._id}`
                      : `#`,
                  })
                }
                coverimg={MAIN_URL + value.featuredImage}
                customtitleclass={`${styles.ParagraphSize}`}
                key={index}
                companyname={value.companyName}
                title={value.title}
                date={"04 Novemeber 2022"}
              />
            ))}
          </Col>
          <Col
            xs={12}
            sm={12}
            md={5}
            lg={4}
            xl={4}
            className={`ColPaddingRemove`}
          >
            <CategorySidebar />
          </Col>
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
        </Row>
      </ContainerWrraper>
      <GettingStarted />
    </Layout>
  );
};

export async function getServerSideProps() {
  const fetchlistOfPressReleaseList = await axios
    .post(PressReleaseListAPI)
    .then((res) => res.data)
    .catch((e) => console.log(e));
  return {
    props: {
      fetchlistOfPressReleaseList,
    },
  };
}

export default PressRelease;
