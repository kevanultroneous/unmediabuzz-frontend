import ContainerWrraper from "@/components/common/ContainerWrraper";
import GettingStarted from "@/components/common/GettingStarted";
import Layout from "@/components/common/Layout";
import { CardModel } from "@/components/common/RecentItems";
import HeroSection from "@/components/PR/HeroSection";
import { Accordion, Col, Row } from "react-bootstrap";
import styles from "@/styles/PR/index.module.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useEffect, useState } from "react";

const PressRelease = () => {
  const arry = [1, 2, 3, 4, 5, 6, 7];
  const paginationData = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  const [currentPages, setCurrentPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(0);
  const [gapesStore, setGapesStore] = useState([]);
  const [gape, setGape] = useState(9);

  const targetedGapes = (gape) => {
    let gapesArray = [];
    for (let i = 1; i <= 10; i++) {
      gapesArray.push(gape * i);
    }
    return gapesArray;
  };

  useEffect(() => {
    setGapesStore(targetedGapes(gape));
  }, [gape]);

  useEffect(() => {
    if (selectedPage === -1) {
      setSelectedPage(paginationData.length - 1);
    }
    if (
      selectedPage === paginationData.length ||
      gapesStore.includes(selectedPage)
    ) {
      setSelectedPage(0);
    }
  }, [gapesStore, paginationData.length, selectedPage]);

  const handlePrevious = () => setSelectedPage(selectedPage - 1);
  const handleNext = () => setSelectedPage(selectedPage + 1);

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
              <div
                className={styles.ActionButtonCover}
                onClick={handlePrevious}
              >
                <BiChevronLeft />
              </div>
              <div>
                {paginationData?.map((page, index) =>
                  index == 9 ? (
                    <>
                      <label className={styles.PageNumber}>...</label>
                      <label className={styles.PageNumber}>
                        {paginationData[paginationData.length - 1]}
                      </label>
                    </>
                  ) : (
                    <>
                      {index > 9 ? null : (
                        <label
                          key={index}
                          className={`${
                            selectedPage === index
                              ? styles.SelectedNumber
                              : styles.PageNumber
                          }`}
                        >
                          {index + 1}
                        </label>
                      )}
                    </>
                  )
                )}
              </div>
              <div className={styles.ActionButtonCover} onClick={handleNext}>
                <BiChevronRight />
              </div>
            </div>
          </Col>
        </Row>
      </ContainerWrraper>
      <GettingStarted />
    </Layout>
  );
};

export default PressRelease;
