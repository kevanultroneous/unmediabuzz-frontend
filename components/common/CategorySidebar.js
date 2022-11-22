import { Accordion } from "react-bootstrap";
import styles from "@/styles/common/CategorySidebar.module.css";

const CategorySidebar = () => {
  const arry = ["Sports", "Art & Entertainment", "Category 3", "Category 4"];
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
            <Accordion.Header>{category}</Accordion.Header>
            <Accordion.Body>
              <div className={styles.SubcategoryWrraper}>
                {[
                  "Subcategory 1",
                  "Subcategory 2",
                  "Subcategory 3",
                  "Subcategory 4",
                ].map((subcategory, index) => (
                  <p key={subcategory} className={styles.SubcategoryText}>
                    {subcategory}
                  </p>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default CategorySidebar;
