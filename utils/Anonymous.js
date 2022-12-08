export const MAIN_URL = `http://192.168.1.28:8000/`;
// export const MAIN_URL = `https://eb13-124-123-177-175.in.ngrok.io/`;
// `http://52.64.42.139:8000/`

import { IoMdLaptop } from "react-icons/io";
export const ProcessList = [
  {
    // icon: <IoMdLaptop size={55} />,
    icon: "./assets/icons/black.svg",
    title: "Submission",
    desc: "Submit your story by following our guidelines.",
  },
  {
    // icon: <IoMdLaptop size={55} />,
    icon: "./assets/icons/black.svg",
    title: "Review",
    desc: "Our editors analyze and review submitted content.",
  },
  {
    // icon: <IoMdLaptop size={55} />,
    icon: "./assets/icons/black.svg",
    title: "Distribution",
    desc: "We deliver it to the audiences that matter most.",
  },
  {
    // icon: <IoMdLaptop size={55} />,
    icon: "./assets/icons/black.svg",
    title: "Report",
    desc: "Get a thorough report to optimize your strategy.",
  },
];
export const Faqdata = [
  {
    que: "How to submit a press release in your portal?",
    ans: (
      <>
        Well, we have kept it really simple. Just fill out the contact us form,
        and our Editor will be in touch with you to start the submission and
        distribution process.
      </>
    ),
  },
  {
    que: "Would your editorial team check my press release?",
    ans: (
      <>
        Yes, our Editor team will check your press release in detail and ensure
        that it meets our writing guidelines before publishing it on our
        network.
      </>
    ),
  },
  {
    que: "Do you guys take charge of distributing my press release?",
    ans: (
      <>
        No, we always allow free press release submission and distribution in
        our network. However, the promoted press releases (we call them Buzzed)
        will always get better coverage.
      </>
    ),
  },
  {
    que: "Will I get the report of my press release distribution?",
    ans: (
      <>
        Yes, all Buzzed press releases will get a special report showcasing the
        distribution of your content.
      </>
    ),
  },
  {
    que: "Can you help me with the press release writing?",
    ans: (
      <>
        Yes, we do provide press release writing services too. Kindly fill out
        the contact form, and we shall get back to you.
      </>
    ),
  },
];
export const RadioButtonsData = ["Press Release", "Blog Post"];
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const timestampToDate = (ts) => {
  return (
    new Date(ts).getDate() +
    " " +
    months[new Date(ts).getMonth() - 1 + 1] +
    " " +
    new Date(ts).getFullYear()
  );
};
export const specialcharacter = /[.,#<>{}|%\s]/g;

export function isValidPhoneNumber(phone) {
  var regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  if (regex.test(phone)) {
    return true;
  } else {
    return false;
  }
}
