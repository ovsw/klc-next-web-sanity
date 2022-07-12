import { groq } from "next-sanity";
import { usePreviewSubscription, urlFor } from "lib/sanity";
import { getClient } from "lib/sanity.server";

import { Module } from "components/modules";

import { queries } from "data";

// home query, extracted because we use in both getStaticProps and the preview Subscription
const homeQuery = groq`
     *[_type == "page" && _id match *[_type=="generalSettings"][0].home->_id] | order(_updatedAt desc)[0]{
      "id": _id,
      hasTransparentHeader,
      modules[]{
        defined(_ref) => { ...@->content[0] {
         ${queries.modules}
        }},
        !defined(_ref) => {
         ${queries.modules}
        }
      },
      title,
      seo
    }`;

export default function Home({ data, preview }) {
  // subscribe to the preview data
  const { data: page } = usePreviewSubscription(homeQuery, {
    // params: { slug: data.home?.slug },
    initialData: data.page,
    enabled: preview,
  });

  console.log("PREVIEW", preview);

  // const { page, site } = data;
  // console.log("PAGE ID:", page.id);

  return (
    <>
      {/* {JSON.stringify(page)} */}
      {/* <SectionRenderer sections={page?.sections} /> */}
      {preview && <p>Preview mode.</p>}
      {page.modules.map((module, key) => {
        return <Module key={key} index={key} module={module} />;
      })}
    </>
  );
}

// This function is called during the build (build time)
// Provides props to your page
// It will create static page
export async function getStaticProps({ preview = false }) {
  // fetch the home page data at build time
  const pageData = await getClient(preview).fetch(homeQuery);

  return {
    props: {
      preview,
      data: { page: pageData },
    },
  };
}
