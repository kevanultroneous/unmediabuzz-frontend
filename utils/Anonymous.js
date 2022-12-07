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
export const specialcharacter = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

export function isValidPhoneNumber(phone) {
  var regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  if (regex.test(phone)) {
    return true;
  } else {
    return false;
  }
}
