// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document types
import page from "./documents/page";
import section from "./documents/section";

import author from "./documents/author";
// import pageHome from "./documents/pageHome";
import pageJourneyItem from "./documents/page-journey-item";
import pageJourneyStep from "./documents/page-journey-step";
import post from "./documents/post";
import tag from "./documents/tag";

import generalSettings from "./documents/settings-general";
import cookieSettings from "./documents/settings-cookie";
import promoSettings from "./documents/settings-promo";
// import headerSettings from "./documents/settings-header";
// import footerSettings from './documents/settings-footer'
// import shopSettings from './documents/settings-shop'
import seoSettings from "./documents/settings-seo";
// import menu from './documents/menu'
import redirect from "./documents/redirect";

// import object schemas
import complexPortableText from "./objects/complexPortableText";
import photo from "./objects/photo";
import mainImage from "./objects/mainImage";
import quote from "./objects//rteBlocks/quote";

// objects from HULL
import seo from "./objects/seo";

// import module schemas
import hero from "./modules/hero";
import topBanner from "./modules/top-banner";
import latestPosts from "./modules/latest-posts";
import pricing from "./modules/pricing";
import steps from "./modules/steps";
import testimonials from "./modules/testimonials";
import cta from "./modules/cta";
import richText from "./modules/rich-text";
import program from "./modules/program";
import about from "./modules/about";
import allPosts from "./modules/all-posts";

/*  ------------------------------------------ */
/*  Your Schema documents / modules / objects
/*  ------------------------------------------ */
export default createSchema({
  // We name our schema
  name: "content",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* ----------------- */
    /* 1: Document types */
    page,
    section,

    author,
    // pageHome,
    pageJourneyItem,
    pageJourneyStep,
    post,
    tag,

    generalSettings,
    cookieSettings,
    promoSettings,
    seoSettings,
    redirect,

    /* --------------- */
    /* 2: Module types */
    hero,
    topBanner,
    pricing,
    steps,
    testimonials,
    latestPosts,
    allPosts,
    cta,
    richText,
    program,
    about,

    /* ----------------------- */
    /* 3: Generic Object types */
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    complexPortableText,
    mainImage,
    photo,

    quote,

    seo,
  ]),
});
