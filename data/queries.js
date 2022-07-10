import { groq } from "next-sanity";

// Construct our "home" and "error" page GROQ
export const homeID = groq`*[_type=="generalSettings"][0].home->_id`;
export const homeSlug = groq`*[_type=="generalSettings"][0].home->slug.current`;
export const shopID = groq`*[_type=="generalSettings"][0].shop->_id`;
export const errorID = groq`*[_type=="generalSettings"][0].error->_id`;

// Construct our "page" GROQ
const page = groq`
  "type": _type,
  "slug": slug.current,
  "isHome": _id == ${homeID},
  "isShop": _id == ${shopID}
`;

// Construct our "modules" GROQ
export const modules = groq`
    _type == "hero" => {
       ...
    }
`;
