import { Accordion, Col, Row } from "react-bootstrap";
import ContainerWrraper from "../common/ContainerWrraper";
import styles from "@/styles/home/Faq.module.css";
import { Faqdata } from "utils/Anonymous";
import { useEffect } from "react";
import Aos from "aos";

const Faq = () => {
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    <ContainerWrraper customClass={`${styles.FaqContainerWrraper}`}>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={5}
          xl={5}
          className={`ColPaddingRemove`}
        >
          <div className={styles.animationSection}>
            <h2
              className={styles.MainHeading}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Still hesitant? We have all the answers you are looking for!
            </h2>
          </div>
          <p className={styles.MainParagraph}>
            We realize you want a genuine and reliable distribution network to
            spread the word. For that, don&apos;t be shy; ask away. We put rest
            to all your worries.
          </p>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={7}
          xl={7}
          className={`ColPaddingRemove FaqSectionHome`}
        >
          <Accordion>
            {Faqdata.map((faqs, index) => (
              <Accordion.Item
                eventKey={index}
                key={index}
                className={styles.AccordianSpace}
              >
                <Accordion.Header className={styles.FaqQuestion}>
                  {<p className={styles.FaqQuestionText}>{faqs.que}</p>}
                </Accordion.Header>
                <Accordion.Body className={styles.FaqAnswer}>
                  {<p className={styles.FaqAnswerText}>{faqs.ans}</p>}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </ContainerWrraper>
  );
};

export default Faq;
