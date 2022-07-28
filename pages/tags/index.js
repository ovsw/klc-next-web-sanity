import { groq } from "next-sanity";
import { usePreviewSubscription } from "lib/sanity";
import { getClient } from "lib/sanity.server";

import Layout from "components/layout";
import { Module } from "components/modules";

import { queries } from "data";

// import { useDebugValue } from "react";

// import getOgImage from "../utils/getOgImageFromStory";

export default function Page({ data, preview }) {
  // subscribe to the preview data
  const { data: pageQueryDataWithPreview } = usePreviewSubscription(
    data?.query,
    {
      // params: { slug: data.home?.slug },
      initialData: data.pageQueryData,
      enabled: preview,
    }
  );

  const { page, site } = pageQueryDataWithPreview;

  // console.log("pageQueryDataWithPreview", pageQueryDataWithPreview);

  return (
    <Layout
      page={page}
      site={site}
      noHeaderTop
      sideBar
      headerStyle={1}
      absolute
      footerStyle={2}
    >
      {/* <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {/* <NextSeo
        title={story.content.seo_title}
        description={story.content.seo_description}
        canonical={`${SEO.openGraph.url}/${story.full_slug}`}
        noindex={story.content.seo_noindex}
        openGraph={ogContent}
      /> */}
      {/* {preview && <p>Preview mode.</p>} */}
      {page?.modules?.map((module, key) => {
        return <Module key={key} index={key} module={module} />;
      })}
    </Layout>
  );
}

// This function is called during the build (build time)
// Provides props to your page
// It will create static page
export async function getStaticProps({ preview = false }) {
  const pageQuery = groq`
     *[_type == "page" && _id match ${queries.tagsHomeID}] | order(_updatedAt desc)[0]{
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

  const query = queries.formFixedPageQueryWSiteData(pageQuery);
  // fetch the home page data at build time
  const pageQueryData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      data: {
        pageQueryData,
        query,
      },
    },
  };
}
