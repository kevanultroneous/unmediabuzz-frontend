import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/rc-paginate.css";
import "../styles/global-variable.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
