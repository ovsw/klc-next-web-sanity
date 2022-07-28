import { groq } from "next-sanity";
import { usePreviewSubscription } from "lib/sanity";
import { getClient } from "lib/sanity.server";

import Layout from "components/layout";
import { Module } from "components/modules";
import { queries } from "data";

export default function Home({ data, preview }) {
  // subscribe to the preview data
  const { data: queryDataWithPreview } = usePreviewSubscription(data?.query, {
    // params: { slug: data.home?.slug },
    initialData: data.queryData,
    enabled: preview,
  });

  const { page, site } = queryDataWithPreview;

  // console.log("queryDataWithPreview", queryDataWithPreview);

  return (
    <Layout
      site={site}
      page={page}
      noHeaderTop
      sideBar
      headerStyle={1}
      absolute
      footerStyle={2}
    >
      {/* {JSON.stringify(page)} */}
      {/* <SectionRenderer sections={page?.sections} /> */}
      {preview && <p>Preview mode.</p>}
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
      *[_type == "page" && _id match ${queries.homeID}] | order(_updatedAt desc)[0]
      {
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

  // form the complete query with site data
  const query = queries.formFixedPageQueryWSiteData(pageQuery);

  // make the query
  const queryData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      data: {
        queryData,
        query,
      },
    },
  };
}
