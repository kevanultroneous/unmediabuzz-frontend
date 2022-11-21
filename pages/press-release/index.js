import ContainerWrraper from "@/components/common/ContainerWrraper";
import GettingStarted from "@/components/common/GettingStarted";
import Layout from "@/components/common/Layout";
import { CardModel } from "@/components/common/RecentItems";
import HeroSection from "@/components/PR/HeroSection";
import { Accordion, Col, Row } from "react-bootstrap";
import styles from "@/styles/PR/index.module.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useEffect, useState } from "react";
import Pagination from "rc-pagination";

const PressRelease = () => {
  const arry = [1, 2, 3, 4, 5, 6, 7];

  const textItemRender = (current, type, element) => {
    if (type === "page") {
      return (
        <label className={`${styles.PageNumber} SelectedNum`}>{current}</label>
      );
    }
    if (type === "prev") {
      return (
        <div className={styles.ActionButtonCover}>
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
      <HeroSection />

      <ContainerWrraper customClass={`${styles.CardModelContainerWrraper}`}>
        <Row>
          <Col xs={12} sm={12} md={7} lg={8} xl={8}>
            {arry.map((value, index) => (
              <CardModel
                customtitleclass={`${styles.ParagraphSize}`}
                hide={arry.indexOf(arry.length) === index}
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
            xl={4}
            className={`ColPaddingRemove`}
          >
            <div
              className={`${styles.CategoryWrraper} CategoriesAccordion CustomArrow`}
            >
              <div className={styles.CategoryHeadingWrrap}>
                <p className={styles.CategoryHeading}>CATEGORIES</p>
              </div>
              <div className={styles.AllPrLabelWrap}>
                <p className={styles.AllPrLabel}>All Press Release</p>
              </div>
              <Accordion defaultActiveKey="0">
                {arry.map((category, index) => (
                  <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>Category</Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
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

export default PressRelease;
