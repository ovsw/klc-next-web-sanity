// /deskStructure.js
// import React from "react";
import S from "@sanity/desk-tool/structure-builder";
import { createSuperPane } from "sanity-super-pane";
import { Article } from "phosphor-react";

// import {
//   MdSettings,
//   MdPerson,
//   MdFolder,
//   MdBook,
//   MdList,
//   MdArrowForward,
//   MdEdit,
//   MdVisibility,
//   MdTag,
//   MdHome,
// } from "react-icons/md";
// import { FaBook, FaFeatherAlt } from "react-icons/fa";
// import { IoFootstepsSharp, IoFootstepsOutline } from "react-icons/io5";

// import Emoji from "a11y-react-emoji";

// const AuthorIcon = () => <Emoji style={{ fontSize: "2rem" }} symbol="✍️" />;
// const BlogIcon = () => <Emoji style={{ fontSize: "2rem" }} symbol="📔" />;

import { settingsMenu } from "./desk/settings";
import { pagesMenu } from "./desk/pages";
import { blogMenu } from "./desk/blog";
// import { shopMenu } from './desk/shop'
// import { menusMenu } from './desk/menus'

export default () =>
  S.list()
    .title("Website")
    .items(
      [
        settingsMenu,
        S.divider(),
        pagesMenu,
        S.divider(),
        blogMenu,
        S.divider(),
        S.listItem()
          .title("[Dev] All Pages List")
          .child(createSuperPane("page", S)),
        S.listItem()
          .title("[Dev] All Posts List")
          .icon(Article)
          .child(createSuperPane("post", S)),
      ]
      // S.documentTypeListItems()
    );
