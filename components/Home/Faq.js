import { Accordion, Col, Row } from "react-bootstrap";
import ContainerWrraper from "../common/ContainerWrraper";
import styles from "@/styles/home/Faq.module.css";
import { Faqdata } from "utils/Anonymous";

const Faq = () => {
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
          <h6 className={styles.MainHeading}>
            We have all the Answers you are looking for!
          </h6>
          <p className={styles.MainParagraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500sed.
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
