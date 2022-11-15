import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
          key="unmediabuzz-key-description"
        />
        <meta
          name="keywords"
          content={keywords}
          key="unmediabuzz-key-keywords"
        />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "page | Unmediabuzz",
  description: "unmediabuzz description",
  keywords: "keywords",
};

export default Layout;
