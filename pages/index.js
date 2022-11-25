import GettingStarted from "@/components/common/GettingStarted";
import Layout from "@/components/common/Layout";
import RecentItems from "@/components/common/RecentItems";
import Testimonial from "@/components/common/Testimonial";
import Faq from "@/components/Home/Faq";
import Introduction from "@/components/Home/Introduction";
import PressReleaseHighlights from "@/components/Home/PressReleaseHighlights";
import WhyWeAreDifferent from "@/components/Home/WhyWeAreDifferent";
import Test from "@/components/test-highliter";
import useResponsiveChecker from "hooks/ResponsiveChecker";
import { useEffect } from "react";

export default function Home() {
  const checkResponsive = useResponsiveChecker();
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
          <div className={`section`} data-bg="white"></div>
          <div className={`section`} data-bg="black"></div>
        </div>
      )}
      <RecentItems />
      <Faq />
      <PressReleaseHighlights />
      <Testimonial />
      <GettingStarted />
    </Layout>
  );
}
