
import "bootstrap/dist/css/bootstrap.css"
// import "bootstrap/dist/js/bootstrap.bundle.min.js"
import '../styles/globals.scss';

if (typeof document !== "undefined") {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
