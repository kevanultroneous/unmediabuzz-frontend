import { Accordion } from "react-bootstrap";
import styles from "@/styles/common/CategorySidebar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const CategorySidebar = ({ categorylist }) => {
  const router = useRouter();
  return (
    <div
      className={`${styles.CategoryWrraper}  CategoriesAccordion CustomArrow CategoryScroll`}
    >
      <div className={styles.CategoryHeadingWrrap}>
        <p className={styles.CategoryHeading}>CATEGORIES</p>
      </div>
      <div className={styles.AllPrLabelWrap}>
        <p className={styles.AllPrLabel}>All Press Release</p>
      </div>
      <Accordion defaultActiveKey={router.query?.category}>
        {categorylist.map((category, index) => (
          <Accordion.Item
            eventKey={category?.title}
            key={index}
            className={
              router.query.category == category.title &&
              router.query.subcategory
                ? "CategoriesAccordionforUrl"
                : ""
            }
          >
            <Link href={`/${category?.title}`}>
              <Accordion.Header>{category.title}</Accordion.Header>
            </Link>
            <Accordion.Body>
              <div className={styles.SubcategoryWrraper}>
                {category.subcategories.map((subcategory, index) => (
                  <Link
                    href={`/${category?.title}/${subcategory.title}`}
                    key={subcategory.title}
                  >
                    <p
                      className={`${
                        router.query.subcategory === subcategory.title
                          ? styles.SelectedSubcategoryText
                          : styles.SubcategoryText
                      }`}
                    >
                      {subcategory.title}
                    </p>
                  </Link>
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
