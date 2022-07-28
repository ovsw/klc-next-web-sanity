import Head from "next/head";
import Layout from "components/layout";

import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <LazyMotion features={domAnimation}>
      <Component {...pageProps} />
    </LazyMotion>
  );
}

export default MyApp;
