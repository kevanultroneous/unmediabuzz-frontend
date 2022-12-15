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
            eventKey={category?.title.toLowerCase()}
            key={index}
            className={
              router.query.category
                ? router.query.category.replace(/-/g, " ") ==
                    category.title.toLowerCase() && router.query.subcategory
                  ? "CategoriesAccordionforUrl"
                  : ""
                : null
            }
          >
            <Accordion.Header>
              <Link
                href={`/${category?.title.replace(/\s+/g, "-").toLowerCase()}`}
              >
                {category.title}
              </Link>
            </Accordion.Header>
            <Accordion.Body>
              <div className={styles.SubcategoryWrraper}>
                {category.subcategories.map((subcategory, index) => (
                  <Link
                    href={`/${category?.title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}/${subcategory.title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    key={subcategory.title}
                  >
                    <p
                      className={`${
                        router.query.subcategory?.replace(/-/g, " ") ===
                        subcategory.title.toLowerCase()
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
