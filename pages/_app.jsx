import Head from "next/head";
import Layout from "components/layout/Layout";

import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";

import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <LazyMotion features={domAnimation}>
      <Layout noHeaderTop sideBar headerStyle={1} absolute footerStyle={2}>
        {/* <Head>
          <title>Climb Kids Life Coaching</title>
          <link rel="icon" type="image/png" sizes="32x32" href="favicon.ico" />
        </Head> */}
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => {
            document.body.classList.remove("overflow-hidden");
          }}
        >
          <Site Component={Component} pageProps={pageProps} router={router} />
        </AnimatePresence>
      </Layout>
    </LazyMotion>
  );
}

export default MyApp;
