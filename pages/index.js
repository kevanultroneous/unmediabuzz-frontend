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
          } else {
            el.style.background = "white";
            document.getElementsByClassName("wrapper")[0].style.background =
              "white";
            document.getElementsByClassName(
              "ProcessWrapperStyle"
            )[0].style.color = "black";
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
    <Layout>
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
