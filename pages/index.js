import GettingStarted from "@/components/common/GettingStarted";
import Layout from "@/components/common/Layout";
import RecentItems from "@/components/common/RecentItems";
import Testimonial from "@/components/common/Testimonial";
import Faq from "@/components/Home/Faq";
import Introduction from "@/components/Home/Introduction";
import PressReleaseHighlights from "@/components/Home/PressReleaseHighlights";
import WhyWeAreDifferent from "@/components/Home/WhyWeAreDifferent";
<<<<<<< HEAD
import useResponsiveViewer from "hooks/ResponsiveViewer";
import { useEffect } from "react";
=======
import { useEffect, useRef, useState } from "react";
>>>>>>> 9fb3590bcf1638a4b2404f99ff02706150c07a38

export default function Home() {
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

    // window.addEventListener("scroll", () => {
    //   let findblack = document
    //     .getElementsByClassName("black-f")[0]
    //     .getBoundingClientRect();

    // });
  }, []);
  const [opacity, setOpacity] = useState(false);

  return (
    <Layout>
<<<<<<< HEAD
      {/* <Test /> */}
      {checkResponsive ? (
        <>
          <Introduction />
=======
      <div className={`wrapper`}>
        <div
          className={`section`}
          data-bg="white"
          // style={opacity ? { opacity: "0" } : { opacity: "1" }}
        >
          <Introduction />
        </div>
        <div className={`section black-f`} data-bg="black">
>>>>>>> 9fb3590bcf1638a4b2404f99ff02706150c07a38
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
      <RecentItems />
      <Faq />
      <PressReleaseHighlights />
      <Testimonial />
      <GettingStarted />
    </Layout>
  );
}
