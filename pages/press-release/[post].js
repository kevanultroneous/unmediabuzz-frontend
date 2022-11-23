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

const ViewPost = () => {
  return (
    <Layout>
      <ContainerWrraper customClass={`${styles.ViewPostContainerWrraper}`}>
        <IoIosArrowRoundBack size={40} className={styles.ArrowIcon} />
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
            <p className={styles.PostTitle}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <p className={styles.CreatedAt}>On 04 Novemeber 2022 By, XYZ</p>
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
      <ContainerWrraper className={styles.ContentWrraper}>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={`ColPaddingRemove`}
          >
            <h3>Contents</h3>
            <p>jfkdsfkjskdfjksdkjkjkkk ksjdkfjskdjksjdkjkjk </p>
          </Col>
        </Row>
      </ContainerWrraper>
      {/* <ContainerWrraper customClass={`${}`}>
      </ContainerWrraper> */}
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

export default ViewPost;
