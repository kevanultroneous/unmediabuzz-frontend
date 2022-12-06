import { Accordion } from "react-bootstrap";
import styles from "@/styles/common/CategorySidebar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { FindSpecialCharacterIndex, upperCaseAt } from "utils/Anonymous";

const CategorySidebar = ({ categorylist }) => {
  const router = useRouter();
  const { params } = router.query;

  let renewdata = {
    originalcategory:
      params[0].charAt(0).toUpperCase() + params[0].slice(1).replace(/-/g, " "),
    originalsubcategory:
      params[1]?.charAt(0).toUpperCase() +
      params[1]?.slice(1).replace(/-/g, " "),
  };

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
      <Accordion defaultActiveKey={""}>
        {categorylist.map((category, index) => (
          <Accordion.Item
            eventKey={category?.title}
            key={index}
            className={
              upperCaseAt(
                renewdata.originalcategory,
                FindSpecialCharacterIndex(renewdata.originalcategory, "&") + 2
              ) == category.title && params.length > 0
                ? "CategoriesAccordionforUrl"
                : ""
            }
          >
            <Link
              href={`/${category?.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <Accordion.Header>{category.title}</Accordion.Header>
            </Link>
            <Accordion.Body>
              <div className={styles.SubcategoryWrraper}>
                {category.subcategories.map((subcategory, index) => (
                  <Link
                    href={`/${category?.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}/${subcategory.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    key={subcategory.title}
                  >
                    <p
                      className={`${
                        upperCaseAt(
                          renewdata.originalsubcategory,
                          FindSpecialCharacterIndex(
                            renewdata.originalsubcategory,
                            "&"
                          ) + 2
                        ) === subcategory.title
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
