import CategorySidebar from "@/components/common/CategorySidebar";
import ContainerWrraper from "@/components/common/ContainerWrraper";
import GettingStarted from "@/components/common/GettingStarted";
import Layout from "@/components/common/Layout";
import { CardModel } from "@/components/common/RecentItems";
import CategoryHero from "@/components/PR/CategoryHero";
import styles from "@/styles/PR/Category.module.css";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Pagination from "rc-pagination";
import { useEffect, useState } from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { MAIN_URL, timestampToDate } from "utils/Anonymous";
import { AllCategoryAPI, CategoryWisePostApi } from "utils/API";

const Category = ({ data }) => {
  const arry = [1, 2, 3, 4, 5];
  const [currentTab, setCurrentTab] = useState(0);
  const router = useRouter();
  const [currentSubcategory, setCurrentSubcategory] = useState([]);

  useEffect(() => {
    let precatchdata = data.allcategories?.data.find(
      (i) => i.title == router.query.category.replace(/-/g, " ")
    );
    let findsubcategoryindex = 0;

    precatchdata?.subcategories.map((value, index) =>
      value.title === router.query.subcategory
        ? (findsubcategoryindex = index)
        : (findsubcategoryindex = 0)
    );
    if (!precatchdata) {
      router.push("/404");
    }
    setCurrentTab(findsubcategoryindex);
    setCurrentSubcategory([precatchdata?.title, precatchdata?.subcategories]);
  }, [data.allcategories?.data, router]);

  const textItemRender = (current, type, element) => {
    if (type === "page") {
      return (
        <label className={`${styles.PageNumber} SelectedNum`}>{current}</label>
      );
    }
    if (type === "prev") {
      return (
        <div className={`${styles.ActionButtonCover} ${styles.PrevButton}`}>
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
  {
    console.log(data);
  }
  return (
    <Layout>
      <CategoryHero
        heading={router.query.category.replace(/-/g, " ")}
        breadcumb={
          <>
            <Link href={"/"}>Home</Link>/{" "}
            <Link href={"/press-release"}>Press Release</Link>/{" "}
            <Link href={`/${router.query.category.replace(/\s+/g, "-")}`}>
              {router.query.category.replace(/\s+/g, "-")}
            </Link>
          </>
        }
      />
      {/* =========================================== For MOBILE and TAB Design Strat ======================================= */}
      <ContainerWrraper customClass={`${styles.TabsMainContainer}`}>
        <Row className={styles.GroupRowTab}>
          <Col xs={12} sm={12} md={6}>
            <div className={styles.DropdownWrraper}>
              <select
                className={styles.TabsDropdown}
                onChange={(e) => {
                  router.push(
                    `/${JSON.parse(e.target.value.replace(/\s+/g, "-"))[0]}`
                  );
                  setCurrentSubcategory(
                    JSON.parse(e.target.value.replace(/\s+/g, "-"))
                  );
                }}
              >
                {data.allcategories?.data.map((value, index) => (
                  <option
                    key={index}
                    value={JSON.stringify([
                      value.title.replace(/\s+/g, "-"),
                      value.subcategories,
                    ])}
                    selected={value.title === currentSubcategory[0]}
                  >
                    {value.title}
                  </option>
                ))}
              </select>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div className={styles.TabsLayer}>
              {currentSubcategory[1]?.map((tab, index) => (
                <div key={index}>
                  <div
                    className={`${styles.CurrentTab} ${
                      index == currentTab ? styles.SelectedTab : null
                    }`}
                    onClick={() => {
                      setCurrentTab(index);
                      router.push(
                        `/${router.query.category}/${tab.title.replace(
                          /\s+/g,
                          "-"
                        )}`
                      );
                    }}
                  >
                    {tab.title}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </ContainerWrraper>
      {/* =========================================== For MOBILE and TAB Design End  ======================================= */}
      <ContainerWrraper customClass={`${styles.CardModelContainerWrraper}`}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={8} xl={9} className={`pe-0`}>
            {data.categorywisepost.data[0].mainDoc.length > 0 ? (
              data.categorywisepost.data[0].mainDoc?.map((value, index) => (
                <CardModel
                  badge={value.paidStatus}
                  url={value.slugUrl ? `/press-release/${value.slugUrl}` : `#`}
                  coverimg={MAIN_URL + value.featuredImage}
                  customtitleclass={`${styles.ParagraphSize}`}
                  key={index}
                  companyname={value.companyName}
                  title={value.title}
                  date={timestampToDate(value.releaseDate)}
                />
              ))
            ) : (
              <h4>No Post of {router.query.category}</h4>
            )}
          </Col>
          <Col
            xs={12}
            sm={12}
            md={5}
            lg={4}
            xl={3}
            className={`ColPaddingRemove ${styles.HideCategorySidebar}`}
          >
            <CategorySidebar categorylist={data.allcategories?.data} />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={`ColPaddingRemove ${styles.CenterPagination}`}
          >
            {data.categorywisepost.data[0]?.totalCount > 30 && (
              <div className={styles.PaginationWrraper}>
                <Pagination
                  showTitle={false}
                  defaultCurrent={router.query.page}
                  onChange={(v) =>
                    router.push(`/${router.query.category}?page=${v}`)
                  }
                  total={data.categorywisepost.data[0]?.totalCount}
                  itemRender={textItemRender}
                  pageSize={30}
                />
              </div>
            )}
          </Col>
        </Row>
      </ContainerWrraper>
      <GettingStarted />
    </Layout>
  );
};
export async function getServerSideProps(context) {
  const allcategories = await axios
    .get(AllCategoryAPI)
    .then((res) => res.data)
    .catch((e) => e);
  const categorywisepost = await axios
    .post(CategoryWisePostApi, {
      categoryID: context.params.category.replace(/-/g, " "),
      limit: 30,
      page: context.query.page ? context.query.page : 1,
    })
    .then((res) => res?.data)
    .catch((e) => e);
  return {
    props: {
      data: {
        allcategories,
        categorywisepost,
      },
    },
  };
}

export default Category;
