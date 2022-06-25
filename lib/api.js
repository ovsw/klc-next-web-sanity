import client from "./sanity";

export async function getAllPosts() {
  const results = await client.fetch(`*[_type == "post"]{title, slug}`);
  return results;
}
