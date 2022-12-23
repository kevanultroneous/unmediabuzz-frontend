import ContainerWrraper from "@/components/common/ContainerWrraper";
import Layout from "@/components/common/Layout";
import { Col, Row, Image, ToggleButton } from "react-bootstrap";
import styles from "@/styles/ContactUs.module.css";
import refreshed, { countryCall } from "utils/CountryCode";
import ToggleUiButton from "@/components/common/ToggleUiButton";
import { useEffect, useRef, useState } from "react";
import {
  isValidPhoneNumber,
  phoneValidator,
  RadioButtonsData,
} from "utils/Anonymous";
import Aos from "aos";
import validator from "validator";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
import axios from "axios";
import { ContactusApi } from "utils/API";
import { Router, useRouter } from "next/router";
import PhoneInput from "react-phone-input-2";

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
  const router = useRouter();
  const [radioButton, setRadioButton] = useState(null);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [topicsame, setTopicSame] = useState("");
  const [message, setMessage] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [hidebutton, setHideButton] = useState(false);
  const radiobuttonHandler = (v) => {
    setRadioButton(null);
    setRadioButton(v);
  };
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);

  const handleformsubmit = () => {
    if (validator.isEmpty(firstname)) {
      toast.error("Firstname is required!", {
        duration: 400,
      });
    } else if (validator.isNumeric(firstname)) {
      toast.error("Firstname not accepted number!", {
        duration: 400,
      });
    } else if (validator.isEmpty(lastname)) {
      toast.error("Lastname is required!", {
        duration: 400,
      });
    } else if (validator.isNumeric(lastname)) {
      toast.error("Lastname not accepted number!");
    } else if (!validator.isEmail(mail)) {
      toast.error("Enter valid email!", {
        duration: 400,
      });
    } else if (
      (phone.length > 0 && !validator.isMobilePhone(phone, phoneValidator)) ||
      isNaN(phone)
    ) {
      toast.error("Enter valid phone number!", {
        duration: 400,
      });
    } else if (radioButton === null) {
      toast.error("Please select post!", {
        duration: 400,
      });
    } else if (validator.isEmpty(topicsame)) {
      toast.error("Topic same is required!", {
        duration: 400,
      });
    } else if (validator.isEmpty(message)) {
      toast.error("Message is required!", {
        duration: 400,
      });
    } else {
      // console.log("here");
      axios
        .post(ContactusApi, {
          name: firstname + " " + lastname,
          email: mail,
          postType: radioButton === 0 ? "press" : "blog",
          contact: "+" + phone,
          topic: topicsame,
          message: message,
        })
        .then((response) => {
          // toast.success(response.data.msg);
          router.push("/thankyou");
        })
        .catch((e) => {
          toast.error("Enquiry submition failed!");
        });
    }
  };

  return (
    <Layout
      title={"Contact UNmedia Buzz Now"}
      description={"Contact UNmedia Buzz now by filling the form"}
    >
      <ContainerWrraper
        customClass={`${styles.mobileCustomContainer} ${styles.ContactUsContainerWrraper}`}
      >
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={styles.HeadingCol}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <p className={styles.Heading}>
              Connect to start your Journey with UNmedia Buzz
            </p>
            <Image
              src="/assets/images/brush-3.svg"
              alt="brush"
              loading="lazy"
              className={styles.BrushImage}
            />
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
            className={`ColPaddingRemove ${styles.RemoveSideImageBar}`}
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
            md={12}
            lg={8}
            xl={8}
            className={styles.ControllersSpace}
          >
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <InputController
                  value={firstname}
                  changeHandler={(e) => setFirstname(e.target.value)}
                  label={"FIRST NAME"}
                  type="text"
                />
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <InputController
                  label={"LAST NAME"}
                  type="text"
                  value={lastname}
                  changeHandler={(e) => setLastname(e.target.value)}
                />
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <InputController
                  label={"MAIL"}
                  type="email"
                  value={mail}
                  changeHandler={(e) => setMail(e.target.value)}
                />
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className={styles.InputWrraper}>
                  <label
                    className={styles.Labels}
                    style={{ margin: "0.1rem", marginTop: "1rem" }}
                  >
                    PHONE (Optional)
                  </label>
                  <PhoneInput
                    country={"in"}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                  />
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className={styles.InputWrraperRadio}>
                  <label className={styles.Labels}>
                    WHAT DO YOU WANT TO POST
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
                <InputController
                  label={"TOPIC FOR THE SAME"}
                  type="text"
                  value={topicsame}
                  changeHandler={(e) => setTopicSame(e.target.value)}
                />
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <label className={styles.Labels}>MESSAGE</label>
                <br />
                <textarea
                  style={{ minHeight: "38px" }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
                  clickhandler={handleformsubmit}
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
              <div className={styles.HelpWrraper}>
                <p className={styles.HelpDiscription}>
                  In case of any querry, Kindly connect to this ID
                </p>
                <p className={styles.HelpContact}>
                  <a href="mailto:contact@UNmediaBuzz.com">
                    contact@UNmediaBuzz.com
                  </a>
                </p>
              </div>
            </Row>
          </Col>
        </Row>
      </ContainerWrraper>
    </Layout>
  );
};

export default ContactUs;
