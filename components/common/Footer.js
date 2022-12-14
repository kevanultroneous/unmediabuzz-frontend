import ContainerWrraper from "./ContainerWrraper";
import { Row, Col, Image } from "react-bootstrap";
import styles from "@/styles/common/Footer.module.css";
import Link from "next/link";
import { FooterMenu } from "utils/Navigation.utils";

const Footer = () => {
  return (
    <ContainerWrraper customClass={`${styles.FooterCover}`}>
      <Row className="align-items-center">
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={3}
          xl={2}
          className={`ColPaddingRemove ${styles.tabFooter}`}
        >
          <Image
            src="/assets/icons/unmb.svg"
            alt="Logo"
            fluid
            draggable={false}
          />
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={8}
          className={`ColPaddingRemove`}
        >
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
          sm={12}
          md={12}
          lg={3}
          xl={2}
          className={`${styles.IconCol} ColPaddingRemove`}
        >
          <div className={`${styles.IconCover} ${styles.SiconSpaceRemove}`}>
            <a
              href="https://twitter.com/UNmediaBuzz"
              target={"_blank"}
              rel="noreferrer"
            >
              <Image
                src="/assets/icons/twitter-icon.svg"
                alt="facebook"
                fluid
              />
            </a>
          </div>
          <div className={styles.IconCover}>
            <a
              href="https://www.facebook.com/profile.php?id=100087241849287"
              target={"_blank"}
              rel="noreferrer"
            >
              <Image src="/assets/icons/fb-icon.svg" alt="facebook" fluid />
            </a>
          </div>
          <div className={styles.IconCover}>
            <a
              href="https://www.instagram.com/unmediabuzz/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Image src="/assets/icons/instagram.png" alt="facebook" fluid />
            </a>
          </div>
        </Col>
      </Row>
    </ContainerWrraper>
  );
};

export default Footer;
