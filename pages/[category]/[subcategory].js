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
import { Col, Row } from "react-bootstrap";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { AllCategoryAPI } from "utils/API";

const Subcategory = ({ data }) => {
  const router = useRouter();
  const arry = [1, 2, 3, 4];
  const [currentTab, setCurrentTab] = useState(0);
  const [currentSubcategory, setCurrentSubcategory] = useState([]);

  useEffect(() => {
    let precatchdata = data.allcategories?.data.find(
      (i) => i.title == router.query.category
    );
    let findsubcategoryindex = 0;

    precatchdata?.subcategories.map((value, index) =>
      value.title === router.query.subcategory
        ? (findsubcategoryindex = index)
        : null
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

  return (
    <Layout>
      <CategoryHero
        heading={router.query?.subcategory}
        breadcumb={
          <>
            <Link href={"/"}>Home</Link>/{" "}
            <Link href={"/press-release"}>Press Release</Link>/{" "}
            <Link href={`/${router.query.category}`}>
              {router.query.category}
            </Link>
            /{" "}
            <Link
              href={`/${router.query.category}/${router.query.subcategory}`}
            >
              {router.query.subcategory}
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
                  router.push(`/${JSON.parse(e.target.value)[0]}`);
                  setCurrentSubcategory(JSON.parse(e.target.value));
                }}
              >
                {data.allcategories?.data.map((value, index) => (
                  <option
                    key={index}
                    // create json stringify array where 0 index present title of category and 1 index present subcategories array
                    value={JSON.stringify([value.title, value.subcategories])}
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
                      router.push(`/${router.query.category}/${tab.title}`);
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
          <Col xs={12} sm={12} md={12} lg={8} xl={9}>
            {arry.map((value, index) => (
              <CardModel
                url={"#"}
                customtitleclass={`${styles.ParagraphSize}`}
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
            <div className={styles.PaginationWrraper}>
              <Pagination
                total={320}
                itemRender={textItemRender}
                pageSize={7}
              />
            </div>
          </Col>
        </Row>
      </ContainerWrraper>
      <GettingStarted />
    </Layout>
  );
};
export async function getServerSideProps() {
  const allcategories = await axios
    .get(AllCategoryAPI)
    .then((res) => res.data)
    .catch((e) => e);
  return {
    props: {
      data: {
        allcategories,
      },
    },
  };
}
export default Subcategory;
