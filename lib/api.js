import client from "./sanity";

const postFields = `// groq
  title, 
  'slug': slug.current
`;

export async function getAllPosts() {
  const results = await client.fetch(`*[_type == "post"]{${postFields}}`);
  return results;
}
