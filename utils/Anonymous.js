export const MAIN_URL = `https://unmediabuzz.com:8000/`;
export const POST_URL = `https://unmediabuzz.com/press-release/`;
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
export const blankobj = {
  _id: null,
  title: null,
  summary: "",
  category: ["638487d7d4d6b72e70bf20b1"],
  subCategory: ["63849271b31346cefa90379c"],
  content:
    "<p>The Pay-Per-Click Advertise Service report presents information related to restraints, key drivers, and opportunities, along with a detailed global market share analysis. The current market is quantitatively analyzed from 2022 to 2029 to highlight the global market growth scenario. The competitive landscape comprises key players, strategies, and new developments in the upcoming years.</p><p>Download FREE Sample Report @ https://www.reportsnreports.com/contacts/requestsample.aspx?name=6511285</p><p>Top Key Players are covered in this report:<br>- Surface Shields<br>- Surface Protection Services<br>- Protex Products<br>- Integrated Protective Coating<br>- Delta T &amp; Proptective Product<br>- Aegion Corporation<br>- Dampney Company<br>- TF Warren Group<br>- Blair Rubber<br>- Spence Corrosion Services<br>- Applied Rubber Linings<br>- Moon Fabricating Corporation<br>- Wasser Corporation<br>- 3M</p><p>The report divides the international Pay-Per-Click Advertise Service market by application. By region, by type, and by end user. Each segment of the market is examined broadly to deliver trustworthy knowledge for market investments. The Pay-Per-Click Advertise Service research report reveals the current market norms, latest important revolutions of outcomes, and market players. Hence, this research report will help the customers in the global market plan their next future towards the environment of the marketâs future. It additionally discusses about the market size and growth parts of different Segments. Studying and analyzing the impact of Coronavirus COVID-19 on the Pay-Per-Click Advertise Service industry, the report gives an in-depth analysis and expert suggestions on how to face the post COIVD-19 period. This market research study presents actionable market insights with which environmental and profitable business approaches can be created.</p><p>Regional Assessment: Global Pay-Per-Click Advertise Service Market<br>This referential document assessing the market has been compiled to understand diverse market developments across specific regional pockets such as Europe, North and Latin American countries, APAC nations, as well as several countries across MEA and RoW that are directly witnessing maneuvering developments over the years. A specific understanding on country level and local level developments has also been mindfully included in the report to encourage high rise growth declining market constraints and growth retardants.</p><p>North America includes the United States, Canada, and Mexico<br>Europe includes Germany, France, UK, Italy, Spain<br>South America includes Colombia, Argentina, Nigeria, and Chile<br>The Asia Pacific includes Japan, China, Korea, India, Saudi Arabia, and Southeast Asia</p><p>Global Pay-Per-Click Advertise Service Market by Application:<br>Large Enterprises<br>Small and Mid-sized Enterprises</p><p>The market research includes historical and forecast data from like demand, application details, price trends, and company shares of the Pay-Per-Click Advertise Service by geography, especially focuses on the key regions like United States, European Union, China, and other regions.</p><p>In addition, the report provides insight into main drivers, challenges, opportunities and risk of the market and strategies of suppliers. Key players are profiled as well with their market shares in the global Pay-Per-Click Advertise Service market discussed. Overall, this report covers the historical situation, present status and the future prospects of the global Pay-Per-Click Advertise Service market for 2022-2028.</p><p>This Pay-Per-Click Advertise Service Report Provides a superior market perspective in terms of product trends, marketing strategy, future products, new geographical markets, future events, sales strategies, customer actions or behaviors. This market research study presents actionable market insights with which sustainable and money-spinning business strategies can be created.</p><p>Studying and analyzing the impact of Coronavirus COVID-19 on the Pay-Per-Click Advertise Service industry, the report provides in-depth analysis and professional advices on how to face the post COIVD-19 period.</p><p>Feel free to ask your queries at https://www.reportsnreports.com/contacts/inquirybeforebuy.aspx?name=6511285</p><p>The essential aspects like the latest market dynamics, development trends, and growth opportunities are presented, along with industry barriers, developmental threats, and risk factors. The report provides a concise market view that will provide ease of understanding. Also, the study presents the analytical depiction of the global market industry with the current and future estimations of the market.</p><p>Contact Us:<br>Tower B5, office 101,<br>Magarpatta SEZ,<br>Hadapsar, Pune-411013, India<br>+ 1 888 391 5441<br>sales@reportsandreports.com</p><p>About Us: ReportsnReports.com is your single source for all market research needs. Our database includes 500,000+ market research reports from over 95 leading global publishers &amp; in-depth market research studies of over 5000 micro markets.</p>",
  author: "",
  companyName: "ReportsnReports",
  seoTitle:
    "Pay-Per-Click Advertise Service Market Set For Rapid Growth, To Reap Bulk Revenues And The Factors For The Same Discussed From 2022 To 2028",
  seoDescription: "",
  seoKeywords:
    "presses release,news release,public relations,media release,pressreleases,publicity,pr,marketing,advertising,pr service,pr marketing,pr strategy",
  backlinkUrl: "https://www.reportsnreports.com/",
  slugUrl: "pay-per-click-advertise-service-market-set-for-rapid-growth",
  draftStatus: "published",
  postType: "press",
  releaseDate: "2022-12-13T13:05:00.000Z",
  submittedDate: "2022-12-09T13:16:40.196Z",
  paidStatus: false,
  totalPaidAmount: "0",
  homePageStatus: false,
  isApproved: true,
  isActive: true,
  createdAt: "2022-12-13T13:03:35.612Z",
  updatedAt: "2022-12-13T13:10:49.598Z",
  __v: 0,
  selectedCategory: "Internet",
  selectedSubCategory: "Blogging, Marketing & SEO",
};
