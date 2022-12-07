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
import toast, { Toaster } from "react-hot-toast";
import { specialcharacter } from "utils/Anonymous";

const Header = ({ commonchecked }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchInput, setSearchInput] = useState(
    router.query.searching ? router.query.searching : ""
  );

  useEffect(() => {
    if (router.pathname === "/" || router.pathname === "/search") {
      setSearch(true);
    }
    window.scrollTo(0, 0);
  }, [router]);

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementsByClassName("headerforscroll")[0].style.top = "0";
      } else {
        document.getElementsByClassName("headerforscroll")[0].style.top =
          "-90px";
      }
      prevScrollpos = currentScrollPos;
    };
  });

  const handlesearch = () => {
    if (search) {
      if (!searchInput.length > 0) {
        toast.error("Search field is required !");
      }
      // else if (specialcharacter.test(searchInput)) {
      //   toast.error("Special character is not allowed !");
      // }
      else {
        router.push(`/search?searching=${searchInput}`);
      }
    }
  };
  const selectedcustom = ["/press-release/[post]"];
  return (
    <ContainerWrraper customClass={`${styles.HeaderContainer} headerforscroll`}>
      <Toaster position="top-center" reverseOrder={false} />
      <Row className={styles.MainMenuRow}>
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
            className={`${styles.GroupInput} ${styles.HideMenusInMob}`}
            style={search ? { maxWidth: "16rem" } : { maxWidth: "3rem" }}
          >
            {search && (
              <Form.Control
                onKeyDown={(e) => {
                  if (e.code === "Enter") {
                    handlesearch();
                  }
                }}
                className={styles.FormControl}
                aria-label="Small"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                aria-describedby="inputGroup-sizing-sm"
              />
            )}
            <InputGroup.Text
              onClick={() => {
                setSearch(true);
                handlesearch();
              }}
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
