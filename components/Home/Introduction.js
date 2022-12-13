import { Col, Image, Row } from "react-bootstrap";
import ContainerWrraper from "../common/ContainerWrraper";
import styles from "@/styles/home/Introduction.module.css";
import ToggleUiButton from "../common/ToggleUiButton";
import { ButtonsList } from "utils/ButtonsList";
import { ProcessList } from "utils/Anonymous";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Process card component
const Process = ({ ProcessList, title, icon, desc, index }) => {
  return (
    <div className="d-flex">
      <div className={styles.ProcessCover}>
        <div className={styles.ProcessImage}>
          <Image
            src={icon}
            alt="edit-desk"
            className={`${styles.processIcon} processIcon`}
          />
          {/* {icon} */}
        </div>
        <h3 className={styles.ProcessTitle}>{title}</h3>
        <p className={styles.ProcessDesc}>{desc}</p>
        <div className={styles.MobileProcessList}>
          {!(
            ProcessList.indexOf(ProcessList[ProcessList.length - 1]) === index
          ) && (
            <Image
              src={
                index % 2 == 0
                  ? "/assets/images/left-down-arrow.svg"
                  : "/assets/images/right-down-arrow.svg"
              }
              className={index % 2 == 0 ? " " : styles.RightArrowMob}
              alt="arrow"
            />
          )}
        </div>
      </div>
      {!(
        ProcessList.indexOf(ProcessList[ProcessList.length - 1]) === index
      ) && (
        <div
          className={
            index % 2 == 0 ? styles.ArrowWrraper : styles.ArrowWrraperUp
          }
        >
          <Image
            src={
              index % 2 == 0
                ? "/assets/icons/up-brown.svg"
                : "/assets/icons/down-brown.svg"
            }
            alt="arrow"
          />
        </div>
      )}
    </div>
  );
};

// Full introduction component
const Introduction = () => {
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    <ContainerWrraper customClass={`${styles.IntroContainerWrraper}`}>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={`${styles.MainIntroductionWrraper} ColPaddingRemove`}
        >
          <div className={styles.animationSection}>
            <div data-aos="fade-up" data-aos-duration="2000">
              <h1 className={styles.TitleText}>Start, Submit & Distribute</h1>
              <h1
                className={`${styles.TitleText} ${styles.TitleTextWithBrush}`}
              >
                Globally with
                <span className={styles.TitleSpan}>
                  <Image
                    src="/assets/images/brush-2.svg"
                    alt="span-text"
                    className={styles.BrushImage}
                  />
                  &nbsp;&nbsp;UNmedia Buzz
                </span>
              </h1>
            </div>
          </div>
          <div>
            <p className={styles.TitleIntro}>
              Reach millions and establish authority so you can grow with ease.
              Get your dynamic story featured in high-authority media outlets
              with us.
            </p>
          </div>

          <div className={styles.ButtonsWrraper}>
            {ButtonsList?.IntroButtonList?.map((button, index) => (
              <div className={styles.ButtonSpaces} key={index + 1}>
                <ToggleUiButton dark text={button.source} url={button.link} />
              </div>
            ))}
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={`ColPaddingRemove`}
        >
          <div className={`${styles.ProcessWrraper} ProcessWrapperStyle`}>
            {ProcessList?.map((process, index) => (
              <Process
                key={index + 1}
                index={index}
                icon={process.icon}
                title={process.title}
                desc={process.desc}
                ProcessList={ProcessList}
              />
            ))}
          </div>
        </Col>
      </Row>
    </ContainerWrraper>
  );
};
export default Introduction;
