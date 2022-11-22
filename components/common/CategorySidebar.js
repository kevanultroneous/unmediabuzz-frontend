import { Accordion } from "react-bootstrap";
import styles from "@/styles/common/CategorySidebar.module.css";

const CategorySidebar = () => {
  const arry = [1, 2, 3, 4, 5, 6];
  return (
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
            <Accordion.Body>
              <p>Subcategory</p>
              <p>Subcategory</p>
              <p>Subcategory</p>
              <p>Subcategory</p>
              <p>Subcategory</p>
              <p>Subcategory</p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default CategorySidebar;
