import S from "@sanity/desk-tool/structure-builder";

import EyeIcon from "part:@sanity/base/eye-icon";
import EditIcon from "part:@sanity/base/edit-icon";
import SyncIcon from "part:@sanity/base/sync-icon";
import { Robot } from "phosphor-react";

import SeoPreview from "./seo/seo-preview";
// import LivePreview from "./live-preview";
// live preview
import Iframe from "sanity-plugin-iframe-pane";
import resolveProductionUrl from "../../resolveProductionUrl";
import resolveProductionUrlAsync from "../../resolveProductionUrlAsync";

export const standardViews = [
  S.view.form().icon(EditIcon),
  S.view.component(SeoPreview).icon(Robot).title("SEO Preview"),
  S.view
    .component(Iframe)
    .icon(EyeIcon)
    .options({
      url: async (doc) => await resolveProductionUrlAsync(doc),
      reload: {
        button: true, // default `undefined`
        // revision: true, // default `undefined`
      },
    })
    .title("Live Preview"),
  // S.view.component(LivePreview).id("test").icon(SyncIcon).title("Live Preview"),
];
