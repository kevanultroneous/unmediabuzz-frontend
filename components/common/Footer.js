import ContainerWrraper from "./ContainerWrraper";
import { Row, Col, Image } from "react-bootstrap";
import styles from "@/styles/common/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  const FooterMenu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Press Release",
      link: "/",
    },
    {
      name: "Blog",
      link: "/",
    },
    {
      name: "Writing Guideline",
      link: "/",
    },
    {
      name: "Privacy Policy",
      link: "/",
    },
    {
      name: "Terms & Condition",
      link: "/",
    },
  ];

  return (
    <ContainerWrraper customClass={`${styles.FooterCover}`}>
      <Row>
        <Col xs={6} md={3} lg={3} xl={2} className={`ColPaddingRemove`}>
          <label className={styles.LogoText}>Logo</label>
        </Col>
        <Col xs={6} md={3} lg={6} xl={8} className={`ColPaddingRemove`}>
          <div className="text-center">
            {FooterMenu.map((menus, index) => (
              <>
                <Link
                  className={styles.Links}
                  href={menus.link}
                  key={index + 1}
                >
                  {menus.name}
                </Link>
                {FooterMenu.indexOf(FooterMenu[FooterMenu.length - 1]) ===
                index ? null : (
                  <span className={styles.LinkSpan}>|</span>
                )}
              </>
            ))}
          </div>
        </Col>
        <Col
          xs={12}
          md={3}
          lg={3}
          xl={2}
          className={`${styles.IconCol} ColPaddingRemove`}
        >
          <div className={styles.IconCover}>
            <Image src="/assets/icons/twitter-icon.svg" alt="facebook" fluid />
          </div>
          <div className={styles.IconCover}>
            <Image src="/assets/icons/fb-icon.svg" alt="facebook" fluid />
          </div>
          <div className={styles.IconCover}>
            <Image src="/assets/icons/in-icon.svg" alt="facebook" fluid />
          </div>
        </Col>
      </Row>
    </ContainerWrraper>
  );
};

export default Footer;
