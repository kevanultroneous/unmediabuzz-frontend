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
        <p
          className={
            router.pathname === "/press-release"
              ? styles.SelectedAllPrLabel
              : styles.AllPrLabel
          }
        >
          <Link href="/press-release">All Press Release</Link>
        </p>
      </div>
      <Accordion
        defaultActiveKey={
          router.query.category
            ? router.query.category.replace(/-/g, " ")
            : null
        }
      >
        {categorylist.map((category, index) => (
          <Accordion.Item
            eventKey={category?.title}
            key={index}
            className={
              router.query.category
                ? router.query.category.replace(/-/g, " ") == category.title &&
                  router.query.subcategory
                  ? "CategoriesAccordionforUrl"
                  : ""
                : null
            }
          >
            <Link href={`/${category?.title.replace(/\s+/g, "-")}`}>
              <Accordion.Header>{category.title}</Accordion.Header>
            </Link>
            <Accordion.Body>
              <div className={styles.SubcategoryWrraper}>
                {category.subcategories.map((subcategory, index) => (
                  <Link
                    href={`/${category?.title.replace(
                      /\s+/g,
                      "-"
                    )}/${subcategory.title.replace(/\s+/g, "-")}`}
                    key={subcategory.title}
                  >
                    <p
                      className={`${
                        router.query.subcategory?.replace(/-/g, " ") ===
                        subcategory.title
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
