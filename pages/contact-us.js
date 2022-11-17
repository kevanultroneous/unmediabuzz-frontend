import ContainerWrraper from "@/components/common/ContainerWrraper";
import Layout from "@/components/common/Layout";
import { Col, Row, Image, ToggleButton } from "react-bootstrap";
import styles from "@/styles/ContactUs.module.css";
import { countryCall } from "utils/CountryCode";
import ToggleUiButton from "@/components/common/ToggleUiButton";
import { useState } from "react";
import { RadioButtonsData } from "utils/Anonymous";

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
  const [radioButton, setRadioButton] = useState(null);

  const radiobuttonHandler = (v) => {
    setRadioButton(null);
    setRadioButton(v);
  };

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
      <ContainerWrraper customClass={`${styles.FormContainer}`}>
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
                  <div className={styles.RadioButtonWrraper}>
                    {RadioButtonsData.map((radio, index) => (
                      <div
                        className={styles.RadioButtonCover}
                        key={index}
                        onClick={() => radiobuttonHandler(index)}
                      >
                        <div className={styles.RadioButtonParent}>
                          {index == radioButton && (
                            <div className={styles.RadioButtonChild}></div>
                          )}
                        </div>
                        <label className={styles.UniqueLabels}>{radio}</label>
                      </div>
                    ))}
                  </div>
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
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={styles.SendButtonWrraper}
              >
                <ToggleUiButton
                  dark
                  text={
                    <span>
                      <Image
                        src="/assets/icons/message-icon.svg"
                        alt="press-release"
                      />{" "}
                      &nbsp; Send Message
                    </span>
                  }
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </ContainerWrraper>
    </Layout>
  );
};

export default ContactUs;
