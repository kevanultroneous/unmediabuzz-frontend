import GettingStarted from "@/components/common/GettingStarted";
import Layout from "@/components/common/Layout";
import RecentItems from "@/components/common/RecentItems";
import Testimonial from "@/components/common/Testimonial";
import Faq from "@/components/Home/Faq";
import Introduction from "@/components/Home/Introduction";
import PressReleaseHighlights from "@/components/Home/PressReleaseHighlights";
import WhyWeAreDifferent from "@/components/Home/WhyWeAreDifferent";
import axios from "axios";
import useResponsiveViewer from "hooks/ResponsiveViewer";
import { useEffect, useState } from "react";
import { RecentPrAPI, TopBuzzListAPI } from "utils/API";

export default function Home({ data }) {
  const checkResponsive = useResponsiveViewer();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.background = "black";
            document.getElementsByClassName("wrapper")[0].style.background =
              "black";
            document.getElementsByClassName(
              "ProcessWrapperStyle"
            )[0].style.color = "white";

            document.getElementsByClassName("processIcon")[0].src =
              "../assets/icons/blackw.svg";
            document.getElementsByClassName("processIcon")[1].src =
              "../assets/icons/blackw.svg";
            document.getElementsByClassName("processIcon")[2].src =
              "../assets/icons/blackw.svg";
            document.getElementsByClassName("processIcon")[3].src =
              "../assets/icons/blackw.svg";
          } else {
            el.style.background = "white";
            document.getElementsByClassName("wrapper")[0].style.background =
              "white";
            document.getElementsByClassName(
              "ProcessWrapperStyle"
            )[0].style.color = "black";
            document.getElementsByClassName("processIcon")[0].src =
              "../assets/icons/black.svg";
            document.getElementsByClassName("processIcon")[1].src =
              "../assets/icons/black.svg";
            document.getElementsByClassName("processIcon")[2].src =
              "../assets/icons/black.svg";
            document.getElementsByClassName("processIcon")[3].src =
              "../assets/icons/black.svg";
          }
        }),
      {
        threshold: 0.3,
      }
    );

    const el = document.getElementsByClassName("section")[1];

    observer.observe(el);
  }, []);

  return (
    <Layout
      title={"Press Release Distribution | Submit Press Release Today"}
      description={
        "UNMedia Buzz helps you with distributing and reaching new audiences around the globe. Submit a Press Release on the thriving digital news distribution network."
      }
    >
      {checkResponsive ? (
        <>
          <Introduction />
          <WhyWeAreDifferent />
        </>
      ) : (
        <div className={`wrapper`}>
          <div className={`section`} data-bg="white">
            <Introduction />
          </div>
          <div className={`section`} data-bg="black">
            <WhyWeAreDifferent />
          </div>
        </div>
      )}

      <RecentItems
        postList={data.topbuzz?.data}
        blogList={data.recentitem?.data}
      />
      <Faq />
      <PressReleaseHighlights />
      <Testimonial />
      <GettingStarted />
    </Layout>
  );
}
export async function getServerSideProps() {
  const TopbuzzList = await axios
    .get(TopBuzzListAPI)
    .then((res) => res.data)
    .catch((e) => console.log(e));
  const RecentItems = await axios
    .get(RecentPrAPI)
    .then((res) => res.data)
    .catch((e) => console.log(e));
  return {
    props: {
      data: { topbuzz: TopbuzzList, recentitem: RecentItems },
    },
  };
}
