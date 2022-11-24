import GettingStarted from "@/components/common/GettingStarted";
import Layout from "@/components/common/Layout";
import RecentItems from "@/components/common/RecentItems";
import Testimonial from "@/components/common/Testimonial";
import Faq from "@/components/Home/Faq";
import Introduction from "@/components/Home/Introduction";
import PressReleaseHighlights from "@/components/Home/PressReleaseHighlights";
import WhyWeAreDifferent from "@/components/Home/WhyWeAreDifferent";

export default function Home() {
  return (
    <Layout>
      <Introduction />
      <WhyWeAreDifferent />
      <RecentItems />
      <Faq />
      {/* <PressReleaseHighlights /> */}
      <Testimonial />
      {/* <GettingStarted /> */}
    </Layout>
  );
}
