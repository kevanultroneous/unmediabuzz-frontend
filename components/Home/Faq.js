import { Accordion, Col, Row } from "react-bootstrap";
import ContainerWrraper from "../common/ContainerWrraper";
import styles from "@/styles/home/Faq.module.css";

const Faq = () => {
  const faqdata = [
    {
      que: "How much it would take to make my PR live?",
      ans: "In Tier 1 Pro distribution package - you get 225 media outlets distribution with Google News, Marketwatch, Financial Network Distribution, Marketmedia Distribution, Google News Network Distribution, 9K-15K extra impression in popular sites -",
    },
    {
      que: "What is the difference between Tier 1, Tier 1 Pro, and Tier 2, Tier 2 Pro?",
      ans: "In Tier 1 Pro distribution package - you get 225 media outlets distribution with Google News, Marketwatch, Financial Network Distribution, Marketmedia Distribution, Google News Network Distribution, 9K-15K extra impression in popular sites -",
    },
    {
      que: "How much it would take to make my PR live?",
      ans: "In Tier 1 Pro distribution package - you get 225 media outlets distribution with Google News, Marketwatch, Financial Network Distribution, Marketmedia Distribution, Google News Network Distribution, 9K-15K extra impression in popular sites -",
    },
    {
      que: "What is the difference between Tier 1, Tier 1 Pro, and Tier 2, Tier 2 Pro?",
      ans: "In Tier 1 Pro distribution package - you get 225 media outlets distribution with Google News, Marketwatch, Financial Network Distribution, Marketmedia Distribution, Google News Network Distribution, 9K-15K extra impression in popular sites -",
    },
    {
      que: "How much it would take to make my PR live?",
      ans: "In Tier 1 Pro distribution package - you get 225 media outlets distribution with Google News, Marketwatch, Financial Network Distribution, Marketmedia Distribution, Google News Network Distribution, 9K-15K extra impression in popular sites -",
    },
  ];

  return (
    <ContainerWrraper>
      <Row>
        <Col xs={12} sm={12} md={5} lg={5} xl={5}>
          <h6 className={styles.MainHeading}>
            We have all the Answers you are looking for!
          </h6>
          <p className={styles.MainParagraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500sed.
          </p>
        </Col>
        <Col xs={12} sm={12} md={7} lg={7} xl={7}>
          <Accordion>
            {faqdata.map((faqs, index) => (
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
