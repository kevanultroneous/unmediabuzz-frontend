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
import { PressReleaseListAPI } from "utils/API";
import { useEffect } from "react";
import { MAIN_URL, timestampToDate } from "utils/Anonymous";

const ViewPost = ({ data }) => {
  const router = useRouter();

  useEffect(() => {
    if (data == null) {
      router.push("/");
    } else {
      // target div which is help to convert string to html without interweave package
      document.getElementById("htmlcontent").innerHTML = data?.content;
    }
  }, [data, router]);

  return (
    <Layout>
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
              Home/ Press Release/ Sports / Cricket
            </p>
            <p className={styles.PostTitle}>{data?.title}</p>
            <p className={styles.CreatedAt}>{`On ${timestampToDate(
              data?.releaseDate
            )} By, ${data?.companyName}`}</p>
            <div className={styles.IconsWrraper}>
              <AiFillFacebook size={30} className={styles.IconSpace} />
              <AiFillLinkedin size={30} className={styles.IconSpace} />
              <AiOutlineTwitter size={30} className={styles.IconSpace} />
              <AiFillFacebook size={30} className={styles.IconSpace} />
              <AiFillLinkedin size={30} className={styles.IconSpace} />
              <AiOutlineTwitter size={30} />
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
            <p>{data?.summary}</p>
            <center>
              <div className={styles.FeaturedImage}>
                <Image
                  src={MAIN_URL + data?.featuredImage}
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
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <CardModel
              url={"#"}
              coverimg={""}
              hide={true}
              date={"04 Novemeber 2022"}
              title={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing."
              }
              companyname={"By, XYZ Company Name"}
            />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            className={`${styles.BetweenSpace} ColPaddingRemove`}
          >
            <CardModel
              url={"/"}
              customcardmodelrow={`${styles.customcardmodelrow}`}
              hide={true}
              date={"04 Novemeber 2022"}
              title={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing."
              }
              companyname={"By, XYZ Company Name"}
            />
          </Col>
        </Row>
      </ContainerWrraper>
      <GettingStarted />
    </Layout>
  );
};
export async function getServerSideProps(context) {
  const data = await axios
    .post(PressReleaseListAPI, { url: context.params?.post })
    .then((res) => (res.data.success ? res.data?.data : null))
    .catch((e) => e);
  return {
    props: {
      data: typeof data === "object" && data !== undefined ? data : null,
    },
  };
}

export default ViewPost;
