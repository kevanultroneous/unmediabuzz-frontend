import ContainerWrraper from "@/components/common/ContainerWrraper";
import GettingStarted from "@/components/common/GettingStarted";
import Layout from "@/components/common/Layout";
import { CardModel } from "@/components/common/RecentItems";
import CategoryHero from "@/components/PR/CategoryHero";
import styles from "@/styles/PR/Category.module.css";
import { Accordion, Col, Row } from "react-bootstrap";

const Category = () => {
  const arry = [1, 2, 3, 4, 5];

  return (
    <Layout>
      <CategoryHero />
      <ContainerWrraper customClass={`${styles.CardModelContainerWrraper}`}>
        <Row>
          <Col xs={12} sm={12} md={7} lg={8} xl={8}>
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
            xl={4}
            className={`ColPaddingRemove`}
          >
            <div className={`${styles.CategoryWrraper} CategoriesAccordion`}>
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
        </Row>
      </ContainerWrraper>
      <GettingStarted />
    </Layout>
  );
};

export default Category;
