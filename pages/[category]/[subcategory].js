import CategorySidebar from "@/components/common/CategorySidebar";
import ContainerWrraper from "@/components/common/ContainerWrraper";
import GettingStarted from "@/components/common/GettingStarted";
import Layout from "@/components/common/Layout";
import { CardModel } from "@/components/common/RecentItems";
import CategoryHero from "@/components/PR/CategoryHero";
import styles from "@/styles/PR/Category.module.css";
import Pagination from "rc-pagination";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Subcategory = () => {
  const arry = [1, 2, 3, 4];
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [
    "All Press Release",
    "Sports",
    "Art & Entertainment",
    "Categories",
    "Categories",
    "Categories",
    "Categories",
    "Categories",
    "Categories",
    "Categories",
    "Categories",
    "Categories",
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

  return (
    <Layout>
      <CategoryHero
        heading={"Cricket"}
        breadcumb={"Home/ Press Release/ Sports/ Cricket"}
      />
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
          <Col xs={12} sm={12} md={12} lg={8} xl={9}>
            {arry.map((value, index) => (
              <CardModel
                url={"#"}
                customtitleclass={`${styles.ParagraphSize}`}
                key={index}
                categoryname={"By, XYZ Company Name"}
                title={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing."
                }
                date={"04 Novemeber 2022"}
              />
            ))}
          </Col>
          <Col
            xs={12}
            sm={12}
            md={5}
            lg={4}
            xl={3}
            className={`ColPaddingRemove ${styles.HideCategorySidebar}`}
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
              <Pagination
                total={320}
                itemRender={textItemRender}
                pageSize={7}
              />
            </div>
          </Col>
        </Row>
      </ContainerWrraper>
      <GettingStarted />
    </Layout>
  );
};

export default Subcategory;
