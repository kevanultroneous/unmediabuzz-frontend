import ContainerWrraper from "@/components/common/ContainerWrraper";
import GettingStarted from "@/components/common/GettingStarted";
import Layout from "@/components/common/Layout";
import { Col, Image, Row, Spinner } from "react-bootstrap";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import styles from "@/styles/ViewDetails.module.css";
import { CardModel } from "@/components/common/RecentItems";
import { Router, useRouter } from "next/router";
import axios from "axios";
import { InterestedPostAPI, PressReleaseListAPI } from "utils/API";
import { useEffect, useState } from "react";
import { blankobj, MAIN_URL, POST_URL, timestampToDate } from "utils/Anonymous";
import toast from "react-hot-toast";
import Link from "next/link";

const ViewPost = ({ data }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   Router.events.on("routeChangeStart", () => {
  //     setIsLoading(true);
  //   });
  //   Router.events.on("routeChangeComplete", () => {
  //     setIsLoading(false);
  //   });

  // }, [Router]);
  useEffect(() => {
    if (Object.keys(data.PressReleaseList).length < 1) {
      router.push("/");
    } else {
      // target div which is help to convert string to html without interweave package
      document.getElementById("htmlcontent").innerHTML =
        data?.PressReleaseList.content;
    }
  }, []);

  const linkForPlatform = () => {
    navigator.clipboard.writeText(window?.location?.href);
    toast.success("Link is copied!", {
      duration: 400,
    });
  };

  return (
    <>
      {isLoading ? (
        <div className={styles.loading}>
          <Spinner animation="border" />
        </div>
      ) : (
        <Layout
          title={`${
            Object.keys(data.PressReleaseList).length < 1
              ? "UNmedia Buzz"
              : data?.PressReleaseList.seoTitle
          }`}
          description={
            Object.keys(data.PressReleaseList).length < 1
              ? ""
              : data?.PressReleaseList.seoDescription
          }
          keywords={
            Object.keys(data.PressReleaseList).length < 1
              ? ""
              : data?.PressReleaseList.seoKeywords
          }
          ogtitle={
            Object.keys(data.PressReleaseList).length < 1
              ? ""
              : data?.PressReleaseList.seoTitle
          }
          ogimage={
            Object.keys(data.PressReleaseList).length < 1
              ? ""
              : data?.PressReleaseList.featuredImage
          }
        >
          <ContainerWrraper customClass={`${styles.ViewPostContainerWrraper}`}>
            <IoIosArrowRoundBack
              size={40}
              className={styles.ArrowIcon}
              onClick={() => router.back()}
            />
            <Row className={styles.HeroSectionRow}>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={styles.DetailSectionCol}
              >
                <p className={styles.BreadCumb}>
                  <Link href="/">Home</Link>/{" "}
                  <Link href="/press-release">Press Release</Link>/{" "}
                  <Link
                    href={`/${data?.PressReleaseList?.selectedCategory
                      ?.replace(/\s+/g, "-")
                      .toLowerCase()}`}
                  >
                    {data?.PressReleaseList?.selectedCategory}
                  </Link>
                  {data?.PressReleaseList?.selectedSubCategory && (
                    <>
                      /{" "}
                      <Link
                        href={`/${data?.PressReleaseList?.selectedCategory
                          ?.replace(/\s+/g, "-")
                          .toLowerCase()}/${
                          data?.PressReleaseList?.selectedSubCategory
                            ? data?.PressReleaseList?.selectedSubCategory
                                .replace(/\s+/g, "-")
                                .toLowerCase()
                            : null
                        }`}
                      >
                        {data?.PressReleaseList?.selectedSubCategory}
                      </Link>
                    </>
                  )}
                </p>
                <h1 className={styles.PostTitle}>
                  {data?.PressReleaseList.title}
                </h1>
                <p className={styles.CreatedAt}>{`On ${timestampToDate(
                  data?.PressReleaseList.releaseDate
                )} By, ${data?.PressReleaseList.companyName}`}</p>
                <div className={styles.IconsWrraper}>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${
                      POST_URL + router.query.post
                    }`}
                    class="fb-xfbml-parse-ignore"
                    target="_blank"
                    style={{ color: "rgba(0, 0, 0, 0.6)" }}
                  >
                    <AiFillFacebook
                      size={30}
                      className={styles.IconSpace}
                      onClick={linkForPlatform}
                    />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url={${
                      POST_URL + router.query.post
                    }}&title={${data?.PressReleaseList.title}}&summary={${
                      data?.PressReleaseList.summary
                    }}&source={${data?.PressReleaseList.content}}`}
                    target="_blank"
                    style={{ color: "rgba(0, 0, 0, 0.6)" }}
                  >
                    <AiFillLinkedin
                      size={30}
                      className={styles.IconSpace}
                      onClick={linkForPlatform}
                    />
                  </a>

                  <a
                    href={`https://twitter.com/sharer/sharer.php?u=${
                      POST_URL + router.query.post
                    }`}
                    target="_blank"
                    style={{ color: "rgba(0, 0, 0, 0.6)" }}
                  >
                    <AiOutlineTwitter
                      size={30}
                      className={styles.IconSpace}
                      onClick={linkForPlatform}
                    />
                  </a>
                </div>
              </Col>
            </Row>
          </ContainerWrraper>
          <ContainerWrraper customClass={styles.ContentWrraper}>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={`ColPaddingRemove `}
              >
                <p className={styles.editorContent}>
                  {data?.PressReleaseList.summary}
                </p>
                {data?.PressReleaseList.featuredImage && (
                  <center className={styles.ImageCenter}>
                    <div className={styles.FeaturedImage}>
                      <Image
                        src={data?.PressReleaseList.featuredImage}
                        alt="featured-image"
                        fluid
                      />
                    </div>
                  </center>
                )}
                <div id="htmlcontent" className={styles.editorContent}></div>
              </Col>
            </Row>
          </ContainerWrraper>

          <ContainerWrraper
            customClass={`${styles.InterestedContainerWrraper}`}
          >
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <h6 className={styles.InterestedMainHeading}>
                  You might be Interested
                  <span className={styles.InterstedMainHeadingBrush}>
                    <Image
                      src="/assets/icons/brush-4.svg"
                      alt="brush"
                      className={styles.BrushMobImage}
                    />
                  </span>
                </h6>
              </Col>
              {data?.InterestedPost?.map((posts, index) => (
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  xl={6}
                  key={index}
                  className={`${
                    index === 1 ? `${styles.BetweenSpace} ColPaddingRemove` : ""
                  }`}
                >
                  <CardModel
                    url={
                      posts.slugUrl ? `/press-release/${posts.slugUrl}` : "#"
                    }
                    coverimg={posts.featuredImage ? posts.featuredImage : null}
                    badge={posts.paidStatus}
                    hide={true}
                    date={timestampToDate(posts.releaseDate)}
                    title={posts.title}
                    companyname={"By," + " " + posts.companyName}
                  />
                </Col>
              ))}
            </Row>
          </ContainerWrraper>
          <GettingStarted />
        </Layout>
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  const pressreleaseview = await axios
    .post(PressReleaseListAPI, { url: context.params?.post })
    .then((res) => (res.data.success ? res.data?.data : null))
    .catch((e) => e.response.data.data);
  var interestedPostdata;
  if (Object.keys(pressreleaseview).length > 0) {
    interestedPostdata = await axios
      .post(InterestedPostAPI, { postId: pressreleaseview?._id })
      .then((res) => res.data.data)
      .catch((e) => e);
    return {
      props: {
        data: {
          PressReleaseList: pressreleaseview,
          InterestedPost: interestedPostdata,
        },
      },
    };
  } else {
    return {
      props: {
        data: {
          PressReleaseList: {},
        },
      },
    };
  }
}

export default ViewPost;
