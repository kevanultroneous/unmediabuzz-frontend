import Head from "next/head";
import { forallschema } from "utils/schemas";
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
        <link rel="icon" href="/assets/icons/mainlogo.svg" />
        <meta name="robots" content={robots} />
        <meta property="og:title" content={ogtitle} />
        <meta property="og:image" content={ogimage} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(forallschema) }}
        ></script>
        <script
          async
          defer
          crossorigin="anonymous"
          src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v15.0"
          nonce="mkOQUy2T"
        ></script>
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
