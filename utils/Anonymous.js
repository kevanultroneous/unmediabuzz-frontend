export const MAIN_URL = `https://unmediabuzz.com:8000/`;
// export const MAIN_URL = `https://eb13-124-123-177-175.in.ngrok.io/`;
// `http://52.64.42.139:8000/`

import { IoMdLaptop } from "react-icons/io";
export const ProcessList = [
  {
    // icon: <IoMdLaptop size={55} />,
    icon: "/assets/images/submission-black.svg",
    title: "Submission",
    desc: "Submit your story by following our guidelines.",
  },
  {
    // icon: <IoMdLaptop size={55} />,
    icon: "/assets/images/review-black.svg",
    title: "Review",
    desc: "Our editors analyze and review submitted content.",
  },
  {
    // icon: <IoMdLaptop size={55} />,
    icon: "/assets/images/distribution-black.svg",
    title: "Distribution",
    desc: "We deliver it to the audiences that matter most.",
  },
  {
    // icon: <IoMdLaptop size={55} />,
    icon: "/assets/images/report-black.svg",
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
  var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (regex.test(phone)) {
    return true;
  } else {
    return false;
  }
}

export const phoneValidator = [
  "am-Am",
  "ar-AE",
  "ar-BH",
  "ar-DZ",
  "ar-EG",
  "ar-IQ",
  "ar-JO",
  "ar-KW",
  "ar-PS",
  "ar-SA",
  "ar-SY",
  "ar-TN",
  "az-AZ",
  "az-LY",
  "az-LB",
  "bs-BA",
  "be-BY",
  "bg-BG",
  "bn-BD",
  "ca-AD",
  "cs-CZ",
  "da-DK",
  "de-DE",
  "de-AT",
  "de-CH",
  "de-LU",
  "dv-MV",
  "el-GR",
  "en-AU",
  "en-BM",
  "en-BW",
  "en-CA",
  "en-GB",
  "en-GG",
  "en-GH",
  "en-GY",
  "en-HK",
  "en-MO",
  "en-IE",
  "en-IN",
  "en-KE",
  "en-KI",
  "en-MT",
  "en-MU",
  "en-NG",
  "en-NZ",
  "en-PK",
  "en-PH",
  "en-RW",
  "en-SG",
  "en-SL",
  "en-UG",
  "en-US",
  "en-TZ",
  "en-ZA",
  "en-ZM",
  "en-ZW",
  "es-AR",
  "es-BO",
  "es-CL",
  "es-CO",
  "es-CR",
  "es-CU",
  "es-DO",
  "es-HN",
  "es-PE",
  "es-EC",
  "es-ES",
  "es-MX",
  "es-PA",
  "es-PY",
  "es-SV",
  "es-UY",
  "es-VE",
  "et-EE",
  "fa-IR",
  "fi-FI",
  "fj-FJ",
  "fo-FO",
  "fr-BE",
  "fr-BF",
  "fr-FR",
  "fr-GF",
  "fr-GP",
  "fr-MQ",
  "fr-PF",
  "fr-RE",
  "ga-IE",
  "he-IL",
  "hu-HU",
  "id-ID",
  "it-IT",
  "it-SM",
  "ja-JP",
  "ka-GE",
  "kk-KZ",
  "kl-GL",
  "ko-KR",
  "lt-LT",
  "ms-MY",
  "mz-MZ",
  "nb-NO",
  "ne-NP",
  "nl-BE",
  "nl-NL",
  "nn-NO",
  "pl-PL",
  "pt-BR",
  "pt-PT",
  "pt-AO",
  "ro-RO",
  "ru-RU",
  "si-LK",
  "sl-SI",
  "sk-SK",
  "sq-AL",
  "sr-RS",
  "sv-SE",
  "tg-TJ",
  "th-TH",
  "tk-TM",
  "tr-TR",
  "uk-UA",
  "uz-UZ",
  "vi-VN",
  "zh-CN",
  "zh-HK",
  "zh-MO",
  "zh-TW",
  "dz-BT",
];
