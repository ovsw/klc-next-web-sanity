import S from "@sanity/desk-tool/structure-builder";

import {
  Gear,
  PaintBucket,
  ShoppingCart,
  NavigationArrow,
  AnchorSimple,
  Cookie,
  FlagBanner,
  GlobeSimple,
  Shuffle,
} from "phosphor-react";

export const settingsMenu = S.listItem()
  .title("Settings")
  .child(
    S.list()
      .title("Settings")
      .items([
        S.listItem()
          .title("General")
          .child(
            S.editor()
              .id("generalSettings")
              .schemaType("generalSettings")
              .documentId("generalSettings")
          )
          .icon(Gear),
        /* ----------------- */
        // S.divider(),
        // S.listItem()
        //   .title('Colors')
        //   .child(S.documentTypeList('solidColor').title('Colors'))
        //   .icon(PaintBucket),
        /* ----------------- */
        // S.divider(),
        // S.listItem()
        //   .title('Shop')
        //   .child(
        //     S.editor()
        //       .id('shopSettings')
        //       .schemaType('shopSettings')
        //       .documentId('shopSettings')
        //   )
        //   .icon(ShoppingCart),
        /* ----------------- */
        // S.divider(),
        // S.listItem()
        //   .title('Header')
        //   .child(
        //     S.editor()
        //       .id('headerSettings')
        //       .schemaType('headerSettings')
        //       .documentId('headerSettings')
        //   )
        //   .icon(NavigationArrow),
        // S.listItem()
        //   .title('Footer')
        //   .child(
        //     S.editor()
        //       .id('footerSettings')
        //       .schemaType('footerSettings')
        //       .documentId('footerSettings')
        //   )
        //   .icon(AnchorSimple),
        /* ----------------- */
        S.divider(),
        S.listItem()
          .title("Cookie Consent")
          .child(
            S.editor()
              .id("cookieSettings")
              .schemaType("cookieSettings")
              .documentId("cookieSettings")
          )
          .icon(Cookie),
        S.listItem()
          .title("Promo Bar")
          .child(
            S.editor()
              .id("promoSettings")
              .schemaType("promoSettings")
              .documentId("promoSettings")
          )
          .icon(FlagBanner),
        /* ----------------- */
        S.divider(),
        S.listItem()
          .title("Default SEO / Share")
          .child(
            S.editor()
              .id("seoSettings")
              .schemaType("seoSettings")
              .documentId("seoSettings")
          )
          .icon(GlobeSimple),
        S.listItem()
          .title("Redirects")
          .child(S.documentTypeList("redirect").title("Redirects"))
          .icon(Shuffle),
      ])
  )
  .icon(Gear);
