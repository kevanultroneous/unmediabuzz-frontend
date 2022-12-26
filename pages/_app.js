import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/rc-paginate.css";
import "../styles/global-variable.css";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
import { Router } from "next/router";
import { Spinner } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const start = () => {
  //     console.log("start");
  //     setLoading(true);
  //   };
  //   const end = () => {
  //     console.log("finished");
  //     setLoading(false);
  //   };
  //   Router.events.on("routeChangeStart", start);
  //   Router.events.on("routeChangeComplete", end);
  //   Router.events.on("routeChangeError", end);
  //   return () => {
  //     Router.events.off("routeChangeStart", start);
  //     Router.events.off("routeChangeComplete", end);
  //     Router.events.off("routeChangeError", end);
  //   };
  // }, []);

  return (
    // <>
    //   {loading ? (
    //     <div className={`loading`}>
    //       <Spinner animation="border" />
    //     </div>
    //   ) : (
    <Component {...pageProps} />
    //   )}
    // </>
  );
}

export default MyApp;
