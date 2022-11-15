import Link from "next/link";
import { Col, Image, Row } from "react-bootstrap";
import ContainerWrraper from "./ContainerWrraper";
import styles from "@/styles/common/Header.module.css";

const Header = () => {
  const FooterMenu = [
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
      name: "Contact Us",
      link: "/",
    },
  ];

  return (
    <ContainerWrraper customClass={`${styles.HeaderContainer}`}>
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
                  {/* <Image src="/assets/icons/speaker.svg" alt="speaker" /> */}
                  {menus.name}
                </Link>
                {FooterMenu.indexOf(FooterMenu[FooterMenu.length - 1]) ===
                index ? null : (
                  <span className={styles.LinkSpan}> </span>
                )}
              </>
            ))}
          </div>
        </Col>
        <Col xs={12} md={3} lg={3} xl={2} className={`ColPaddingRemove`}></Col>
      </Row>
    </ContainerWrraper>
  );
};

export default Header;
