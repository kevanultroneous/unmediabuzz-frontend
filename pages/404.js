import ContainerWrraper from "@/components/common/ContainerWrraper";
import GettingStarted from "@/components/common/GettingStarted";
import Layout from "@/components/common/Layout";

const NotFound = () => {
  return (
    <Layout title={"404"} robots={"noindex,nofollow"}>
      <ContainerWrraper customClass={`NofoundSpace`}>
        <h1>No Page Found</h1>
      </ContainerWrraper>
      <GettingStarted />
    </Layout>
  );
};

export default NotFound;
