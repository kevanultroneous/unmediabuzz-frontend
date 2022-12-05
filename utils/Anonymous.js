export const MAIN_URL = `http://192.168.1.28:8000/`;
// `http://52.64.42.139:8000/`

import { IoMdLaptop } from "react-icons/io";
export const ProcessList = [
  {
    icon: <IoMdLaptop size={55} />,
    title: "Submit",
    desc: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    icon: <IoMdLaptop size={55} />,
    title: "Boost",
    desc: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    icon: <IoMdLaptop size={55} />,
    title: "Coverage",
    desc: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    icon: <IoMdLaptop size={55} />,
    title: "Report",
    desc: "Lorem Ipsum is simply dummy text of the printing.",
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
    months[new Date(ts).getMonth() - 1] +
    " " +
    new Date(ts).getFullYear()
  );
};
export const specialcharacter = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
