import ContainerWrraper from "@/components/common/ContainerWrraper";
import GettingStarted from "@/components/common/GettingStarted";
import Layout from "@/components/common/Layout";
import { Col, Image, Row } from "react-bootstrap";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import styles from "@/styles/ViewDetails.module.css";
import { CardModel } from "@/components/common/RecentItems";
import { useRouter } from "next/router";
import axios from "axios";
import { InterestedPostAPI, PressReleaseListAPI } from "utils/API";
import { useEffect } from "react";
import { MAIN_URL, timestampToDate } from "utils/Anonymous";
import toast from "react-hot-toast";

const ViewPost = ({ data }) => {
  const router = useRouter();

  useEffect(() => {
    if (data == null) {
      router.push("/");
    } else {
      // target div which is help to convert string to html without interweave package
      document.getElementById("htmlcontent").innerHTML =
        data?.PressReleaseList.content;
    }
  }, [data, router]);

  const linkForPlatform = () => {
    navigator.clipboard.writeText(window?.location?.href);
    toast.success("Link is copied !");
  };

  return (
    <Layout
      title={`unmediabuzz | ${data?.PressReleaseList.seoTitle}`}
      description={data?.PressReleaseList.seoDescription}
      keywords={data?.PressReleaseList.seoKeywords}
      ogtitle={data?.PressReleaseList.seoTitle}
      ogimage={MAIN_URL + data?.PressReleaseList.featuredImage}
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
            <p className={styles.BreadCumb}>Home/ Press Release/</p>
            <p className={styles.PostTitle}>{data?.PressReleaseList.title}</p>
            <p className={styles.CreatedAt}>{`On ${timestampToDate(
              data?.PressReleaseList.releaseDate
            )} By, ${data?.PressReleaseList.companyName}`}</p>
            <div className={styles.IconsWrraper}>
              <AiFillFacebook
                size={30}
                className={styles.IconSpace}
                onClick={linkForPlatform}
              />

              <AiFillLinkedin
                size={30}
                className={styles.IconSpace}
                onClick={linkForPlatform}
              />
              <AiOutlineTwitter
                size={30}
                className={styles.IconSpace}
                onClick={linkForPlatform}
              />
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
            className={`ColPaddingRemove`}
          >
            <p>{data?.PressReleaseList.summary}</p>
            <center>
              <div className={styles.FeaturedImage}>
                <Image
                  src={MAIN_URL + data?.PressReleaseList.featuredImage}
                  alt="featured-image"
                  fluid
                />
              </div>
            </center>
            <div id="htmlcontent"></div>
          </Col>
        </Row>
      </ContainerWrraper>

      <ContainerWrraper customClass={`${styles.InterestedContainerWrraper}`}>
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
          {data?.InterestedPost.map((posts, index) => (
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
                url={posts.slugUrl ? `/press-release/${posts.slugUrl}` : "#"}
                coverimg={MAIN_URL + posts.featuredImage}
                hide={true}
                date={timestampToDate(posts.releaseDate)}
                title={posts.title}
                companyname={posts.companyName}
              />
            </Col>
          ))}
        </Row>
      </ContainerWrraper>
      <GettingStarted />
    </Layout>
  );
};
export async function getServerSideProps(context) {
  const pressreleaseview = await axios
    .post(PressReleaseListAPI, { url: context.params?.post })
    .then((res) => (res.data.success ? res.data?.data : null))
    .catch((e) => e);
  const interestedPostdata = await axios
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
}

export default ViewPost;
