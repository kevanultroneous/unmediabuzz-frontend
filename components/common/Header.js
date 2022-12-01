import Link from "next/link";
import {
  Button,
  Col,
  Form,
  Image,
  InputGroup,
  Offcanvas,
  Row,
} from "react-bootstrap";
import ContainerWrraper from "./ContainerWrraper";
import styles from "@/styles/common/Header.module.css";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HeaderMenu } from "utils/Navigation.utils";
import useResponsiveViewer from "hooks/ResponsiveViewer";

const Header = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (router.pathname === "/") {
      setShowSearchInput(true);
    }
  }, [router]);

  // useEffect(() => {
  //   var prevScrollpos = window.pageYOffset;
  //   window.onscroll = function () {
  //     var currentScrollPos = window.pageYOffset;
  //     if (prevScrollpos > currentScrollPos) {
  //       document.getElementById("navbar").style.top = "0";
  //     } else {
  //       document.getElementById("navbar").style.top = "-50px";
  //     }
  //     prevScrollpos = currentScrollPos;
  //   };
  // });

  return (
    <ContainerWrraper customClass={`${styles.HeaderContainer}`}>
      <Row className={styles.MainMenuRow} id="navbar">
        <Col xs={6} md={6} lg={3} xl={3} className={`ColPaddingRemove`}>
          <div className={styles.MobileLogoWrraper}>
            <Link href={"/"}>
              <Image
                src="/assets/icons/unmb.svg"
                alt="Logo"
                fluid
                draggable={false}
              />
            </Link>
          </div>
        </Col>

        <Col xs={6} md={6} lg={6} xl={6} className={`ColPaddingRemove`}>
          {/* mobile */}
          <div className={styles.MobileSearchMenu}>
            <FiSearch
              size={18}
              className={styles.SearchIcon}
              onClick={() => router.push("/search-result")}
            />
            <div
              id="nav-icon3"
              className={open ? "open" : ""}
              onClick={() => setOpen(!open)}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          {/* --------- */}
          <div className={`text-center ${styles.HideMenusInMob}`}>
            {HeaderMenu.map((menus, index) => (
              <>
                <Link
                  draggable={false}
                  className={
                    router.pathname === menus.link
                      ? styles.SelectedLink
                      : styles.Links
                  }
                  href={menus.link}
                  key={index + 1}
                >
                  {router.pathname === menus.link && (
                    <Image
                      src="/assets/icons/speaker.svg"
                      alt="speaker"
                      className={styles.speekarAnimation}
                    />
                  )}
                  {menus.name}
                </Link>
                {HeaderMenu.indexOf(HeaderMenu[HeaderMenu.length - 1]) ===
                index ? null : (
                  <span className={styles.LinkSpan}> </span>
                )}
              </>
            ))}
          </div>
        </Col>

        <Col
          xs={2}
          md={3}
          lg={3}
          xl={3}
          className={`ColPaddingRemove ${styles.SearchGroup}`}
        >
          <InputGroup
            size="sm"
            className={`${styles.GroupInput} ${styles.HideMenusInMob} `}
          >
            <Form.Control
              className={styles.FormControl}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
            <InputGroup.Text
              id="inputGroup-sizing-sm"
              className={styles.SearchButton}
            >
              <FiSearch size={18} />
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
      {/* mobile menu offcanvas */}
      <div className={styles.SidebarCanvas}>
        <Offcanvas show={open} backdrop={false} onHide={() => setOpen(false)}>
          <Offcanvas.Body>
            <div className={`${styles.MobileMenuSidebar}`}>
              {HeaderMenu.map((menus, index) => (
                <>
                  <Link
                    draggable={false}
                    className={
                      router.pathname === menus.link
                        ? styles.SelectedLink
                        : styles.Links
                    }
                    href={menus.link}
                    key={index + 1}
                  >
                    {menus.name}{" "}
                    {router.pathname === menus.link && (
                      <Image src="/assets/icons/speaker.svg" alt="speaker" />
                    )}
                  </Link>
                  {HeaderMenu.indexOf(HeaderMenu[HeaderMenu.length - 1]) ===
                  index ? null : (
                    <span className={styles.LinkSpan}> </span>
                  )}
                </>
              ))}
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </ContainerWrraper>
  );
};

export default Header;
