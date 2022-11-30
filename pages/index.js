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
    const sections = [...document.querySelectorAll(".section")];

    window.lastScrollTop = window.pageYOffset;

    document.body.style.background = sections[0].getAttribute("data-bg");

    window.addEventListener("scroll", onScroll);

    function onScroll() {
      const scrollTop = window.pageYOffset;

      const section = sections
        .map((section) => {
          const el = section;
          const rect = el.getBoundingClientRect();
          return { el, rect };
        })
        .find((section) => section.rect.bottom >= window.innerHeight * 0.5);
      document.getElementsByClassName("wrapper")[0].style.background =
        section?.el.getAttribute("data-bg");
    }
  }, []);
  const [opacity, setOpacity] = useState(false);

  return (
    <Layout>
      {/* <Test /> */}
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
        postList={data.topbuzz.data}
        blogList={data.recentitem.data}
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
