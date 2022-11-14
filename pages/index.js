import ContainerWrraper from "@/components/common/ContainerWrraper";
import GettingStarted from "@/components/common/GettingStarted";
import Layout from "@/components/common/Layout";
import Faq from "@/components/Home/Faq";
import Introduction from "@/components/Home/Introduction";
import PressReleaseHighlights from "@/components/Home/PressReleaseHighlights";
import WhyWeAreDifferent from "@/components/Home/WhyWeAreDifferent";

export default function Home() {
  return (
    <Layout>
      <Introduction />
      <WhyWeAreDifferent />
      <Faq />
      <PressReleaseHighlights />
      <GettingStarted />
    </Layout>
  );
}
