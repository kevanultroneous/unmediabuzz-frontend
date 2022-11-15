import ContainerWrraper from "@/components/common/ContainerWrraper";
import Layout from "@/components/common/Layout";
import { Col, Row, Image } from "react-bootstrap";
import styles from "@/styles/ContactUs.module.css";
import PhoneCode from "react-phone-code";
import { countryCall } from "utils/CountryCode";
import { useEffect } from "react";

const InputController = ({ label, type, value, changeHandler }) => {
  return (
    <div className={styles.InputWrraper}>
      <label className={styles.Labels}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={changeHandler}
        className={styles.Controller}
      />
    </div>
  );
};

const ContactUs = () => {
  return (
    <Layout>
      <ContainerWrraper>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={styles.HeadingCol}
          >
            <p className={styles.Heading}>
              Connect to start your Journey with UNMedia Buzz
            </p>
            <Image src="/assets/images/brush-3.svg" alt="brush" />
          </Col>
        </Row>
      </ContainerWrraper>
      <ContainerWrraper>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            className="ColPaddingRemove"
          >
            <div className={styles.BoardContainer}>
              <Image
                src="/assets/images/speakr-lady.svg"
                alt="speaker-lady"
                className={styles.ImageSizes}
                fluid
              />
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={8}
            lg={8}
            xl={8}
            className={styles.ControllersSpace}
          >
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <InputController label={"FIRST NAME"} type="text" />
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <InputController label={"LAST NAME"} type="text" />
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <InputController label={"MAIL"} type="email" />
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className={styles.InputWrraper}>
                  <label className={styles.Labels}>PHONE (Optional)</label>
                  <div className={styles.CountryInput}>
                    <select className={styles.Options}>
                      {countryCall.map((code, index) => (
                        <option value={code.code} key={index}>
                          {code.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type={"tel"}
                      value={""}
                      // onChange={changeHandler}
                      className={styles.Controller}
                    />
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className={styles.InputWrraperRadio}>
                  <label className={styles.Labels}>
                    WHAT DO YOU WANNA POST
                  </label>
                  <br />
                  <input
                    type={"radio"}
                    className={styles.RadioButtonSpace}
                    name="wanna"
                  />
                  <label className={styles.UniqueLabels}>Press Release</label>
                  <input
                    type={"radio"}
                    className={styles.RadioButtonSpace}
                    name="wanna"
                  />
                  <label className={styles.UniqueLabels}>Blog Post</label>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <InputController label={"TOPIC FOR THE SAME"} type="text" />
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <label className={styles.Labels}>MESSAGE</label>
                <br />
                <textarea
                  rows={3}
                  className={styles.Textarea}
                  placeholder="Your message will come here..."
                ></textarea>
              </Col>
            </Row>
          </Col>
        </Row>
      </ContainerWrraper>
    </Layout>
  );
};

export default ContactUs;
