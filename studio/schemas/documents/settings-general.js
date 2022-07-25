import React from "react";

export default {
  title: "General Settings",
  name: "generalSettings",
  type: "document",
  groups: [
    { title: "Site Details", name: "details", default: true },
    { title: "Displays", name: "displays" },
    { title: "Advanced", name: "advanced" },
  ],
  fields: [
    {
      title: "Home Page",
      name: "home",
      type: "reference",
      to: [{ type: "page" }],
      description: "This page will show at the root of your domain",
      group: "displays",
    },
    // {
    //   title: 'Shop Page',
    //   name: 'shop',
    //   type: 'reference',
    //   to: [{ type: 'collection' }],
    //   description: (
    //     <>
    //       This collection will show at: <code>/shop</code>
    //     </>
    //   ),
    //   group: 'displays'
    // },
    {
      title: "Journey Page",
      name: "journey",
      type: "reference",
      to: [{ type: "page" }],
      description: (
        <>
          This page will be shown at: <code>/the-journey</code>
        </>
      ),
      group: "displays",
    },
    {
      title: "Blog Home Page",
      name: "blog",
      type: "reference",
      to: [{ type: "page" }],
      description: (
        <>
          This is the page used as a blog home page. Is usually shows a list of
          all the blogs on the website.
        </>
      ),
      group: "displays",
    },
    {
      title: "Tags Home Page",
      name: "tags",
      type: "reference",
      to: [{ type: "page" }],
      description: (
        <>
          This page will be shown at: <code>/tags</code>
        </>
      ),
      group: "displays",
    },
    {
      title: "Error Page (404)",
      name: "error",
      type: "reference",
      to: [{ type: "page" }],
      description:
        "This page will show for any URL at your domain that does not exist yet",
      group: "displays",
    },
    {
      title: "Site Title",
      name: "siteTitle",
      type: "string",
      description: "The name of your site, usually your company/brand name",
      group: "details",
    },
    {
      title: "Live Site URL",
      description: "The root domain or subdomain of your website",
      name: "siteURL",
      type: "url",
      validation: (Rule) => Rule.required(),
      group: "details",
    },
    {
      title: "Google Tag Manager (GTM)",
      description: "To enable GTM enter your Container ID",
      name: "gtmID",
      type: "string",
      group: "advanced",
    },
    {
      title: "Klaviyo Site ID (Public API Key)",
      description: "For product waitlists and newsletter forms",
      name: "klaviyoAccountID",
      type: "string",
      group: "advanced",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "General Settings",
      };
    },
  },
};
