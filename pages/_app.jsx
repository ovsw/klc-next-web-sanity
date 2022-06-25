import Head from "next/head";
import Layout from "../src/layout/Layout";

// import Teaser from "../src/components/teaser";
// import Grid from "../src/components/grid";
// import Feature from "../src/components/feature";

// import Page from "../src/components/pages/page";
// import Post from "../src/components/pages/post";

// import Home1Banner from "../src/components/wellcon/Home1/Home1Banner";
// import Home2Banner from "../src/components/wellcon/Home2/Home2Banner";
// import Home3Banner from "../src/components/wellcon/Home3/Home3Banner";

// import StepsCustom from "../src/components/steps-custom";
// import Home2Why from "../src/components/wellcon/home2/Home2Why";
// import Home3About from "../src/components/wellcon/Home3/Home3About";
// import PricingSection from "../src/components/Pricing";
// import PackagesSection from "../src/components/PackagesSection";
// import TestimonialsSection from "../src/components/Testimonials";
// import PageTitleBanner from "../src/components/PageTitleBanner";
// import PageBodySection from "../src/components/PageBodySection";
// import PostBodySection from "../src/components/PostBodySection";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout noHeaderTop sideBar headerStyle={1} absolute footerStyle={2}>
      <Head>
        <title>Climb Kids Life Coaching</title>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
