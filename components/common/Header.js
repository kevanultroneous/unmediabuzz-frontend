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

const Header = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (router.pathname === "/") {
      setShowSearchInput(true);
    }
  }, [router]);

  return (
    <ContainerWrraper customClass={`${styles.HeaderContainer}`}>
      <Row className={styles.MainMenuRow}>
        <Col xs={6} md={3} lg={3} xl={3} className={`ColPaddingRemove`}>
          <div className={styles.MobileLogoWrraper}>
            <Image
              src="/assets/icons/unmb.svg"
              alt="Logo"
              fluid
              draggable={false}
            />
          </div>
        </Col>

        <Col xs={6} md={3} lg={6} xl={6} className={`ColPaddingRemove`}>
          <div className={styles.MobileSearchMenu}>
            <FiSearch size={18} className={styles.SearchIcon} />
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
                    <Image src="/assets/icons/speaker.svg" alt="speaker" />
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
