import ContainerWrraper from "@/components/common/ContainerWrraper";
import GettingStarted from "@/components/common/GettingStarted";
import Layout from "@/components/common/Layout";
import Pagination from "@/components/common/Pagination";
import { CardModel } from "@/components/common/RecentItems";
import CategoryHero from "@/components/PR/CategoryHero";
import styles from "@/styles/PR/Category.module.css";
import { useEffect, useState } from "react";
import { Accordion, Col, Row } from "react-bootstrap";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Category = () => {
  const arry = [1, 2, 3, 4, 5];
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
      <CategoryHero />
      <ContainerWrraper customClass={`${styles.CardModelContainerWrraper}`}>
        <Row>
          <Col xs={12} sm={12} md={7} lg={8} xl={9}>
            {arry.map((value, index) => (
              <CardModel
                customtitleclass={`${styles.ParagraphSize}`}
                hide={arry.indexOf(arry.length) === index}
                key={index}
                categoryname={"Category"}
                title={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum is simply dummy text of the printing and typesetting industry."
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
            className={`ColPaddingRemove`}
          >
            <div className={`${styles.CategoryWrraper} CategoriesAccordion`}>
              <div className={styles.CategoryHeadingWrrap}>
                <p className={styles.CategoryHeading}>Category Name</p>
              </div>
              <div className={styles.SubCategoryWrraper}>
                {arry.map((subcategory, index) => (
                  <div
                    key={index}
                    className={styles.SubCategoryText}
                  >{`Sub Category ${index + 1}`}</div>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Pagination
              paginationData={paginationData}
              gape={9}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              selectedPage={selectedPage}
              // handlepageclick={() => }
            />
          </Col>
        </Row>
      </ContainerWrraper>
      <GettingStarted />
    </Layout>
  );
};

export default Category;
