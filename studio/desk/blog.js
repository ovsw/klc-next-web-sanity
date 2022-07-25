import React from "react";
import S from "@sanity/desk-tool/structure-builder";
import sanityClient from "part:@sanity/base/client";
import { IntentLink, Link } from "part:@sanity/base/router";

// import { createSuperPane } from "sanity-super-pane";

import { Card, Stack, Text } from "@sanity/ui";

import { Hash, Article, UserCircle, HouseSimple } from "phosphor-react";
import { FaFeatherAlt } from "react-icons/fa";

import { standardViews } from "./previews/standard";

const EmptyNotice = ({ title, type, link, linkTitle }) => {
  if (!title || !type || !link || !linkTitle) return null;

  return (
    <Card padding={4}>
      <Card padding={[5]} radius={2} shadow={1} tone="critical">
        <Stack space={[3]}>
          <Text align="center" size={[2]} weight="semibold">
            The {title} has not been set.
          </Text>
          <Text align="center" size={[2]}>
            Set your {title} from the <Link href={link}>{linkTitle}</Link>
          </Text>
        </Stack>
      </Card>

      <Stack padding={3} space={[3]}>
        <Text align="center" muted size={[1]}>
          Don't have a {type} yet?{" "}
          <IntentLink intent="create" params={{ type }}>
            Create one now
          </IntentLink>
        </Text>
      </Stack>
    </Card>
  );
};

// Extract our home page from the settings configuration
const currentBlogHome = S.listItem()
  .title("Blog Home Page")
  .icon(HouseSimple)
  .child(async () => {
    const data = await sanityClient.fetch(`
      *[_type == "generalSettings"][0]{
        blog->{_id}
      }
    `);

    if (!data?.blog)
      return S.component(() => (
        <EmptyNotice
          title="Blog Home Page"
          type="page"
          link="settings;general"
          linkTitle="General Settings"
        />
      )).title("Blog Home Page");

    return S.document()
      .id(data.blog._id)
      .schemaType("page")
      .views(standardViews);
  });

export const blogMenu = S.listItem()
  .title("Blog Pages")
  .id("blog")
  .child(
    S.list()
      .title("Blog Pages")
      .items([
        currentBlogHome,
        // S.listItem()
        //   .title("Posts List")
        //   .icon(Article)
        //   .child(createSuperPane("post", S)),
        S.listItem()
          .icon(Article)
          .title("Posts")
          .schemaType("post")
          .child(
            S.documentTypeList("post")
              .title("Post Pages")
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType("post")
                  .views(standardViews)
              )
          ),
        S.divider(),
        S.listItem()
          .icon(Hash)
          .title("Tags")
          .schemaType("tag")
          .child(
            S.documentTypeList("tag")
              .title("Tag Pages")
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType("tag")
                  .views(standardViews)
              )
          ),
        S.listItem()
          .icon(UserCircle)
          .title("Authors")
          .schemaType("author")
          .child(
            S.documentTypeList("author")
              .title("Author Pages")
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType("author")
                  .views(standardViews)
              )
          ),
        /* ================= */
        // S.listItem()
        //   .title("Other Pages")
        //   .schemaType("page")
        //   .child(
        //     S.documentTypeList("page")
        //       .title("Other Pages")
        //       .filter(
        //         `_type == "page" && !(_id in [
        //           *[_type == "generalSettings"][0].home._ref,
        //           *[_type == "generalSettings"][0].error._ref,
        //         ]) && !(_id in path("drafts.**"))`
        //       )
        //       .child((documentId) =>
        //         S.document()
        //           .documentId(documentId)
        //           .schemaType("page")
        //           .views(standardViews)
        //       )
        //       .canHandleIntent(
        //         (intent, { type }) =>
        //           ["create", "edit"].includes(intent) && type === "page"
        //       )
        //   ),
      ])
  )
  .icon(FaFeatherAlt);
