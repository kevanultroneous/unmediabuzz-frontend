import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({
  title,
  keywords,
  description,
  children,
  ogtitle,
  ogimage,
  robots = "index,follow",
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
          key="UNmedia Buzz-key-description"
        />
        <meta
          name="keywords"
          content={keywords}
          key="UNmedia Buzz-key-keywords"
        />
        <meta name="robots" content={robots} />
        <meta property="og:title" content={ogtitle} />
        <meta property="og:image" content={ogimage} />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "UNmedia Buzz",
  description: "",
  keywords: "",
};

export default Layout;
